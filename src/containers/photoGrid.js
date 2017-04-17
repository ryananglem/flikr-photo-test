import  React, { Component } from 'react';
import { connect } from 'react-redux';
import Photos from '../components/photos'
import { getImages } from '../actions/getImageActions'

class PhotoGrid extends Component {
    constructor(props, context){
        super(props, context);
        this.clickPhoto=this.clickPhoto.bind(this);
        this.retrievePhotoFeed=this.retrievePhotoFeed.bind(this);
        this.closeDetails=this.closeDetails.bind(this);
        this.state = {
            nextImagePageNumber: 2,
            photoOpened: false,
            largePhoto: {  title: "",
                           link: "",
                           media: {"m":""},
                           date_taken: "2017-04-13T18:32:18-08:00",
                           tags: ""
                    }
            }
    }
    clickPhoto(photo)  {
        this.setState({photoOpened: true, largePhoto: photo});
    }
    closeDetails() {
        this.setState({photoOpened: false});
    }
    retrievePhotoFeed() {
        this.props.getImages(this.state.nextImagePageNumber);
        this.setState({nextImagePageNumber: this.state.nextImagePageNumber+1});
    }
    render () {
        return (
             <Photos
                loadMore={this.retrievePhotoFeed}
                gallery={this.props.images}
                onClickPhoto={this.clickPhoto}
                onClosePhoto={this.closeDetails}
                largePhoto={this.state.largePhoto}
                photoOpened={this.state.photoOpened}
             />
        );
    }
}
const mapStateToProps = (state) => {
    const { images } = state;
    return {
        images
    }
 }
const mapDispatchToEvents = (dispatch) => {
    return {
        getImages: (page) => {
            dispatch(getImages(page))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToEvents)(PhotoGrid);