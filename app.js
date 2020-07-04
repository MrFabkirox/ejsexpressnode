const express = require('express');
const path = require('path');
const app = express();

// 1
app.use('/public', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');

// 1 2
app.get('/:userQuery', (req,res) => {
  res.render('index', {data : { userQuery: req.params.userQuery,
    searchResults : ['item1','item2','item3'],
    loggedIn : true,
    username: 'toto'
  }});
});

module.exports = app;
