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

const updateStatusTable = async (req, res, io) => {
  try {
    const payload = req.body
    const {eventType, details} = payload

    // Basic payload validation
    if (!eventType || !details) {
      return res.status(200).send('Invalid payload')
    }

    // Send 2xx response immediately
    res.status(200).send('Webhook received')

    // Process logic asynchronously
    setImmediate(async () => {
      try {
        const tableNumber = details.order.table

        // Check if the table is valid
        if (!(await Table.findOne({tableNumber}))) {
          console.log('Table not found or is a takeout')
          return
        }

        const checks = details.order.checks || []

        if (checks) {
          // Check if there are any open checks
          // Filter checks to only include those with paymentStatus 'OPEN'
          const openChecks = checks.filter(
            (check) => check.paymentStatus === 'OPEN'
          )

          // If there are no open checks, check if they are all paid / closed
          if (!openChecks || openChecks.length === 0) {
            if (details.order.paidDate) {
              await setTableStatus(tableNumber, 'Empty', io)
              console.log(
                `All checks closed on table ${tableNumber}. Updated to empty`
              )
              return
            }
            console.log('No open checks found')
            return
          }

          // Flatten the array of selections of all open checks
          let openCheckItems = openChecks.flatMap((check) => check.selections)

          // Filter only items sent to kitchen
          openCheckItems = openCheckItems.filter(
            (item) => item.fulfillmentStatus === 'SENT'
          )

          // If there are no items sent to kitchen, set table status to 'Seated'
          if (!openCheckItems || openCheckItems.length === 0) {
            await setTableStatus(tableNumber, 'Seated', io)
            console.log('No fired items found')
            return
          }

          // Filter menu items to only include those that match the open check items
          const menuItems = await Menu.find({})
          const filteredItems = menuItems.filter((menuItem) =>
            openCheckItems.some(
              (openItem) =>
                openItem.itemName.toLowerCase() === menuItem.name.toLowerCase()
            )
          )

          // If there are no items in the menu that match the open check items, set table status to 'Seated'
          let highestCourse = {courseNumber: 0, name: 'Seated'}

          // Find the highest course number from the filtered items
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
          //Set table status
          await setTableStatus(tableNumber, highestCourse.name, io)
        }
      } catch (err) {
        console.error('Fail to process webhook:', err)
      }
    })
  } catch (err) {
    console.error('Fail to process webhook:', err)
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

  const tables = await Table.find({})
  io.emit('tableUpdate', tables)
}

module.exports = {
  getAllTables,
  updateStatusTable,
}
