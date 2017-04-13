
export const getImageData = () => {
    let myHeaders = new Headers();
    let config = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default',
        headers: myHeaders
    };
    /*
    Key: 9214b81fd5df9ac2d9c135ee5db643a3
    Secret: 992f04c247f04bf6
    */
    const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&api_key=9214b81fd5df9ac2d9c135ee5db643a3';
        return fetch(url, config).then((response) => {
            //console.log(response);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            //console.log(response.json);
            return response.json();
        }).then((data) => {
            //console.log(data.items);
            return data.items;
        }).catch((err)=> {
            throw(err);
        });
    }
