const express = require('express');
const app = express();
const db = require('./db');
const html = require('./html');

const renderPage = (body, name)=> {
  return `
      <html>
      <head>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' />
        <title>Acme: ${name}</title>
      </head>
      <body>
        <div class='container'>
          <h1>Acme Web</h1>
          ${body}
        </div>
      </body>
      </html>
    `;
};

app.use((req, res, next) => {
  db.getUsers()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(next);
});

app.get('/', (req, res, next) => res.redirect('/1'));

app.get('/:id', (req, res, next) => {

  db.getPage(req.params.id * 1)
    .then(page => {
      res.send(renderPage(html[page.body](req.users), page.name));
    })
    .catch(next);
});

module.exports = app;
