import { get } from "../services/FetchService"
const DISPATCH_LOAD_TOP_STORIES = (payload) => ({
    type: 'LOAD_TOP_STORIES',
        payload
});

export const loadTopStories = () => (dispatch, getState) => {
    get({
        url: 'https://content.guardianapis.com/search?show-elements=image&api-key=cdd1c199-f801-45ee-89eb-d62653ade981&show-fields=trailText,thumbnail&page-size=8'
    }).then(results => {        
        if (results?.response?.status === 'ok') {
            dispatch(DISPATCH_LOAD_TOP_STORIES(results.response.results))
            console.log(results.response.results)
        }
    })
}