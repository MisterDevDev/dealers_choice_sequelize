const html = require('html-template-tag');

module.exports = (appData) => html`<!DOCTYPE html>
<html>
<head>
  <title>E-rate API tracker</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
    <div class='appContainer'>
        <div>
        <span>${appData.map(app => {
            let totalsArr = [];
            app.circuits.forEach(c => totalsArr.push(c.total_eligible));
            let total = 
            totalsArr.reduce((acc, cur) => (acc*1) + (cur*1));
            return html`
            <p>--------</p>
            <p>471 ID #${app.id}</p>
            <p>Total Eligible Amount: $ ${Math.round(total)}</p>
            <p>--------</p>
        `})}</span>
        </div>
    </div>
  </div>
</body>
</html>`
