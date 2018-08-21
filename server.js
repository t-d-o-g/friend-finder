const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public/js', express.static(`${__dirname}/node_modules/bootstrap/dist/js`));
app.use('/public/js', express.static(`${__dirname}/node_modules/jquery/dist`));
app.use('/public/css', express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use('/public/css', express.static(`${__dirname}/app/public/css`));

require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

