const https = require('https');
const urlParser = require('url');

const get = (url) => {
    return new Promise((resolve, reject) => {
        url = urlParser.parse(url);

        let options = {
            host: url.host,
            path: url.path,
            method: 'GET'
        };

        https.request(options, res => {
            resolve(res);
        }).on('error', error => {
            reject(error);
        }).end();
    });
}

module.exports = {
    get
}