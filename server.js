// Import npm packages
const inquirer = require('inquirer');
const mysql = require('mysql2');




// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: '',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
  );


  function initial() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'initialize',
                message: 'Select from the following options:',
                choices: [  'View All Departments',
                            'Add Department',
                            'Delete Department',
                            'View ALL Roles',
                            'Add Role', 
                            'Update Employee Role',
                            'Delete Role', 
                            'View All Employees', 
                            'View Employees By Department',
                            'View Employees By Managers',
                            'Add Employee', 
                            'Update Employee Managers', 
                            'Delete Employees', 
                            'DONE',
                            ]
            }
            ])
        // .then((answers))
  }