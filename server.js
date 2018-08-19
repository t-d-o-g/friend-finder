const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/public', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/public', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

