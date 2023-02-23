// Import npm packages
const { prompt } = require('inquirer');
const db = require("./db")
require("console.table")

startInitial()

function startInitial() {
        prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'Select from the following options:',
                choices: [ 'View All Departments',
                            'Add Department',
                            'Delete Department',
                            'View All Roles',
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
                  {
                    name: 'create dept',
                    value: 'CREATE_DEPT'
                  },
                ],
            })
      .then((answers) => {
    
      let choice = answers.choice;
      console.log(choice);
      switch(choice) {
        case "Add Department":
          addDepartment()
          break;
        case "View All Departments":
          viewDepartment()
          break;
        case "Delete Department":
          deleteDepartment()
          break;
        case "Add Role":
          addRole()
          break;
        case "View All Roles":
          viewAllRoles()
          break;
        // case "View Employees By Department":
        //   viewEmployeesDepartment()
        //   break;
        // case "View Employees By Managers":
        //   viewEmployeesManager()
        //   break;
        case "View All Employees":
          viewAllEmployees()
          break;
        case "Add Employee":
          addEmployee()
          break;
        // case "Update Employee Role":
        //   updateEmployeeRole()
        //   break;
        // case "Update Employee Managers":
        //   updateEmployeeManagers()
        //   break;
        case "Delete Role":
          deleteRole()
          break;
        // case "Delete Employees":
        //   deleteEmployees()
        //   break;

        default:
          end()
      }
  });
}

// working
function addDepartment() {
  prompt({
    type: 'input',
    name: 'name',
    message: 'What is the department name?'
  })
  .then(response => {
    let deptName = response;
    db.addDepartment(deptName)
    .then(() => console.log(`added ${deptName.name} to db`))
    .then(() => startInitial())
  })
}

// NOT working - NEEDS WORK
function addRole() {
  db.viewDepartment().then(([rows]) => {
      let departments = rows;
      const choices = departments.map(({ id, name }) => ({
          name: name,
          value: id,
      }));

      prompt([
          {
              type: 'input',
              name: 'title',
              message: 'What is the title of the new role?',
          },
          {
              type: 'input',
              name: 'salary',
              message: 'What is the salary of the new role?',
          },
          {
              type: 'list',
              name: 'department_id',
              message: 'What is the department of the new role?',
              choices: choices,
          },
      ]).then((response) => {
          console.log(response);
          let titleName = response.title;
          let salaryName = response.salary;
          let departmentName = response.department_id;
          db.addRole(titleName, salaryName, departmentName)
              .then(() => console.log(`added ${titleName.name} ${salaryName} to db`))
              .then(() => startInitial());
      });
  });
}


// working
function viewDepartment() {
  console.log("view all departments")
  db.viewDepartment().then(([rows])=> {
    console.table(rows)})
}


// working
function viewAllRoles() {
  console.log("view all roles")
  db.viewAllRoles().then(([rows])=> {
    console.table(rows)})
}

// working
function deleteDepartment() {
  db.viewDepartment()
    .then(([rows]) => {
      let departments = rows;
      const choices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }))
        prompt({
      type: 'list',
      name: 'id',
      choices: choices,
      message: 'Which department would you like to delete?'
      })
      .then(response => {
        let deptName = response;
        db.deleteDepartment(deptName)
        .then(() => console.log(`deleted ${deptName.name} to db`))
        .then(() => startInitial())
      })
    })
}

// working
function deleteRole() {
  db.viewRole()
    .then(([rows]) => {
      let roles = rows;
      const choices = roles.map(({ id, title }) => ({
        name: title, 
        value: id
      }));
      prompt({
        type: 'list',
        name: 'id',
        choices: choices,
        message: 'Which department would you like to delete?'
      })
      .then(response => {
        db.deleteRole(response.id)
        .then(() => console.log(`deleted ${response.id} to db`))
        .then(() => startInitial())
      })
    })
}

// working
function viewAllEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees)
    })
    .then(() => startInitial())
}

// working
function addEmployee() {
  prompt([{
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the employee?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the employee?'
  },
  {
    type: 'list',
    name: 'role_id',
    message: 'What is the employee role id?',
    choices: ['10', '11', '12', '13', '14']
  },
  {
    type: 'list',
    name: 'manager_id',
    message: 'What is the employees manager id?',
    choices: ['1', '3', '5', '7']
  }])
  .then(response => {
    console.log(response)
    let first_nameName = response.first_name;
    let last_nameName = response.last_name;
    let role_idName = response.role_id;
    let manager_idName = response.manager_id;
    db.addEmployee(first_nameName, last_nameName, role_idName, manager_idName)
    .then(() => console.log(`added ${first_nameName.name} ${last_nameName} ${role_idName.name} ${manager_idName.name}to db`))
    .then(() => startInitial())
  })
}     






// TO DO:
        // case "View Employees By Department":
        //   viewEmployeesDepartment()
        //   break;
        // case "View Employees By Managers":
        //   viewEmployeesManager()
        //   break;
        // case "Update Employee Role":
        //   updateEmployeeRole()
        //   break;
        // case "Update Employee Managers":
        //   updateEmployeeManagers()
        //   break;
        
        // case "DONE":
       








// function deleteEmployees() {
//   prompt({
//     type: 'list',
//     name: 'id',
//     choices: del_dep,
//     message: 'Which department would you like to delete?'
//   })
//   .then(response => {
//     let deptName = response;
//     db.addDepartment(deptName)
//     .then(() => console.log(`deleted ${deptName.name} to db`))
//     .then(() => startInitial())
//   })
// }






 
  
               












function end() {
  process.exit();
}