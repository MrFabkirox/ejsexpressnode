const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    dbname: 'tigernodesandreact',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB atlas connected");
})

// 1
app.use('/public', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');

const Item = require('./models/Item');

app.get('/items', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items } ))
    .catch(err => res.status(404).json({ msg: 'err' } ))
});

// // 1 2
// app.get('/:userQuery', (req,res) => {
//   res.render('index', {data : { userQuery: req.params.userQuery,
//     searchResults : ['apple1','berries','kale3'],
//     loggedIn : true,
//     username: 'toto'
//   }});
// });

module.exports = app;
