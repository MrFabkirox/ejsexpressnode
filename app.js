const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
//    dbname: 'tigernodesandreact',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB atlas connected");
})

app.use(express.urlencoded({ extended: false }))

// 1
app.use('/public', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');

app.use(methodOverride('_method'))
const Item = require('./models/Item');

app.get('/items', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items } ))
    .catch(err => res.status(404).json({ msg: 'err' } ))
});

app.post('/item', async (req, res) => {
  let item = new Item({
    name: req.body.name,
  });
  try {
    item = await item
      .save()
      .then(result => {
        console.log('item saved [%o]', item);
        res.json({
          item: "some"
        });
      });
  } catch (err) {
    console.log('_______item [%o]', item);
    console.log('_______error [%o]', err);
  }
});

app.delete('/', async (req, res) => {
  const id = req.params.id;
  Item.remove({ _id: _id })
    .exec()
    .then(result => {
       res.status(200).json(result);
    })
    .catch(err => {
      console.log('_______error [%o]', err);
    });
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
