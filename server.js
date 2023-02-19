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
        case "CREATE_DEPT":
          createDept()
          break;
        case "VIEW_DEPT":
          viewDept()
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
    message: 'What is the dept name?'
  })
  .then(response => {
    let deptName = response;
    db.createDept(deptName)
    .then(() => console.log(`added ${deptName.name} to db`))
    .then(() => startInitial())
  })
}





  // choices: [                'View All Departments',
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


















function end() {
  process.exit();
}