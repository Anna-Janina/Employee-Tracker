// Import npm packages
const { prompt } = require('inquirer');
const db = require("./db")
// require("console.table")

startInitial()

function startInitial() {
        prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'Select from the following options:',
                // choices: [  'View All Departments',
                //             'Add Department',
                //             'Delete Department',
                //             'View ALL Roles',
                //             'Add Role', 
                //             'Update Employee Role',
                //             'Delete Role', 
                //             'View All Employees', 
                //             'View Employees By Department',
                //             'View Employees By Managers',
                //             'Add Employee', 
                //             'Update Employee Managers', 
                //             'Delete Employees', 
                //             'DONE',
                //             ],
                choices: [
                  {
                    name: 'create dept',
                    value: 'CREATE_DEPT'
                  },
                ],
            })
      .then((answers) => {
      //   switch (answers.userOption) {
      //     case 'View All Departments':
      //         viewDepartments(connection, startInitial);
      //         break;
      //     case 'Add Department':
      //         createDepartment(connection, startInitial);
      //       break;
      //     case 'Delete Department':
      //         deleteDepartments(connection, startInitial);
      //         break;
      //     case 'View ALL Roles':
      //         viewRole(connection, startInitial);
      //         break;
      //     case 'Add Role':
      //         addRole(connection, startInitial);
      //         break;
      //     case 'Update Employee Role':
      //         updateRole(connection, startInitial);
      //         break;
      //     case 'Delete Role':
      //         deleteRole(connection, startInitial);
      //         break;
      //     case 'View All Employees':
      //         viewEmployees(connection, startInitial);
      //         break;
      //     case 'View Employees By Department':
      //         viewEmployeeDepartment(connection, startInitial);
      //         break;
      //     case 'View Employees By Managers':
      //         viewEmployeeManager(connection, startInitial);
      //         break;
      //     case 'Add Employee':
      //         addEmployee(connection, startInitial);
      //         break;
      //     case 'Update Employee Managers':
      //         updateEmployeeManager(connection, startInitial);
      //         break;
      //     case 'Delete Employees':
      //         deleteRole(connection, startInitial);
      //         break;
      //     case 'DONE':
      //         connection.end();
      //         break;
      //     default:
      //         break;
      // }
      let choice = answers.choice;
      console.log(choice);
      switch(choice) {
        case "CREATE_DEPT":
          createDept()
          break;
        // case view all depts etc etc
        default:
          end()
      }
  });
}

function createDept() {
  prompt({
    name: 'name',
    message: 'what is the dept name?'
  })
  .then(response => {
    let deptName = response;
    db.createDept(deptName)
    .then(() => console.log(`added ${deptName.name} to db`))
    .then(() => startInitial())
  })
}

// Get employees first name
// name: 'first_name',
// type: 'input'

function end() {
  process.exit();
}