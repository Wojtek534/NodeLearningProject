// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');
var obj = new ObjectId();
console.log(obj);
MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb server at port 27017');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something',
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert todo.');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );
    client.close();
  }
);
