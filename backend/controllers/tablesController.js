const Table = require('../models/tableModel')
const Menu = require('../models/menuModel')

const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find()
    res.status(200).json(tables)
  } catch (error) {
    res.status(500).json({message: 'Error fetching tables', error})
  }
}
// Endpoint de webhook
const updateStatusTable = async (req, res, io) => {
  try {
    const payload = req.body
    const {eventType, details} = payload

    if (!eventType || !details) {
      return res.status(400).send('Invalid payload')
    }

    const tableNumber = details.order.table //verificar se existe

    // Check is table is valid. if is not could be a take out
    if (
      Object.keys(await Table.find({tableNumber: tableNumber})).length === 0
    ) {
      return res.status(404).send('Table not found or is a takeout')
    }

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

      let highestCourse = {courseNumber: 0, name: 'Seated'}
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
        {tableNumber},
        {
          status: highestCourse.name,
          lastUpdated: Date.now(),
        },
        {new: true}
      )
      console.log(`Table ${tableNumber} updated to ${highestCourse.name}`)

      // Emitir evento para todos os clientes conectados
      const tables = await Table.find({}) // Busca todas as mesas
      io.emit('tableUpdate', tables)
    }

    res.status(200).send('Webhook processed successfully')
  } catch (err) {
    console.error('Fail to proccess webhook:', err)
    res.status(500).send('Internal server error')
  }
}

module.exports = {
  getAllTables,
  updateStatusTable,
}
