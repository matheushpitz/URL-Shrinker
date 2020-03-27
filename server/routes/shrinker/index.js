const createShrinkerRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send('teste');
    });
}

module.exports = {
    createShrinkerRoutes
};