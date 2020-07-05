const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/app'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/app/'}
);
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log('Server started running on port: ' + port);
