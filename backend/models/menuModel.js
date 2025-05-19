const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
  name: {type: String, required: true},
  course: {
    type: {
      name: {
        type: String,
        enum: ['Appetizer', 'Entree', 'Dessert'],
        required: true,
        default: 'Appetizer',
      },
      courseNumber: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  },
})

module.exports = mongoose.model('Menu', MenuSchema)
