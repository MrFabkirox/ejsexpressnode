const express = require('express');
const path = require('path');
const app = express();

// // 0
// app.get('/', (req,res)=> {
//   res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// 1
app.use('/public', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');

// // 1 1
// app.get('/:userQuery', (req,res) => {
//   res.render('index', {data : { userQuery: req.params.userQuery,
//     searchResults : ['book1','book2','book3'] } })
// });

// 1 2
app.get('/:userQuery', (req,res) => {
  res.render('index', {data : { userQuery: req.params.userQuery,
    searchResults : ['item1','item2','item3'],
    loggedIn : true,
    username: 'toto'
  }});
});

// app.listen(app.get('port'), () => {
//   console.log('Express at ' + app.get('port'));
// });

module.exports = app;
