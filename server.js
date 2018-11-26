const express = require('express');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers-controller');

const port = process.env.PORT || 3000;
const app = express();

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

