const app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), () => {
  console.log('Express at [%o]', server.address());
});

//     <h3>You Searched For : [<%= data.userQuery %>]</h3>
// 
//     <% if(data.loggedIn) { %>
//       <h3>// 1 2  You are logged in as : <%= data.username %> </h3>
//     <% } %>
// 
//     <h3>// 1 2 // 1 1</h3>
// 
//     <ul>
//       <li>[<%= data.searchResults[0] %>]</li>
//       <li>dummy data</li>
//     </ul>
// 
//     <h3>// 1 2 // 1 1</h3>
// 
//     <ul>
//       <% data.searchResults.forEach(result=> { %>
//         <li>[<%= result %>]</li>
//       <% }); %>
//     </ul>
