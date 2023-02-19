const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // create a new department
    createDept(dept) {
        return this.connection.promise().query("INSERT INTO department SET ?", dept)
    }

    // view department
    viewDept(dept) {
        return this.connection.promise().query(`SELECT * FROM department ORDER BY department_id`)
    }




    // findAll employees

    //remove an employee
}

module.exports = new DB(connection);








// Hardcoded query: DELETE FROM course_names WHERE id = 3;

// db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });