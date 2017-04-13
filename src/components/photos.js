import React from 'react';
import PropTypes from 'prop-types';
import SinglePhoto from '../components/singlePhoto'
import PhotoDetails from '../components/photoDetails'

const Photos = ({gallery, onClickPhoto, loadMore, onClosePhoto, largePhoto, photoOpened}) => {
    const photoList = gallery.map((photo, index) => (
        <SinglePhoto key={index}
                     photo={photo}
                     onClickPhoto={onClickPhoto}
        />
    ))
    return (
            <div className="largePhotoContainer">
                <div className={"largePhoto" + (photoOpened===false ? " hidden" : "") }>
                    <PhotoDetails photo={largePhoto} onClose={onClosePhoto}/>
                </div>
                <div>
                    <button onClick={loadMore}> load more..</button>
                </div>
                {photoList}
            </div>
        )
    }

Photos.propTypes = {
    gallery: PropTypes.array,
    onClickPhoto: PropTypes.func,
    loadMore: PropTypes.func,
    onClosePhoto: PropTypes.func,
    largePhoto: PropTypes.object,
    photoOpened: PropTypes.bool
};
export default Photos;
