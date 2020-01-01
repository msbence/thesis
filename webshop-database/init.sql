CREATE SEQUENCE public.hibernate_sequence INCREMENT 1 START 1 MINVALUE 1;

CREATE TABLE Category (id int8 not null, name varchar(255), primary key (id));
CREATE TABLE Product (id int8 not null, description varchar(255), name varchar(255), price int8 not null, category_id int8, primary key (id));

INSERT INTO Category (id, name) VALUES (1, 'Hardware');

INSERT INTO Product (id, name, price, description, category_id) VALUES (1, 'Logitech MX700', 25000, 'Wireless mouse', 1);
INSERT INTO Product (id, name, price, description, category_id) VALUES (2, 'LG display 17 col', 125000, 'LG flat display', 1);
INSERT INTO Product (id, name, price, description, category_id) VALUES (3, 'Microsoft laser pointer', 6800, 'Laser pointer and presenter', 1);

INSERT INTO Category (id, name) VALUES (2, 'Software');

INSERT INTO Product (id, name, price, description, category_id) VALUES (4, 'Ms Office 2018 Home', 25000, 'The best office suite for home', 2);
INSERT INTO Product (id, name, price, description, category_id) VALUES (5, 'Adobe Photoshop', 125000, 'Graphical editing software', 2);
