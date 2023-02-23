const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // create a new department
    addDepartment(dept) {
        return this.connection.promise().query("INSERT INTO department SET ?", dept)
    }

    // create a new role - NEEDS UPDATE
    addRole(title, salary, department_id) {
        return this.connection.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [title, salary, department_id])
    }

    // view department
    viewDepartment() {
        return this.connection.promise().query(`SELECT * FROM department`)
    }

    // view department
    viewAllRoles() {
        return this.connection.promise().query(`SELECT * FROM role`)
    }

    // delete department 
    deleteDepartment(del_dep) {
        return this.connection.promise().query("DELETE FROM department WHERE id = ?", del_dep)
    }

    // view employees
    viewAllEmployees() {
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee left join role on role.id = employee.role_id left join department on department.id = role.department_id;")
    }

    // add a employee - WORKING
    addEmployee(first_name, last_name, role_id, manager_id) {
    return this.connection.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [first_name, last_name, role_id, manager_id])
    }




    

    // delete employees - NOT WORKING
    deleteEmployees(del_dep) {
        return this.connection.promise().query("DELETE FROM department WHERE id = ?", del_dep)
    }

    // delete role - NOT WORKING
    deleteRole(id) {
        return this.connection.promise().query("DELETE FROM role WHERE id = ?", id)
    }


   



}

module.exports = new DB(connection);
