const pg = require('pg');
const client = new pg.Client('postgress://localhost/acme_company');

function getUsers(){
  return client.query('SELECT * FROM users')
    .then(response => response.rows);
}

function getPage(id){
  return client.query('SELECT * FROM pages WHERE id = $1', [id])
    .then(response => response.rows[0]);
}

client.connect()
  .then(() => console.log('connected'))
  .catch(err => console.log(err));

module.exports = {getPage, getUsers};
