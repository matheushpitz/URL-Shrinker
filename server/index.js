require('dotenv').config();

const app = require('express')();
const routes = require('./routes');

// Create all the routes
routes.createRoutes(app);

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});