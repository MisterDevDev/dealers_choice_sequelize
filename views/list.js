const html = require('html-template-tag');

module.exports = () => html`<!DOCTYPE html>
<html>
<head>
  <title>E-rate API tracker</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
    <div class='yearContainer'>
        <ul>
            <li><a href='/main/all'>Fiscal Years to Date</a></li>
            <li><a href='/main/2018'>Fiscal Year 2018</a></li>
            <li><a href='/main/2019'>Fiscal Year 2019</a></li>
            <li><a href='/main/2020'>Fiscal Year 2020</a></li>
        </ul>
    </div>
  </div>
</body>
</html>`