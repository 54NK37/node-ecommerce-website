// //Mongodb connection

// const mongodb = require('./db/mongodb')
// const dbName = 'ecommerce'

// mongodb.connection(dbName, (error, _db) => {
//     if (error) {
//         return console.log(error)
//     }
//     db = _db
//     app.listen(3000, () => {
//         console.log('Server is running on port 3000')
//     })
// })

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'

const connection = (dbName, callback) => {

    MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            callback('Connection to the database failed', undefined)
        }
        console.log("Connected successfully!")

        const db = client.db(dbName)
        callback(undefined, db)
    })
}


module.exports = {
    connection
}