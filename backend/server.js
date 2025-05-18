// Express Settings
const { Server } = require('socket.io')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())

// MongoDB Connection
const connectDB = require('./db/connect')

// Database Models
const Table = require('./models/tableModel')
const Menu = require('./models/menuModel')

//router
const tablesRouter = require('./routes/tablesRouter')

// Initialize Tables and Menus
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
//Declaring routes
app.use('/api/tables', tablesRouter)

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
