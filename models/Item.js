const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ItemSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });
// 
// module.exports = Item = mongoose.model('item', ItemSchema);

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', ItemSchema);
