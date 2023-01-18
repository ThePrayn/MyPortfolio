import React, { useState } from 'react';

function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photos] = useState([
      { url: "./img/one.jpg", caption: "Photo 1" },
      { url: "./img/two.jpg", caption: "Photo 2" },
      { url: "./img/three.jpg", caption: "Photo 3" },
      { url: "./img/logo-og.png", caption: "Photo 4" }
  ]);

  function previousPhoto() {
      const lastIndex = photos.length - 1;
      const shouldResetIndex = currentIndex === 0;
      const index =  shouldResetIndex ? lastIndex : currentIndex - 1;
      setCurrentIndex(index);
  }

  function nextPhoto() {
      const lastIndex = photos.length - 1;
      const shouldResetIndex = currentIndex === lastIndex;
      const index =  shouldResetIndex ? 0 : currentIndex + 1;
      setCurrentIndex(index);
  }

  const currentPhoto = photos[currentIndex];

  return (
      <div>
          <img src={currentPhoto.url} alt={currentPhoto.caption} />
          <p>{currentPhoto.caption}</p>
          <button onClick={previousPhoto}>Previous</button>
          <button onClick={nextPhoto}>Next</button>
      </div>
  );
}
export default PhotoGallery