import { get } from "../services/FetchService";
import appSettings from "../config/appSettings";

const DISPATCH_LOAD_TOP_STORIES = (payload) => ({
    type: 'LOAD_TOP_STORIES',
        payload
});

export const loadTopStories = (options = {}) => (dispatch, getState) => {
    let orderBy = options.orderBy || 'newest';
    let pageSize = options.pageSize || 8;
    //let section = options.section || 'news';section=${section}&
    let {API_BASE_URL, API_KEY } = appSettings; 
    get({
        url: `${API_BASE_URL}/search?order-by=${orderBy}&show-elements=image&api-key=${API_KEY}&show-fields=trailText,thumbnail&page-size=${pageSize}`
    }).then(results => {        
        if (results?.response?.status === 'ok') {
            dispatch(DISPATCH_LOAD_TOP_STORIES(results.response.results))
            console.log(results.response.results)
        }
    })
}