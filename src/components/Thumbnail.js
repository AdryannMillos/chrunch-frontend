import React from 'react';

function Thumbnail({ template, isActive, onClick }) {
  return (
    <a href="#" onClick={onClick} className={isActive ? 'active' : ''} title={template.id}>
      <img
        src={`http://localhost:3001/images/thumbnails/${template.thumbnail}`}
        alt={template.thumbnail}
        width="145"
        height="121"
      />
      <span>{template.id}</span>
    </a>
  );
}

export default Thumbnail;
