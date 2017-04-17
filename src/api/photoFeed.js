import JQuery from 'jquery'

export const getImageData = (page) => {
    // my photo feed
    //const url ='https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=9214b81fd5df9ac2d9c135ee5db643a3&user_id=47148168@N03&format=json&nojsoncallback=1&extras=date_taken,tags,media'
    // interestingness photofeed
    const url ='https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=9214b81fd5df9ac2d9c135ee5db643a3&user_id=47148168@N03&format=json&nojsoncallback=1&extras=date_taken,tags,media&per_page=20&page=' + page

    return new Promise((resolve, reject) => {
        resolve(Object.assign([],
            JQuery.getJSON(url, {type: 'no-cors'}, response => {
                if (response.stat !== 'ok') {
                    throw Error(response.message);
                }
                return response
            }).then( (imagedata) => {
                const returnValue = imagedata.photos.photo.map(image=> {
                    return ({
                        title: image.title,
                        media: { m: "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + ".jpg"},
                        date_taken: image.datetaken.replace(" ", "T"),
                        tags: image.tags
                    })
                } );
                return returnValue;
            })
        ))
    })
/*
 // normally there would be no commented out coded in the repo, but this is left
 // in to show workings (ie. what did not work!)

 let myHeaders = new Headers();
 let config = {
 method: 'GET',
 mode: 'no-cors',
 cache: 'default',
 headers: myHeaders
 };

 const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true'; //&api_key=9214b81fd5df9ac2d9c135ee5db643a3'
        return fetch(url, config).then((response) => {
            console.log(response)

            if (!response.ok) {
                throw Error(response.statusText);
            }
            console.log(response.json);
            return response.json();
        })
            .then((data) => {
             console.log(data.items);
             return data.items;
             }).catch((err)=> {
             throw(err);
             });
*/
}