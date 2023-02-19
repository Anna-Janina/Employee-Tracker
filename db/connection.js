const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection({
      host: '0.0.0.0',
      user: 'root',
      password: '',
      database: 'employee_tracker_db'
});

connection.connect(function (err) {
    if (err) console.log (err);
});

module.exports = connection;
