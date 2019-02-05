const express = require('express');
const app = express();
const db = require('./db');

const renderPage = (users, title, header, body)=> {
  return `
      <html>
      <head>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' />
        <title>Acme: ${title}</title>
      </head>
      <body>
        <div class='container'>
          <h1>Acme Web</h1>
          <ul class='nav nav-tabs'>
            <li class='nav-item'>
              <a href='/' class='nav-link' id ='home'>Home</a>
            </li>
            <li class='nav-item'>
              <a href='/employees' class='nav-link'>Employees</a>
            </li>
            <li class='nav-item'>
              <a href='/contact' class='nav-link'>Contact</a>
            </li>
          </ul>
        <div>
        <h2>${header}</h2>
        <p>${body}</p>
        </div>
        </div>
      </body>
      </html>
    `;
}

app.use((req, res, next) => {
  db.getUsers()
    .then(users => {
      req.users = users;
      next();
    })
    .catch(next);
});

app.get('/', (req, res, next) => {
  res.send(renderPage(req.users, 'Home', 'Welcome to the Home Page', 'So looking forward to having you browse our site'));
});

app.get('/employees', (req, res, next) => {
  res.send(renderPage(req.users, 'Employees', '', `
  <ul>
    ${req.users.map(user => {
      return `<h2>${user.name}</h2>
      <p>${user.name} is our ${user.role}!!!</p>`;
    }).join('')}
  </ul>
  `));
});

app.get('/contact', (req, res, next) => {
  res.send(renderPage(req.users, 'Contact', '', `
  <h2>Phone</h2>
  <p>call us 212-555-1212</p>
  <h2>Fax</h2>
  <p>fax us 212-555-1212</p>
  `));
});

module.exports = app;
