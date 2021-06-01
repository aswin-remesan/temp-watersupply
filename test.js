const mysql = require('mysql2');

// // First you need to create a connection to the database
// // Be sure to replace 'user' and 'password' with the correct values
// const con = mysql.createConnection({
//   host: '45.13.252.154',
//   user: 'u247683727_watersupply',
//   password: 'wATERsUPPLY7rOUGHPAPER',
// });

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });





const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "watersupply"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "INSERT INTO customers (name, m_no, building_name, flat_no, area, coupons) VALUES ('Nawaz', '8527419632', 'Badariya', '12B', 'Rawdah', '55754' )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
