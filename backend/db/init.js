const fs = require('fs').promises
const path = require('path')

// Database Models
const Table = require('../models/tableModel')
const Menu = require('../models/menuModel')

// Initialize Tables and Menus
async function initializeTables() {
  try {
    const tables = [
      ...Array.from({length: 12}, (_, i) => ({
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
    const menusPath = path.join(__dirname, 'menus.json')
    const menusData = await fs.readFile(menusPath, 'utf8')
    const menus = JSON.parse(menusData)
    await Menu.deleteMany({})
    await Menu.insertMany(menus)
    console.log('Menu initialized successfully')
  } catch (err) {
    console.error('Fail to initialize menu:', err)
  }
}

module.exports = {
  initializeTables,
  initializeMenus,
}
