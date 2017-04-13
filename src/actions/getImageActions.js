//import {getImageData} from '../api/photoFeed'
import {getImageData} from '../api/static/photoFeed'

export const requestImages = () => ({
    type: "REQUEST_IMAGES",
    isFetchingImages: true,
    images: []
});

export const receiveImages = images => ({
    type: "RECEIVE_IMAGES",
    isFetchingImages: false,
    images
});

export const getImagesError = error => ({
    type: "GET_IMAGES_ERROR",
    isFetchingImages: false,
    error
});

export const getImages = () => {
    return (dispatch) => {
        dispatch(requestImages());
        return getImageData()
            .then((imagedata) => {
                dispatch(receiveImages(imagedata))
            }).catch((err)=> {
                dispatch(getImagesError(err.message));
            });
        }
    }

