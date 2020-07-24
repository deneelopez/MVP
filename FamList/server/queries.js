const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'maddy20bo',
  database: 'MVP'
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to database', error);
  } else {
    console.log('Connected to database');
  }
});

const getUsers = (cb) => {
  connection.query('select * from users', (err, results) => {
    if (err) {
      console.log('error getting users', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const getGroceries = (cb) => {
  connection.query('select * from groceries', (err, results) => {
    if (err) {
      console.log('error getting groceries', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addGrocery = (grocery, cb) => {
  connection.query('insert into groceries (quantity, item) VALUES (?, ?)', grocery, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

const getTasks = (cb) => {
  connection.query('select * from tasks', (err, results) => {
    if (err) {
      console.log('error getting tasks', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addTask = (task, cb) => {
  connection.query('insert into tasks (task, dueDate, userID) VALUES (?, ?, 1)', task, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

const getChores = (cb) => {
  connection.query('select * from chores', (err, results) => {
    if (err) {
      console.log('error getting chores', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addChore = (chore, cb) => {
  connection.query('insert into chores (chore, dueDate, userID) VALUES (?, ?, 1)', chore, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

const getEvents = (cb) => {
  connection.query('select * from upcomingEvents', (err, results) => {
    if (err) {
      console.log('error getting events', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addEvent = (event, cb) => {
  connection.query('insert into upcomingEvents (event, date, userID) VALUES (?, ?, 1)', event, (error, results) => {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getUsers,
  getGroceries,
  getTasks,
  getChores,
  getEvents,
  addGrocery,
  addTask,
  addEvent,
  addChore
}