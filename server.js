var express = require('express');
var helmet = require('helmet');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller');

var port = process.env.PORT || 3000;
var app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view-engine', 'handlebars');

app.use(routes);

app.listen(port, function() {
    console.log("Listening on " + port);
});

