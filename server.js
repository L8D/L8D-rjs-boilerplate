var express = require('express'),
    morgan = require('morgan'),
    path = require('path');

var app = express();

app
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.static('dist'))
  .use(function(req, res) {
    if (req.accepts('html')) {
      res.status(404).sendFile(path.resolve(__dirname + '/public/404.html'));
    } else {
      res.status(404).send('Not found');
    }
  });

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
