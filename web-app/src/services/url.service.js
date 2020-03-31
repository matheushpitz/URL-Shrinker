import { stringify } from "querystring";

export const getUrl = async (id) => {    
    return await (await fetch(process.env.REACT_APP_API_HOST + 'shrinker/get?id='+id)).json();
}

export const addUrl = async (link) => {
    return await (await fetch(process.env.REACT_APP_API_HOST + 'shrinker/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: stringify({
            url: link
        })
    })).json();
}
