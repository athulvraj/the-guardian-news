export const saveToStorage = (item, target = 'bookmarks') => {
    let targetStr = window.localStorage.getItem(target);
    let targetObj = {};
    targetObj = targetStr === null ? item : { ...JSON.parse(targetStr), ...item };
    window.localStorage.setItem([target], JSON.stringify(targetObj));
}

export const retriveFromStorage = (item) => {
    let result = window.localStorage.getItem(item);
    return result !== null ? JSON.parse(result) : {};
}


export const removeFromStorage = (key,target = 'bookmarks' ) => {
    let tarStr = window.localStorage.getItem(target);
    let tarObj = JSON.parse(tarStr);
    delete tarObj[key];    
    window.localStorage.setItem([target], JSON.stringify(tarObj));
}