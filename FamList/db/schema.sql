DROP DATABASE IF EXISTS MVP;

CREATE DATABASE MVP;

USE MVP;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(10) NOT NULL,
  name VARCHAR(20)
);

CREATE TABLE groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  quantity VARCHAR(10),
  item VARCHAR(50)
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(100),
  dueDate VARCHAR(20),
  userID INT,
  FOREIGN KEY (userID)
    REFERENCES users(id)
);

CREATE TABLE chores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  chore VARCHAR(100),
  dueDate VARCHAR(20),
  userID INT,
  FOREIGN KEY (userID)
    REFERENCES users(id)
);

CREATE TABLE upcomingEvents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event VARCHAR(100),
  date VARCHAR(20),
  userID INT,
  FOREIGN KEY (userID)
    REFERENCES users(id)
);

INSERT INTO users (email, password, name) VALUES ('denee@gmail.com', 'test', 'mom');

INSERT INTO groceries (quantity, item) VALUES ('2', 'bananas');

INSERT INTO tasks (task, dueDate, userID) VALUES ('mow grass', '07/30/2020', 1);

INSERT INTO chores (chore, dueDate, userID) VALUES ('clean', '07/30/2020', 1);

INSERT INTO upcomingEvents (event, date, userID) VALUES ('graduation', '08/07/2020', 1);