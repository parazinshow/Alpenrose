const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose.set('strictQuery', false)
  return mongoose
    .connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Fail to connect to MongoDB:', err))
}

module.exports = connectDB
