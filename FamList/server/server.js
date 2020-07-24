const express = require('express');
const path = require('path');
const Axios = require('axios');
const db = require('./queries.js')

const PORT = '8008';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../index.js')));

app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});

app.get(`/family/users`, async (req, res) => {
  console.log('server get request');
  await db.getUsers((error, response) => {
    if (error) {
      console.log('get user error', error);
      res.sendStatus(404);
    } else {
      res.status(200).send(response);
    }
  });
});


app.get(`/family/groceries`, async (req, res) => {
  await db.getGroceries((error, response) => {
    if (error) {
      console.log('get groceries error', error);
      res.sendStatus(404);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post(`/family/groceries`, (req, res) => {
  // console.log('server post', req.body.value);
  db.addGrocery(req.body.value, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    } else {
      res.status(200).send('sent');
    }
  });
});

app.get(`/family/tasks`, async (req, res) => {
  await db.getTasks((error, response) => {
    if (error) {
      console.log('get tasks error', error);
      res.sendStatus(404);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post(`/family/tasks`, (req, res) => {
  db.addTask(req.body.value, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    } else {
      res.status(200).send('sent');
    }
  });
});

app.get(`/family/chores`, async (req, res) => {
  await db.getChores((error, response) => {
    if (error) {
      console.log('get chores error', error);
      res.sendStatus(404);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post(`/family/chores`, (req, res) => {
  db.addChore(req.body.value, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    } else {
      res.status(200).send('sent');
    }
  });
});

app.get(`/family/events`, async (req, res) => {
  await db.getEvents((error, response) => {
    if (error) {
      console.log('get events error', error);
      res.sendStatus(404);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post(`/family/events`, (req, res) => {
  db.addEvent(req.body.value, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(404);
    } else {
      res.status(200).send('sent');
    }
  });
});