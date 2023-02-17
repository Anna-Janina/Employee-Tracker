const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // create a new dept
    createDept(dept) {
        return this.connection.promise().query("INSERT INTO department SET ?", dept)
    }

    // findAll employees

    //remove an employee
}

module.exports = new DB(connection);