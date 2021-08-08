const { connect, Schema, model } = require('mongoose')

connect('mongodb://localhost/docs-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})

const docScheme = new Schema({
  _id: String,
  data: Object
})

module.exports = model('doc', docScheme)
