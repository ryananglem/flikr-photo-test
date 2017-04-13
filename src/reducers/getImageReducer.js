const initialState = {
    isFetchingImages:false,
    images: [],
    error:''
};

const getImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_IMAGES":
            return {
                isFetchingImages: true,
                images: []
            };
        case "RECEIVE_IMAGES":
            return {
                isFetchingImages:  false ,
                images: action.images
            };
        case "GET_IMAGES_ERROR":
            return {
                isFetchingStations: false ,
                error: action.error
            };
        default:
            return state;
    }
};
export default getImageReducer;