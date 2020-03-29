const database = require('../database');

const createId = () => {
    return Buffer.from((new Date()).getTime() + count()).toString('base64');
}

const createUrl = (url) => {
    return {
        _id: createId(),
        url: url,
        count: 0
    }
};

const add = async (url) => {
    try {
        return await database.dbInstance.collection('urls').insertOne(createUrl(url));
    } catch(err) {
        throw err;
    }
};

const get = async (id) => {
    try {
        let cursor = database.dbInstance.collection('urls').find({ _id: id });
        // get next        
        if(cursor.hasNext())
            return await cursor.next();

        return undefined;
    } catch(err) {
        throw err;
    }
}

const getTop5 = async () => {
    try {
        return await database.dbInstance.collection('urls').find().sort({ count: -1 }).limit(5).toArray();        
    } catch(err) {
        throw err;
    }
}

const update = async (urlObj) => {
    try {
        return await database.dbInstance.collection('urls').updateOne({ _id: urlObj._id }, {$set: urlObj});
    } catch(err) {
        throw err;
    }
}

const count = () => {
    return database.dbInstance.collection('urls').countDocuments();
}

module.exports = {
    add,
    count,
    get,
    update,
    getTop5
};