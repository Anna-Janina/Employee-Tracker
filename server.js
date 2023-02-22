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
        
        
 
                //             'Update Employee Role',
                //             'Delete Role', 
                //             'View All Employees', 
                //             
                //             'View Employees By Managers',
                //             'Add Employee', 
                //             'Update Employee Managers', 
                //             'Delete Employees', 
                //             'DONE',



        // case view all depts etc etc
        default:
          end()
      }
  });
}

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

function addRole() {
  prompt({
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
  })
  .then(response => {
    let titleName = response;
    let salaryName = response;
    let departmentName = response;
    db.addRole(titleName)
    db.addRole(salaryName)
    db.addRole(departmentName)
    .then(() => console.log(`added ${titleName.name} to db`))
    .then(() => console.log(`added ${salaryName.name} to db`))
    .then(() => console.log(`added ${departmentName.name} to db`))
    .then(() => startInitial())
  })
}


function viewDepartment() {
  console.log("view all departments")
  db.viewDepartment().then(([rows])=> {
    console.table(rows)})
}

function viewRole() {
  console.log("view all roles")
  db.viewRole().then(([rows])=> {
    console.table(rows)})
}



// function deleteDepartment() {
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