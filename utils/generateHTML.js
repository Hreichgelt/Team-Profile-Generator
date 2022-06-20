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
      <div class="card" style="width: 18rem">
        <div class="card-header name">Name</div>
        <div class="card-header position">Manager</div>
        <div class="card-header position">Office</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">ID</li>
          <li class="list-group-item email">Email</li>
          <li class="list-group-item github">Github</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-header name">Name</div>
        <div class="card-header position">Engineer</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">ID</li>
          <li class="list-group-item email">Email</li>
          <li class="list-group-item github">Github</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-header name">Name</div>
        <div class="card-header position">Intern</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">ID</li>
          <li class="list-group-item email">Email</li>
          <li class="list-group-item github">School</li>
        </ul>
      </div>
    </body>
  </html>
`;
}

module.exports = generateHTML;
