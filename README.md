# Employee-Tracker

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## Table of Contents
- [Project description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Build with](#Build)


## Description
Employee Tracker an command-line application to manage a company's employees.

---- LINK -----


## Usage
- Add department, roles employees
- View departments, roles, employees
- Update employee roles
- Update employees managers
- View employees by manager
- Delete department, roles and employees


## Installation
npm install, inquirer, schema.sql, seed.sql


## Build with
- SQL
- JavaScript
- Node.js


## License
MIT


THEN I am presented with the following options: add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
