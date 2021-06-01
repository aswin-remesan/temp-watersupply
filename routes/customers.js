const express = require('express'),
  router = express.Router();




  const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'watersupply',
    multipleStatements: true
  })
  db.connect((err) => {
    if(err){
      console.log('Error connecting to Db for customers');
      return;
    }
    console.log('Connection established for customers');
  });




// get customer list
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM customers`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      data
    })
  })
});

// create new customer
// router.post('/new', function(req, res) {
//   let values = [
//     req.body.name,
//     req.body.m_no,
//     req.body.building_name,
//     req.body.flat_no,
//     req.body.area,
//     req.body.coupons
//   ];
//   let sql = "INSERT INTO customers (name, m_no, building_name, flat_no, area, coupons) VALUES ('"+req.body.name+"', '"+req.body.m_no+"', '"+req.body.building_name+"', '"+req.body.flat_no+"', '"+req.body.area+"', '"+req.body.coupons"')";
//       db.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("New customer added successfully");
//       });
// });


module.exports = router;