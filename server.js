var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var BAND_LIST = path.join(__dirname, 'bands.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'www')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/data', function(req, res) {
  fs.readFile(BAND_LIST, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/data', function(req, res) {
  fs.readFile(BAND_LIST, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var bands = JSON.parse(data);
    var newBand = {
      id: Date.now(),
      bandName: req.body.bandName,
      year: req.body.year,
      bio: req.body.bio,
    };
    bands.push(newBand);
    fs.writeFile(BAND_LIST, JSON.stringify(bands, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(bands);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
