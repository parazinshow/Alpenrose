const express = require('express')
const router = express.Router()

const { getAllTables,updateStatusTable } = require('../controllers/tablesController')

router.route('/').get(getAllTables)
router.route('/update').post(updateStatusTable)

module.exports = router
