const Manager = require("../lib/manager");

// create a function that generates the html
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  
      <title>My Team | Info</title>
    </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 bg-danger">
            <h1 class="text-center text dark">Team</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
        <div class="row col-12 d-flex justify-content-center">
      </div>
      ${generateEmployeeCards(data)}
    </body>
  </html>
  
`;
}

function generateEmployeeCards(employeeArr) {
  let cards = "";

  for (let i = 0; i < employeeArr.length; i++) {
    console.log(employeeArr[i].title);
    if (employeeArr[i].title === "Manager") {
      cards += generateManagerCard(employeeArr[i]);
    }
    if (employeeArr[i].title === "Engineer") {
      cards += generateEngineerCard(employeeArr[i]);
    }
    if (employeeArr[i].title === "Intern") {
      cards += generateInternCard(employeeArr[i]);
    }
  }

  return cards;
}

function generateManagerCard(manager) {
  return `
      <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.title}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">Employee ID: ${manager.id}</li>
          <li class="list-group-item office">Office number: ${manager.office}</li>
          <li class="list-group-item email">Employee Email: ${manager.email}</li>
        </ul>
      </div>
      </div>
`;
}

function generateEngineerCard(engineer) {
  return `
      <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.title}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">Employee ID: ${engineer.id}</li>
          <li class="list-group-item office">Github Username: ${engineer.github}</li>
          <li class="list-group-item email">Employee Email: ${engineer.email}</li>
        </ul>
      </div>
      </div>
`;
}

function generateInternCard(intern) {
  return `
      <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.title}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">Employee ID: ${intern.id}</li>
          <li class="list-group-item office">School: ${intern.school}</li>
          <li class="list-group-item email">Employee Email: ${intern.email}</li>
        </ul>
      </div>
      </div>
`;
}

module.exports = generateHTML;
