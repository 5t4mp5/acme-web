const express = require('express');
const app = express();
const db = require('./db');

app.use((req, res, next) => {
  db.getUsers()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(next);
});

app.get('/', (req, res, next) => {
  res.send(req.users);
});

module.exports = app;
