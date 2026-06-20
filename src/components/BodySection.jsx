import React from 'react';
import './BodySection.css';

const BodySection = ({ body, bodyType, onUpdateBody, onUpdateBodyType }) => {
  return (
    <div className="body-section">
      <select
        className="body-type-select"
        aria-label="Body type"
        value={bodyType}
        onChange={(e) => onUpdateBodyType(e.target.value)}
      >
        <option value="json">JSON</option>
        <option value="text">Text</option>
        <option value="xml">XML</option>
      </select>
      <textarea
        className="body-textarea"
        aria-label="Request body"
        value={body}
        onChange={(e) => onUpdateBody(e.target.value)}
        placeholder={bodyType === 'json' ? '{\n  "key": "value"\n}' : 'Request body...'}
      />
    </div>
  );
};

export default BodySection;
