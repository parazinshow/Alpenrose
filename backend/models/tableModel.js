const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
  tableNumber: {type: String, required: true, unique: true},
  section: {type: String, required: true},
  status: {
    type: String,
    enum: ['Empty', 'Seated', 'Appetizer', 'Entree', 'Dessert'],
    default: 'Empty',
  },
  lastUpdated: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Table', TableSchema)
