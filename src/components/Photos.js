import React, { Component } from 'react';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      photos: [
        { url: "./img/one.jpg", caption: "Photo 1" },
        { url: "./img/two.jpg", caption: "Photo 2" },
        { url: "./img/three.jpg", caption: "Photo 3" },
        { url: "./img/logo-og.png", caption: "Photo 4" }
      ]
    };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  previousPhoto() {
    const lastIndex = this.state.photos.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;
    this.setState({
      currentIndex: index
    });
  }

  nextPhoto() {
    const lastIndex = this.state.photos.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: index
    });
  }

  render() {
    const { photos, currentIndex } = this.state;
    const currentPhoto = photos[currentIndex];

    return (
        <div>
          <img src={currentPhoto.url} alt={currentPhoto.caption} />
          <p>{currentPhoto.caption}</p>
          <button onClick={this.previousPhoto}>Previous</button>
          <button onClick={this.nextPhoto}>Next</button>
        </div>
    );
  }}

export default PhotoGallery