const express = require('express')
const mongoose = require('mongoose')
const { Server } = require('socket.io')
const app = express()

// Configurar Express
app.use(express.json())

// Conectar ao MongoDB
const connectDB = (url) =>
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Fail to connect to MongoDB:', err))

// Definir esquemas
const tableSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true, unique: true },
  section: { type: String, required: true },
  status: {
    type: String,
    enum: ['empty', 'seated', 'appetizer', 'entree', 'dessert'],
    default: 'empty',
  },
  lastUpdated: { type: Date, default: Date.now },
})

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // course: {
  //   type: String,
  //   required: true,
  //   enum: ['appetizer', 'entree', 'dessert'],
  //   default: 'appetizer',
  // },
  course: {
    type: {
      name: {
        type: String,
        enum: ['appetizer', 'entree', 'dessert'],
        required: true,
        default: 'appetizer',
      },
      courseNumber: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  },
})

const Table = mongoose.model('Table', tableSchema)
const Menu = mongoose.model('Menu', menuSchema)

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
    console.log('Tables initialized successfully')
  } catch (err) {
    console.error('Fail to initialize tables:', err)
  }
}

// Inicializar menu
async function initializeMenus() {
  try {
    const menus = [
      { name: 'Cheese Fondue', course: { name: 'appetizer', courseNumber: 1 } },
      { name: 'Caesar Salad', course: { name: 'appetizer', courseNumber: 1 } },
      { name: 'Pretzel', course: { name: 'appetizer', courseNumber: 1 } },
      { name: 'Schnitzel', course: { name: 'entree', courseNumber: 2 } },
      { name: 'Bratwurst', course: { name: 'entree', courseNumber: 2 } },
      { name: 'Oktoberfest Haxn', course: { name: 'entree', courseNumber: 2 } },
      { name: 'Apfelstrudel', course: { name: 'dessert', courseNumber: 3 } },
      { name: 'Gelato', course: { name: 'dessert', courseNumber: 3 } },
    ]
    await Menu.deleteMany({})
    await Menu.insertMany(menus)
    console.log('Menu initialized successfully')
  } catch (err) {
    console.error('Fail to initialize menu:', err)
  }
}

// Endpoint de webhook
app.post('/update', async (req, res) => {
  try {
    const payload = req.body
    const { eventType, details } = payload

    if (!eventType || !details) {
      return res.status(400).send('Invalid payload')
    }

    const tableNumber = details.order.table //verificar se existe
    const checks = details.order.checks || []

    if (checks) {
      const openChecks = checks.filter(
        (check) => check.paymentStatus === 'OPEN'
      )
      if (!openChecks || openChecks.length === 0) {
        return res.status(400).send('No open checks found')
      }
      const openItems = openChecks.flatMap((check) => check.selections)
      if (!openItems || openItems.length === 0) {
        return res.status(400).send('No items found')
      }
      const menuItems = await Menu.find({})
      const filteredItems = menuItems.filter((menuItem) =>
        openItems.some(
          (openItem) =>
            openItem.itemName.toLowerCase() === menuItem.name.toLowerCase()
        )
      )
      let highestCourse = { courseNumber: 0, name: 'seated' }
      if (filteredItems.length) {
        highestCourse = filteredItems.reduce((max, item) => {
          if (!max || item.course.courseNumber > max.courseNumber) {
            return {
              courseNumber: item.course.courseNumber,
              name: item.course.name,
            }
          }
          return max
        }, null)
      }

      const table = await Table.findOneAndUpdate(
        { tableNumber },
        {
          status: highestCourse.name,
          lastUpdated: Date.now(),
        },
        { new: true }
      )
      if (!table) {
        return res.status(404).send('Table not found')
      }
      console.log(`Table ${tableNumber} updated to ${highestCourse.name}`)
    }

    res.status(200).send('Webhook processed successfully')
  } catch (err) {
    console.error('Fail to proccess webhook:', err)
    res.status(500).send('Internal server error')
  }
})

// Endpoint para consultar mesas
app.get('/tables', async (req, res) => {
  try {
    const tables = await Table.find()
    res.json(tables)
  } catch (err) {
    console.error('Fail to consult tables:', err)
    res.status(500).send('Internal server error')
  }
})

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL || 'mongodb://localhost/restaurant')
    app.listen(port, console.log(`Server is listening on port ${port}`))
    initializeTables()
    initializeMenus()
  } catch (error) {
    console.log(error)
  }
}

start()
