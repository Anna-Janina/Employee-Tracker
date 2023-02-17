// Import npm packages
const inquirer = require('inquirer');
const mysql = require('mysql2');




// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
  );


  function startInitial() {
    inquirer
        .prompt(
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
                            ],
            })
      .then((answers) => {
        switch (answers.userOption) {
          case 'View All Departments':
              viewDepartments(connection, startInitial);
              break;
          case 'Add Department':
              createDepartment(connection, startInitial);
            break;
          case 'Delete Department':
              deleteDepartments(connection, startInitial);
              break;
          case 'View ALL Roles':
              viewRole(connection, startInitial);
              break;
          case 'Add Role':
              addRole(connection, startInitial);
              break;
          case 'Update Employee Role':
              updateRole(connection, startInitial);
              break;
          case 'Delete Role':
              deleteRole(connection, startInitial);
              break;
          case 'View All Employees':
              viewEmployees(connection, startInitial);
              break;
          case 'View Employees By Department':
              viewEmployeeDepartment(connection, startInitial);
              break;
          case 'View Employees By Managers':
              viewEmployeeManager(connection, startInitial);
              break;
          case 'Add Employee':
              addEmployee(connection, startInitial);
              break;
          case 'Update Employee Managers':
              updateEmployeeManager(connection, startInitial);
              break;
          case 'Delete Employees':
              deleteRole(connection, startInitial);
              break;
          case 'DONE':
              connection.end();
              break;
          default:
              break;
      }
  });
}

// Start app
connection.connect((err) => {
  if (err) throw err;
  startInitial();
});




// Get employees first name
name: 'first_name',
type: 'input'