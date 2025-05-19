// Express Settings
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const {initializeTables, initializeMenus} = require('./db/init')

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

// Websocket
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

// Middleware
app.use(express.json())
app.use(cors()) // Enable CORS for all routes

// MongoDB Connection
const connectDB = require('./db/connect')

// Database Models
const Table = require('./models/tableModel')

//router
const tablesRouter = require('./routes/tablesRouter')(io)

//Declaring routes
app.use('/api/tables', tablesRouter)
app.get('/', (req, res) => {
  res.send('Welcome to the server!')
})

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
