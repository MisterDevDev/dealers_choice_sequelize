const html = require('html-template-tag');

module.exports = () => html`<!DOCTYPE html>
<html>
<head>
  <title>E-rate API tracker</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
    <div class='yearContainer'>
        <ul class='yearItems'>
            <li><a href='/main/2018'>Fiscal Year 2018</a></li>
            <li><a href='/main/2019'>Fiscal Year 2019</a></li>
            <li><a href='/main/2020'>Fiscal Year 2020</a></li>
            <li><a href='/main/2021'>Fiscal Year 2021(pending review)</a></li>
        </ul>
    </div>
  </div>
</body>
</html>`