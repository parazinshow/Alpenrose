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

    const tableNumber = details.order.table //Get table number from payload

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
        if (details.order.paidDate) {
          await setTableStatus(tableNumber, 'Empty', io)
          return res
            .status(200)
            .send(`All checks closed on table ${tableNumber}. Updated to empty`)
        }
        return res.status(200).send('No open checks found')
      }

      let openCheckItems = openChecks.flatMap((check) => check.selections) // Flatten the array of selections of all open checks

      openCheckItems = openCheckItems.filter(
        (item) => item.fulfillmentStatus === 'SENT'
      ) // Filter only items sent to kitchen

      if (!openCheckItems || openCheckItems.length === 0) {
        await setTableStatus(tableNumber, 'Seated', io)
        return res.status(200).send('No fired items found')
      }
      const menuItems = await Menu.find({})
      const filteredItems = menuItems.filter((menuItem) =>
        openCheckItems.some(
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
      await setTableStatus(tableNumber, highestCourse.name, io)
    }

    res.status(200).send('Webhook processed successfully')
  } catch (err) {
    console.error('Fail to proccess webhook:', err)
    res.status(500).send('Internal server error')
  }
}

async function setTableStatus(tableNumber, status, io) {
  await Table.findOneAndUpdate(
    {tableNumber},
    {
      status: status,
      lastUpdated: Date.now(),
    },
    {new: true}
  )
  console.log(`Table ${tableNumber} updated to ${status}`)

  // Emitir evento para todos os clientes conectados
  const tables = await Table.find({}) // Busca todas as mesas
  io.emit('tableUpdate', tables)
}

module.exports = {
  getAllTables,
  updateStatusTable,
}
