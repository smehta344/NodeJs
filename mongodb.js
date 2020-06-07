/* 
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest2');

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
 */
/* 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "nodejs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
 */