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
    db.collection('Todos')
      .findOneAndUpdate(
        { _id: new ObjectId('5b58df13772ad341d2e9cabc') },
        {
          $set: { text: 'Some new text' }
        },
        {
          returnOriginal: false
        }
      )
      .then(
        result => {
          console.log(result);
        },
        err => {
          console.log('Unable to update position.');
        }
      );
    client.close();
  }
);
