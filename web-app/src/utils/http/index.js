export const get = async (url) => {
    try {
        return (await fetch(url)).json();
    } catch(err) {
        throw err;
    }
}

export const post = async (url, body) => {    
    try {
        return (await fetch(url, {
            method: 'POST',
            headers: {            
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })).json();
    } catch(err) {
        throw err;
    }
}