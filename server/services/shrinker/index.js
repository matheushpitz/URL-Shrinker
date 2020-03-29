const https = require('../../utils/https');
const repository = require('../../repositories/urls');

const isUrlValid = async (url) => {
    try {        
        //make a http request
        await https.get(url);        
        return true;
    } catch(err) {
        return false;
    }
}

const addUrl = async (url) => {
    try {
        // check if the link is valid
        let isValid = await isUrlValid(url);        

        if(isValid) {
            // add on database
            let response = await repository.add(url);            
            if(response.insertedCount > 0)
                return true;
            else
                return false;
        }

        return false;
    } catch(err) {
        throw err;
    }
}

const getUrl = async (id) => {
    try {
        //get the data.
        let result = await repository.get(id);
        if(result) {
            result.count++;
            // update with count++
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
        // get top 5 links
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