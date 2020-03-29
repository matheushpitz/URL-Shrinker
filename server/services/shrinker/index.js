const https = require('../../utils/https');
const repository = require('../../repositories/urls');

const isUrlValid = async (url) => {
    try {        
        await https.get(url);        
        return true;
    } catch(err) {
        return false;
    }
}

const addUrl = async (url) => {
    let isValid = await isUrlValid(url);

    if(isValid) {
        let response = await repository.add(url);
        if(response.nInserted > 0)
            return true;
        else
            return false;
    }
}

const getUrl = async (id) => {
    try {
        let result = await repository.get(id);
        if(result) {
            result.count++;
            await repository.update(result);
            return result;
        }

        return undefined;
    } catch(err) {
        throw err;
    }
}

const getTop5 = async () => {
    try {
        return await repository.getTop5();
    } catch(err) {
        throw err;
    }
}

module.exports = {
    addUrl,
    getUrl,
    getTop5
};