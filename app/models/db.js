const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  multipleStatements: true
});

var sqlCommand = `

CREATE TABLE users (
  id int(11) NOT NULL auto_increment,
  name varchar(100) NOT NULL,
  age int(3) NOT NULL,
  email varchar(100) NOT NULL,
  PRIMARY KEY (id)
);
`

var sqlCommand2 = ` 
CREATE TABLE weights (
  peso int(3) NOT NULL,
  id INT,
  INDEX id(id),
  FOREIGN KEY (id)
    REFERENCES users(id)
    ON DELETE CASCADE
)ENGINE=INNODB;
`

// open the MySQL connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected yet no db is selected yet!");
  connection.query(sqlCommand, function (err, result) {
    if (err) { console.log("Table 'users' already exists")};
    console.log("Table Users Connected");
  });
  connection.query(sqlCommand2, function (err, result) {
    if (err) { console.log("Table 'weight' already exists ")};
    console.log("Table weight Connected");
  });
});

module.exports = connection;
