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
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link rel="stylesheet" href="style.css">
  
      <title>My Team | Info</title>
    </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 bg-danger">
            <h1 class="text-center text dark">My Team</h1>
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
      <div class="card employee-card" style="width: 18rem">
        <div class="card-header bg-primary text-light">
          <h2 class="card-title">${manager.name}</h2>
          <h3 class="card-subtitle"><i class="fas fa-mug-hot mr-2"></i>${manager.title}</h3>
        </div>
        <div class="card-body"
          <ul class="list-group">
            <li class="list-group-item id">Employee ID: ${manager.id}</li>
            <li class="list-group-item office">Office number: ${manager.office}</li>
            <li class="list-group-item email">Employee Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          </ul>
        </div>
      </div>
`;
}

function generateEngineerCard(engineer) {
  return `
    <div class="card employee-card" style="width: 18rem">
      <div class="card-header bg-primary text-light">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-subtitle"><i class="fas fa-glasses mr-2"></i>${engineer.title}</h3>
      </div>
      <div class="card-body"
        <ul class="list-group">
          <li class="list-group-item id">Employee ID: ${engineer.id}</li>
          <li class="list-group-item office">Github Username: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
          <li class="list-group-item email">Employee Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        </ul>
      </div>
    </div>
`;
}

function generateInternCard(intern) {
  return `
    <div class="card employee-card" style="width: 18rem">
      <div class="card-header bg-primary text-light">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-subtitle"><i class="fas fa-user-graduate mr-2"></i>${intern.title}</h3>
      </div>
      <div class="card-body"
        <ul class="list-group">
          <li class="list-group-item id">Employee ID: ${intern.id}</li>
          <li class="list-group-item office">School: ${intern.school}</li>
          <li class="list-group-item email">Employee Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        </ul>
      </div>
    </div>
`;
}

module.exports = generateHTML;
