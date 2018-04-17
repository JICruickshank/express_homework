var express = require('express');
var app = express();
// bodyParser helps deal with post requests
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));

app.use(require("./controllers/index"));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});

// (npm init if necessary)
// npm install
// npm test, npm start etc - commands equivalent to what is your in your package.json scripts. however anyone npm e.g. webpack needs npm run webpack
