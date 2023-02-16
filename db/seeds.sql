-- Department
INSERT INTO department (name)
VALUES ("Sales"),
       ("Finance"),
       ("Engineering"),
       ("Legal");

-- Role
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 3),
       ("Software Engineer", 120000, 3),
       ("Account Manager", 160000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

-- Employee  
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
-- Employee managers
       ("Donald", "Duck", 1, NULL),
       ("Mickey", "Mouse", 3, NULL),
       ("Captain", "Hook", 5, NULL),
       ("Snow", "White", 7, NULL),
-- Employees with managers
       ("Wendy", "Darling", 2, 2),
       ("Moana", "Waialiki", 4, 1),
       ("Elsa", "Arendelle", 6, 3),
       ("Ariel", "Mermaid", 8, 4);
       ("Princess", "Jasmine", 9, 4);
      