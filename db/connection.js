const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'lovelove',
      database: 'employee_tracker_db'
});

connection.connect(function (err) {
    if (err) console.log (err);
});

module.exports = connection;
