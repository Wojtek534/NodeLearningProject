// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb server at port 27017');
    const db = client.db('TodoApp');
    // db.collection('Todos')
    //   .find({ _id: new ObjectId('5b2ac3c26f0c66156c66c06e') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos', JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos.');
    //     }
    //   );
    db.collection('Todos')
      .find()
      .count()
      .then(
        count => {
          console.log(`Todos Count ${count}`);
        },
        err => {
          console.log('Unable to fetch todos.');
        }
      );
    client.close();
  }
);
