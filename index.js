const express = require('express'),
  cors = require('cors'),
  path = require('path') // add path module,
  mysql = require('mysql2');

const app = express();


// setup database
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'watersupply'
  })
  db.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });


// routers
const usersRouter = require('./routes/customers');
// use the modules
app.use(cors())
app.use(express.json())
// use router
app.use('/customers', usersRouter);
// router user input
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname) + '/welcome.html');
});




// starting the server
app.listen( 3000 , () => console.log(`Server started, listening on port: 3000`));







