import React from 'react';
import PropTypes from 'prop-types';
import PhotoTags from './photoTags'

const PhotoDetails = ({photo, onClose}) => {
    return (
        <div onClick={onClose} className="largePhoto">
            <div className="largeImageContainer">
                <img alt={photo.title} src={photo.media.m} />
            </div>
            <div className="photoDetails">
            <span className="photoTitle">{photo.title}</span> <br/>
            <span className="photoDate">Date taken: {photo.date_taken.substring(0, photo.date_taken.indexOf("T"))} </span> <br/>
            <div style={{ textAlign: 'center'}}><PhotoTags tags={photo.tags.split(" ")}/>
            </div>
            </div>
        </div>
    )
}
PhotoDetails.propTypes = {
    photo: PropTypes.object,
    onClose: PropTypes.func
};
export default PhotoDetails;


