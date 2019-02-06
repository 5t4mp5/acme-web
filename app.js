const express = require('express');
const app = express();
const db = require('./db');

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
          <ul class='nav nav-tabs'>
            <li class='nav-item'>
              <a href='/1' class='${name === 'Home' ? 'nav-link active' :  'nav-link'}'>Home</a>
            </li>
            <li class='nav-item'>
            <a href='/2' class='${name === 'Employees' ? 'nav-link active' :  'nav-link'}'>Employees</a>
            </li>
            <li class='nav-item'>
            <a href='/3' class='${name === 'Contact' ? 'nav-link active' :  'nav-link'}'>Contact</a>
            </li>
          </ul>
          <div>
            ${body}
          </div>
        </div>
      </body>
      </html>
    `;
};

app.get('/', (req, res, next) => res.redirect('/1'));

app.get('/:id', (req, res, next) => {

  db.getPage(req.params.id * 1)
    .then(page => {
      res.send(renderPage(page.body, page.name));
    })
    .catch(next);
});

module.exports = app;
