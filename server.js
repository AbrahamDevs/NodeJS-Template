"use strict";

const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('pages/index');
});


app.use(express.static('public'));

app.listen(port, err => {
  if (err) {
    return console.log("An error Occured: ", err);
  }
  console.log(`Listening on port ${port}`);
});
