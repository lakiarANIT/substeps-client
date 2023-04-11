import React, { useState } from 'react';

function Editor() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function handleImageInsert() {
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const img = `<img src="${dataUrl}" alt="image">`;
      const range = window.getSelection().getRangeAt(0);
      range.insertNode(new DOMParser().parseFromString(img, 'text/html').body.firstChild);
    };
    reader.readAsDataURL(image);
  }

  return (
    <div className="w-1/2 p-4 bg-white border border-gray-100 shadow-md">
    <input
      type="text"
      className="w-full p-2 mb-4 rounded-md text-2xl text-gray bg-white focus:outline-none"
      placeholder="Type title here"
      value={title}
      onChange={handleTitleChange}
    />
    <div className="p-2 mb-4 rounded-md bg-white">
      <textarea
        className="w-full h-64 bg-white focus:outline-none"
        placeholder="Type body here"
        value={body}
        onChange={handleBodyChange}
      ></textarea>
    </div>
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  </div>
  
      
  );
}

export default Editor;
