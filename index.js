const express = require('express'),
  cors = require('cors'),
  path = require('path') // add path module,
  mysql = require('mysql2');
const config = require('./dbConfig');
const app = express();



// // routers
// const usersRouter = require('./routes/customers');
// use the modules
app.use(cors())
app.use(express.json())


//Welcome Page
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname) + '/welcome.html');
});



// starting the server
app.listen( 3000 , () => console.log(`Server started, listening on port: 3000`));






//Database Connection
const db = mysql.createConnection(config)
db.connect((err) => {
  if(err){
    console.log('Error connecting to Db for customers');
    return;
  }
  console.log('Connection established for customers');
});







// get customer list
app.get('/customers', function(req, res) {
  let sql = `SELECT * FROM customers`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({data})
  })
});





// create new customer
app.post('/customers', function(req, res) {
  let values = [
    req.body.name,
    req.body.m_no,
    req.body.building_name,
    req.body.flat_no,
    req.body.area,
    req.body.coupons
  ];

  let sql = `INSERT INTO customers (name, m_no, building_name, flat_no, area, coupons) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, values, function (err, result) {
    if (err) console.log(err)
    console.log(result)
    console.log("New customer added successfully");
    res.send("New customer added successfully");
  });
});



//update customer
app.put('/customers', function (req, res) {
  let values = [
    req.body.name,
    req.body.building_name,
    req.body.flat_no,
    req.body.area,
    req.body.coupons,
    req.body.m_no
  ];
  console.log(values)
  db.query("UPDATE customers SET `name`=?, `building_name`=?, `flat_no`=?, `area`=?, `coupons`=? WHERE m_no=?", values, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    console.log("Customer details updated successfully");
    res.send("Customer details updated successfully");
  })
})




//delete customer
app.delete("/customers", function(req, res) {
  db.query("DELETE FROM customers WHERE m_no=?", req.body.m_no, function(err, result) {
    if (err) console.log(err);
    console.log(result);
    res.send("Record has been deleted successfully");
  })
})
