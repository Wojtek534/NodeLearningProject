// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');
var obj = new ObjectId();

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb server at port 27017');
    const db = client.db('TodoApp');
    // Delete All
    // db.collection('Todos')
    //   .deleteMany({ data: '123' })
    //   .then(
    //     result => {
    //       console.log(result);
    //     },
    //     err => {
    // console.log('Unable to delete.');
    //     }
    //   );
    // Delete One
    // db.collection('Todos')
    //   .deleteMany({ data: '123' })
    //   .then(
    //     result => {
    //       console.log(result);
    //     },
    //     err => {
    // console.log('Unable to delete.');
    //     }
    //   );
    //Find one and Delete
    db.collection('Todos')
      .findOneAndDelete({ _id: new ObjectId('5b58e1dc1449089ad3400651') })
      .then(
        result => {
          console.log(result);
        },
        err => {
          console.log('Unable to delete.');
        }
      );
    client.close();
  }
);
