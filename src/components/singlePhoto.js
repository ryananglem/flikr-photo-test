import React from 'react';
import PropTypes from 'prop-types';

const SinglePhoto = ({photo, onClickPhoto}) => {
    return (
        <div className="listPhoto">
            <div className="photoImageContainer">
                <img className="photoImage" alt={photo.title} src={photo.media.m} onClick={(p) => onClickPhoto(photo)}/>
            </div>
        </div>
    )
}
SinglePhoto.propTypes = {
    photo: PropTypes.object,
    onClickPhoto: PropTypes.func
};
export default SinglePhoto;
