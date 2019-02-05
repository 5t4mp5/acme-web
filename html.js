const homeBody = () => {
  return `<ul class='nav nav-tabs'>
  <li class='nav-item'>
    <a href='/1' class='nav-link active'>Home</a>
  </li>
  <li class='nav-item'>
    <a href='/2' class='nav-link'>Employees</a>
  </li>
  <li class='nav-item'>
    <a href='/3' class='nav-link'>Contact</a>
  </li>
  </ul>
  <div>
  <h2>Welcome to the Homepage!</h2>
  <p>So looking forward to having you browser our site</p>
  </div>`;
};

const empBody = (users) => {
  return `<ul class='nav nav-tabs'>
  <li class='nav-item'>
    <a href='/1' class='nav-link'>Home</a>
  </li>
  <li class='nav-item'>
    <a href='/2' class='nav-link active'>Employees</a>
  </li>
  <li class='nav-item'>
    <a href='/3' class='nav-link'>Contact</a>
  </li>
  </ul>
  <div>
  <ul>${users.map(user => {
    return `<li><h2>${user.name}</h2>
    ${user.name} is our ${user.role}!!!</li>`;
  }).join('')}
  </ul>
  </div>`;
};

const contBody = () => {
  return `<ul class='nav nav-tabs'>
  <li class='nav-item'>
    <a href='/1' class='nav-link'>Home</a>
  </li>
  <li class='nav-item'>
    <a href='/2' class='nav-link'>Employees</a>
  </li>
  <li class='nav-item'>
    <a href='/3' class='nav-link active'>Contact</a>
  </li>
  </ul>
  <div>
  <h2>Phone</h2>
  <p>call us 212-555-1212</p>
  <h2>Fax</h2>
  <p>fax us 212-555-1212</p>
  </div>`;
};

module.exports = {homeBody, empBody, contBody};
