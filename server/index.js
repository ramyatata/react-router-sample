const express = require('express');
const path = require('path');
const colors = require('colors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '3033';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(colors.blue(`Listening on port ${PORT}`));
});