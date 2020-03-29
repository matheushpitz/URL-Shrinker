const mongoClient = require('mongodb').MongoClient;

function Database() {
    // connect to database
    mongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true }, (err, db) => {
        if(err)
            throw err;   
        // use database
        this.dbInstance = db.db(process.env.DB_NAME);
        console.log('Successfully connected on ' + process.env.DB_NAME);
    });
}

module.exports = new Database();
