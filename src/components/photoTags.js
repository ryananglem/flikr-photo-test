import React from 'react';
import PropTypes from 'prop-types';

const PhotoTags = ({tags}) => {
    return (
        <div>
        { tags.map((tag) =>
            <div key={tag} className="photoTag">{tag}</div>
        )}
        </div>
    );
}
PhotoTags.propTypes = {
    tags: PropTypes.array
};
export default PhotoTags;
