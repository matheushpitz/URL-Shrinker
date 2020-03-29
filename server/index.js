require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
// use json on body
app.use(express.json());

// Create all the routes
routes.createRoutes(app);

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});