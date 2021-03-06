const service = require('../../services/shrinker');

const createShrinkerRoutes = (app) => {    
    app.post('/shrinker/add', async (req, res) => {
        try {                        
            let result = await service.addUrl(req.body.url); 
            res.json({
                success: result !== undefined,
                message: result ? 'The link has been shrunk.' : 'Invalid link.',
                id: result ? result._id : undefined
            });
        } catch(err) {
            console.log(err);
            res.json({
                success: false,
                message: 'An error occured when trying to shrink the link. Try again later.'
            });
        }
    });

    app.get('/shrinker/get', async (req, res) => {
        try {                      
            res.json({
                success: true,
                data: await service.getUrl(req.query.id)
            });
        } catch(err) {
            console.log(err);
            res.json({
                success: false
            });
        }
    });

    app.get('/shrinker/getTop5', async (req, res) => {
        try {                      
            res.json({
                success: true,
                data: await service.getTop5()
            });
        } catch(err) {
            console.log(err);
            res.json({
                success: false
            });
        }
    });
}

module.exports = {
    createShrinkerRoutes
};