import { get } from "../services/FetchService";
import appSettings from "../config/appSettings";

const DISPATCH_LOAD_STORIES = (payload) => ({
    type: 'LOAD_STORIES',
    payload
});
const DISPATCH_LOAD_ARTICLE = (payload) => ({
    type: 'LOAD_ARTICLE',
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
    let url = getApiUrl({ path :'/search', orderBy, pageSize, section })
    get({ url }).then(results => {
        if (results?.response?.status === 'ok') {
            dispatch(DISPATCH_LOAD_STORIES({ [section]: results.response.results }));
        }
    })
}

export const loadArticle = (id ) => (dispatch, getState) => {
    let url = getApiUrl({ path:['/'+id], showFields:'body' })
    get({ url }).then(results => {
        if (results?.response?.status === 'ok') {
            dispatch(DISPATCH_LOAD_ARTICLE({ [id]: results.response.results || results.response.content }));
        }
    })
}

export const getApiUrl = ({ path, orderBy, pageSize, section, showFields }) => {
    let { API_BASE_URL, API_KEY } = appSettings;

    let url = `${API_BASE_URL}${path}?show-elements=image&api-key=${API_KEY}`
    if (typeof orderBy !== 'undefined') {
        url += `&order-by=${orderBy}`;
    }
    if (typeof showFields !== 'undefined') {
        url += `&show-fields=trailText,thumbnail,${showFields}`;
    } else {
        url += `&show-fields=trailText,thumbnail`;
    }
    if (typeof pageSize !== 'undefined') {
        url += `&page-size=${pageSize}`;
    }
    if (section !== 'top' && typeof section !== 'undefined') {
        url += `&section=${section}`
    }
    return url;
}

