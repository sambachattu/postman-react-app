import React from 'react';
import { Trash2 } from 'lucide-react';
import './HeadersSection.css';

const HeadersSection = ({ headers, onUpdateHeaders }) => {
  const addHeader = () => {
    onUpdateHeaders([...headers, { key: '', value: '', enabled: true }]);
  };

  const updateHeader = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index] = { ...newHeaders[index], [field]: value };
    onUpdateHeaders(newHeaders);
  };

  const removeHeader = (index) => {
    onUpdateHeaders(headers.filter((_, i) => i !== index));
  };

  return (
    <div className="headers-section">
      {headers.map((header, index) => (
        <div key={index} className="header-row">
          <input
            type="checkbox"
            className="checkbox"
            checked={header.enabled}
            onChange={(e) => updateHeader(index, 'enabled', e.target.checked)}
          />
          <input
            type="text"
            className="header-input"
            placeholder="Key"
            value={header.key}
            onChange={(e) => updateHeader(index, 'key', e.target.value)}
          />
          <input
            type="text"
            className="header-input"
            placeholder="Value"
            value={header.value}
            onChange={(e) => updateHeader(index, 'value', e.target.value)}
          />
          <button className="icon-btn" onClick={() => removeHeader(index)}>
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button className="add-header-btn" onClick={addHeader}>
        + Add Header
      </button>
    </div>
  );
};

export default HeadersSection;
