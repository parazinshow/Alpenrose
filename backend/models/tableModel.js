const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true, unique: true },
  section: { type: String, required: true },
  status: {
    type: String,
    enum: ['empty', 'seated', 'appetizer', 'entree', 'dessert'],
    default: 'empty',
  },
  lastUpdated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Table', TableSchema)
