import { get } from "../services/FetchService";
import appSettings from "../config/appSettings";

const DISPATCH_LOAD_STORIES = (payload) => ({
    type: 'LOAD_STORIES',
    payload
});

export const loadHomeStories = (options = {}) => (dispatch, getState) => {
    let orderBy = options.orderBy || 'newest';
    let pageSize = options.pageSize || 8;
    dispatch(loadStories({ orderBy, pageSize, section: 'top' }));
    dispatch(loadStories({ orderBy, pageSize: 3, section: 'sport' }));
    dispatch(loadStories({ orderBy, pageSize: 3, section: 'culture' }));
    dispatch(loadStories({ orderBy, pageSize: 3, section: 'lifeandstyle' }));
}

export const loadStories = ({ orderBy, pageSize, section }) => (dispatch, getState) => {
    let { API_BASE_URL, API_KEY } = appSettings;
    let url = `${API_BASE_URL}/search?order-by=${orderBy}&show-elements=image&api-key=${API_KEY}&show-fields=trailText,thumbnail&page-size=${pageSize}`
    if (section !== 'top') {
        url += `&section=${section}`
    }
    get({ url }).then(results => {
        if (results?.response?.status === 'ok') {
            dispatch(DISPATCH_LOAD_STORIES({ [section]: results.response.results }));
        }
    })
}

