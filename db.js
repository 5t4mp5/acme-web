const pg = require('pg');
const client = new pg.Client('postgress://localhost/acme_company');

function getUsers(){
  return client.query('SELECT * FROM officers')
    .then(response => response.rows);
}

function getUser(id){
  return client.query('SELECT * FROM officers WHERE id = $1', [id])
    .then(response => response.rows[0]);
}

client.connect()
  .then(() => console.log('connected'))
  .catch(err => console.log(err));

module.exports = {getUser, getUsers};
