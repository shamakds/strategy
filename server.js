var express = require("express");
var app = express();
var deploy = false;
var port = process.env.PORT || deploy ? 80 : 3001;

app.use('/', express.static(__dirname));
app.use('/build', express.static(__dirname + "/build"));

app.all('/*', function(req, res) {
    res.sendfile('./index.html');
});

app.listen(port, function() {
    console.info("server running on %d port", port);
});

