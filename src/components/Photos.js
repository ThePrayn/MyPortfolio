import React, { useState } from 'react';

function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photos] = useState([
      { url: "http://sun9-78.userapi.com/impg/nbUKhYxc685xhKUpLC9FJbNkGZQHZWXwzLRnkQ/d-8SGjNCY4E.jpg?size=479x600&quality=96&sign=fa37f8b91a2a41408fccef2d4d7c9df4&type=album", caption: "Photo 1" },
      { url: "https://58.img.avito.st/image/1/1.e6hNYra610F7yxVENx9s8aTB0UX5Qd-D_MHTSfHJ1Q.sTduRpshazSjpEODWtryh30hgbe-skNdDpRxIe24p9s", caption: "Photo 2" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooWOAXFSq2DrYX7FBxwCPIhfN9NWPDqQOow&usqp=CAU", caption: "Photo 3" },
      { url: "https://anime-fans.ru/wp-content/uploads/2021/05/Topovye-anime-avatarki-dlya-malchikov-skachat_24.jpg", caption: "Photo 4" }
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
          <img className='photo' src={currentPhoto.url} alt={currentPhoto.caption} />
          <p>{currentPhoto.caption}</p>
          <button onClick={previousPhoto}>Назад</button>
          <button onClick={nextPhoto}>Вперёд</button>
      </div>
  );
}
export default PhotoGallery