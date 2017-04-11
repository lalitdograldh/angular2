var express = require('express');
var app = express();
var cors = require("cors");

app.use(cors({ credentials: true, origin: 'http://localhost:3001' }));
app.get('/api', function(req, res) {
        res.end('file catcher example');
});

app.post('api/authenticate', function(req, res, next) {
        // req.body contains the text fields
          //  var finalData = results[1].replace(/\\/g, '');
           res.json(["ok"]);
});

app.post('api/search', function(req, res, next) {
        // req.body contains the text fields
          //  var finalData = results[1].replace(/\\/g, '');
           res.json(["ok"]);
});
var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
        console.log('Working on port ' + PORT);
});