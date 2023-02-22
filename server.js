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
          viewRole()
          break;
        // case "View Employees By Department":
        //   viewEmployeesDepartment()
        //   break;
        // case "View Employees By Managers":
        //   viewEmployeesManager()
        //   break;
        case "View All Employees":
          viewEmployees()
          break;
        // case "Add Employee":
        //   addEmployee()
        //   break;
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
        // case "DONE":
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

// working
function addRole() {
  prompt([{
    type: 'input',
    name: 'title',
    message: 'What is the title of the new role?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the new role?'
  },
  {
    type: 'input',
    name: 'department',
    message: 'What is the department of the new role?'
  }])
  .then(response => {
    console.log(response)
    let titleName = response.title;
    let salaryName = response.salary;
    let departmentName = response.department;
    db.addRole(titleName, salaryName, departmentName)
    .then(() => console.log(`added ${titleName.name} ${salaryName} to db`))
    .then(() => startInitial())
  })
}

// working
function viewDepartment() {
  console.log("view all departments")
  db.viewDepartment().then(([rows])=> {
    console.table(rows)})
}


// working
function viewRole() {
  console.log("view all roles")
  db.viewRole().then(([rows])=> {
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






// not working
function viewEmployees() {
  db.viewEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees)
    })
    .then(() => startInitial())
}

       



// TO DO:
        // case "View Employees By Department":
        //   viewEmployeesDepartment()
        //   break;
        // case "View Employees By Managers":
        //   viewEmployeesManager()
        //   break;
        // case "Add Employee":
        //   addEmployee()
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