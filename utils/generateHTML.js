// create a function that generates the html
function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
  <title>My Team | Info</title>
</head>
<body>
  <div class="card" style="width: 18rem;">
    <div class="card-header">${data.name}</div>
    <div class="card-header">${data.title}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
      <li class="list-group-item">${data.github}</li>
    </ul>
  </div>
</body>
</html>
`;
}

module.exports = generateHTML;
