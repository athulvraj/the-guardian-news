export const getFormattedPosts = (data = [], size) => {
    return data.map((item, i) => {
        let sizeArr = ['xl', 'm', 'm', 's', 's', 'l', 'l', 'l'];
        return ({
            size: size || sizeArr[i],
            title: item.webTitle,
            imgSrc: item?.fields?.thumbnail,
            body: item?.fields?.trailText,
            url: item.webUrl,
            id: item.id,
           
        })
    })
}