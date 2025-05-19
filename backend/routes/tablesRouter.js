const express = require('express')
const router = express.Router()

const { getAllTables,updateStatusTable } = require('../controllers/tablesController')

module.exports = function (io) {
  router.route('/').get(getAllTables);
  router.route('/update').post((req, res) => updateStatusTable(req, res, io)); // Passe o io para updateStatusTable
  return router;
};