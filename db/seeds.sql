USE employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Person', 60000, 1),
    ('Sales Lead', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 100000, 2),
    ('Account Manager', 120000 3),
    ('Accountant', 150000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 100000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Mike', 'Chan', 1, NULL),
    ('Ashley', 'Rodriguez', 2, 1),
    ('Kevin', 'Tupik', 3, NULL),
    ('Kumal', 'Singh', 4, 3),
    ('Malia', 'Brown', 4, 3),
    ('Sarah', 'Loured', 5, NULL),
    ('Tom', 'Allen', 6, 5),
    ('John', 'Doe', 6, 5),
    ('Cesar', 'Martinez', 7, Null), 
    ('Milo', 'Corgi', 7, 8);