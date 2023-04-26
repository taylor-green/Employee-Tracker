INSERT INTO department (name)
VALUES ('finance'),
       ('sales'),
       ('marketing'),
       ('engineering');

SELECT * FROM department;
INSERT INTO role (title, salary, department_id)
VALUES ('accountant', 80000, 1 ),
       ('software engineer', 125000, 4),
       ('sales rep', 80000, 2),
       ('sales lead', 95000, 2),
       ('accounting manager', 120000, 1),
       ('marketing lead', 15000, 3), 
       ('product marketing manager', 60000, 3),
       ('project manager', 95000, 4),
       ('engineering manager', 235000, 4);


SELECT * FROM role;


INSERT INTO employee(first_name, last_name, role_id)
VALUES ('Harley', 'Quinn', 2),
       ('Bruce', 'Wayne', 1),
       ('Harvey', 'Dent', 3),
       ('Selina', 'Kyle', 3),
       ('Jim', 'Gordon', 2),
       ('Jack', 'Napier', 3);

SELECT * FROM employee;