const shrinker = require('./shrinker');

const createRoutes = (app) => {
    shrinker.createShrinkerRoutes(app);
}

module.exports = {
    createRoutes
}