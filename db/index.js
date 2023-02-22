const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // create a new department
    addDepartment(dept) {
        return this.connection.promise().query("INSERT INTO department SET ?", dept)
    }

    // create a new role
    addRole(title, salary, department_id) {
        return this.connection.promise().query("INSERT INTO role (title, salary, department_id) SET ?", title, salary, department_id)
    }

    // view department
    viewDepartment() {
        return this.connection.promise().query(`SELECT * FROM department`)
    }

    // view department
    viewRole() {
        return this.connection.promise().query(`SELECT * FROM role`)
    }



    // delete department - NOT WORKING
    deleteDepartment(del_dep) {
        return this.connection.promise().query("DELETE FROM department WHERE id = ?", del_dep)
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