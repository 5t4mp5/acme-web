const pg = require('pg');
const client = new pg.Client('postgress://localhost/acme_company');

function getPage(id){
  return client.query('SELECT *, content.body FROM pages INNER JOIN content ON content.page_id = pages.id WHERE pages.id = $1', [id])
    .then(response => response.rows[0]);
}

client.connect()
  .then(() => console.log('connected'))
  .catch(err => console.log(err));

module.exports = {getPage};
