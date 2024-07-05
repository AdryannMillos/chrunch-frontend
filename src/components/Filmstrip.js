// src/components/Filmstrip.js
import React from 'react';
import Thumbnail from './Thumbnail';

function Filmstrip({ templates, currentTemplate, startIndex, thumbnailsToShow, onThumbnailClick, onNext, onPrevious }) {
  return (
    <div className="thumbnails">
      <div className="group">
        <button className={`previous ${startIndex === 0 ? 'disabled' : ''}`} onClick={onPrevious} disabled={startIndex === 0}>
          Previous
        </button>
        {templates.slice(startIndex, startIndex + thumbnailsToShow).map(template => (
          <Thumbnail
            key={template.id}
            template={template}
            isActive={currentTemplate && currentTemplate.id === template.id}
            onClick={() => onThumbnailClick(template)}
          />
        ))}
        <button className={`next ${startIndex + thumbnailsToShow >= templates.length ? 'disabled' : ''}`} onClick={onNext} disabled={startIndex + thumbnailsToShow >= templates.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Filmstrip;
