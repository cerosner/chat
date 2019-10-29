const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

const dbName = 'chat'
let db

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err)

  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

module.exports = db
