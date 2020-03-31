import {get, post} from '../../utils/http';

export const getUrl = async (id) => {   
    try { 
        return await get(process.env.REACT_APP_API_HOST + 'shrinker/get?id='+id);
    } catch(err) {
        throw err;
    }
}

export const getTop5 = async () => {    
    try {
        return await get(process.env.REACT_APP_API_HOST + 'shrinker/gettop5');
    } catch(err) {
        throw err;
    }
}

export const addUrl = async (link) => {
    try {
        return await post(process.env.REACT_APP_API_HOST + 'shrinker/add', {
            url: link
        });
    } catch(err) {
        throw err;
    }
}
