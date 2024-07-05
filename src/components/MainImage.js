import React from 'react';

function MainImage({ template }) {
  return (
    <div id="large">
      <div className="group">
        <img
          src={`http://localhost:3001/images/large/${template.image}`}
          alt={template.description}
          width="430"
          height="360"
        />
        <div className="details">
          <p><strong>Title</strong> {template.title}</p>
          <p><strong>Description</strong> {template.description}</p>
          <p><strong>Cost</strong> ${template.cost}</p>
          <p><strong>ID #</strong> {template.id}</p>
          <p><strong>Thumbnail File</strong> {template.thumbnail}</p>
          <p><strong>Large Image File</strong> {template.image}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
