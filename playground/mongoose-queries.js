const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5be9ce75f8cb0f13a9689010';

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos ', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo ', todo);
// });

if (ObjectID.isValid(id)) {
  Todo.findById(id)
    .then(res => {
      if (!res) {
        return console.log('Id not found');
      }
      console.log('Res ', res);
    })
    .catch(e => {
      //console.log(e);
    });
} else {
  console.log('Id not valid.');
}
