require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
// use json on body
app.use(express.json());
app.use(cors());

// Create all the routes
routes.createRoutes(app);

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
});