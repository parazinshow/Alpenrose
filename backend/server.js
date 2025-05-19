// Express Settings
const express = require('express')
const http = require('http') // Importe o módulo http
const {Server} = require('socket.io')
const cors = require('cors')
const app = express()

// Crie o servidor HTTP
const server = http.createServer(app)

// Inicialize o Socket.IO
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log('Novo cliente conectado:', socket.id)
  Table.find({})
    .then((tables) => {
      socket.emit('initialState', tables) // Envia estado inicial
    })
    .catch((err) => {
      console.error('Erro ao enviar estado inicial:', err)
    })
  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id)
  })
})

app.use(express.json())
app.use(cors()) // Aplica o middleware CORS para o Express

// MongoDB Connection
const connectDB = require('./db/connect')

// Database Models
const Table = require('./models/tableModel')
const Menu = require('./models/menuModel')

//router
const tablesRouter = require('./routes/tablesRouter')(io)

//Declaring routes
app.use('/api/tables', tablesRouter)

// Add a root route
app.get('/', (req, res) => {
  res.send('Welcome to the server!')
})

// Initialize Tables and Menus
async function initializeTables() {
  try {
    const tables = [
      ...Array.from({length: 10}, (_, i) => ({
        tableNumber: `${20 + i}`,
        section: 'Front Patio',
      })),
      ...[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 150].map((num) => ({
        tableNumber: `${num}`,
        section: 'Dining Room',
      })),
      ...Array.from({length: 11}, (_, i) => ({
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
async function initializeMenus() {
  try {
    const menus = [
      {name: 'Cheese Fondue', course: {name: 'appetizer', courseNumber: 1}},
      {name: 'Caesar Salad', course: {name: 'appetizer', courseNumber: 1}},
      {name: 'Pretzel', course: {name: 'appetizer', courseNumber: 1}},
      {name: 'Schnitzel', course: {name: 'entree', courseNumber: 2}},
      {name: 'Bratwurst', course: {name: 'entree', courseNumber: 2}},
      {name: 'Oktoberfest Haxn', course: {name: 'entree', courseNumber: 2}},
      {name: 'Apfelstrudel', course: {name: 'dessert', courseNumber: 3}},
      {name: 'Gelato', course: {name: 'dessert', courseNumber: 3}},
    ]
    await Menu.deleteMany({})
    await Menu.insertMany(menus)
    console.log('Menu initialized successfully')
  } catch (err) {
    console.error('Fail to initialize menu:', err)
  }
}

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL || 'mongodb://localhost/restaurant')
    server.listen(port, console.log(`Server is listening on port ${port}`))
    await initializeTables()
    await initializeMenus()
  } catch (error) {
    console.log(error)
  }
}

start()
