const express = require('express')
const mongoose = require('mongoose')
const { Server } = require('socket.io')
const app = express()

// Configurar Express
app.use(express.json())

// Conectar ao MongoDB
mongoose
  .connect('mongodb://localhost/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err))

// Definir esquemas
const tableSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true, unique: true },
  section: { type: String, required: true },
  status: {
    type: String,
    enum: ['empty', 'seated', 'appetizers', 'entree', 'desserts'],
    default: 'empty',
  },
  currentOrder: { type: String, default: null },
  lastUpdated: { type: Date, default: Date.now },
})

const orderSchema = new mongoose.Schema({
  orderGuid: { type: String, required: true, unique: true },
  tableNumber: { type: String, required: true },
  status: { type: String, required: true },
  items: { type: Array, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
})

const Table = mongoose.model('Table', tableSchema)
const Order = mongoose.model('Order', orderSchema)

// Inicializar mesas
async function initializeTables() {
  try {
    const tables = [
      ...Array.from({ length: 10 }, (_, i) => ({
        tableNumber: `${20 + i}`,
        section: 'Front Patio',
      })),
      ...[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 150].map((num) => ({
        tableNumber: `${num}`,
        section: 'Dining Room',
      })),
      ...Array.from({ length: 11 }, (_, i) => ({
        tableNumber: `${60 + i}`,
        section: 'Back Patio',
      })),
    ]
    await Table.deleteMany({})
    await Table.insertMany(tables)
    console.log('Mesas inicializadas com sucesso')
  } catch (err) {
    console.error('Erro ao inicializar mesas:', err)
  }
}

// Iniciar servidor
const server = app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
  initializeTables()
})

const io = new Server(server)

// Endpoint de webhook
app.post('/webhook', async (req, res) => {
  try {
    const payload = req.body
    const { eventType, order } = payload

    if (!eventType || !order) {
      return res.status(400).send('Payload inválido')
    }

    const tableNumber = order.tableNumber
    const items = order.items || []

    if (eventType === 'ORDER_CREATED') {
      await Order.create({
        orderGuid: order.orderGuid,
        tableNumber,
        status: order.status,
        items,
        createdAt: new Date(order.createdAt),
        updatedAt: new Date(order.createdAt),
      })

      const hasFood = items.some((item) =>
        ['Appetizer', 'Entree', 'Dessert'].includes(item.category)
      )
      const newStatus = hasFood ? 'appetizers' : 'seated'

      await Table.updateOne(
        { tableNumber },
        {
          status: newStatus,
          currentOrder: order.orderGuid,
          lastUpdated: new Date(order.createdAt),
        },
        { upsert: true }
      )
    }

    if (eventType === 'ORDER_UPDATED') {
      await Order.updateOne(
        { orderGuid: order.orderGuid },
        { status: order.status, items, updatedAt: new Date(order.updatedAt) }
      )

      let newStatus
      if (order.status === 'COMPLETED') {
        newStatus = 'paid'
      } else {
        const pendingItems = items.filter((item) => item.status === 'PENDING')
        const completedItems = items.filter(
          (item) => item.status === 'COMPLETED'
        )

        if (pendingItems.length === 0 && completedItems.length > 0) {
          newStatus = 'checkdroped'
        } else if (pendingItems.every((item) => item.category === 'Dessert')) {
          newStatus = 'desserts'
        } else if (pendingItems.some((item) => item.category === 'Entree')) {
          newStatus = 'entree'
        } else if (pendingItems.some((item) => item.category === 'Appetizer')) {
          newStatus = 'appetizers'
        } else if (completedItems.length > 0) {
          newStatus = 'seated'
        } else {
          newStatus = 'seated'
        }
      }

      await Table.updateOne(
        { tableNumber },
        {
          status: newStatus,
          lastUpdated: new Date(order.updatedAt),
          ...(order.status === 'COMPLETED' ? { currentOrder: null } : {}),
        }
      )
    }

    const tables = await Table.find()
    io.emit('tableUpdate', tables)

    res.status(200).send('Webhook processado')
  } catch (err) {
    console.error('Erro ao processar webhook:', err)
    res.status(500).send('Erro interno')
  }
})

// Endpoint para consultar mesas
app.get('/tables', async (req, res) => {
  try {
    const tables = await Table.find()
    res.json(tables)
  } catch (err) {
    console.error('Erro ao consultar mesas:', err)
    res.status(500).send('Erro interno')
  }
})

// Endpoint para consultar pedidos (para debug)
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (err) {
    console.error('Erro ao consultar pedidos:', err)
    res.status(500).send('Erro interno')
  }
})
