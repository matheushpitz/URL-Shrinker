export const getUrl = async (id) => {    
    return await (await fetch(process.env.REACT_APP_API_HOST+'shrinker/get?id='+id)).json();
}
