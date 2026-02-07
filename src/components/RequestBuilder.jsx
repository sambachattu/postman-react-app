import React, { useState } from 'react';
import { Send } from 'lucide-react';
import HeadersSection from './HeadersSection';
import BodySection from './BodySection';
import './RequestBuilder.css';

const RequestBuilder = ({ request, onUpdateRequest, onSendRequest, loading }) => {
  const [activeTab, setActiveTab] = useState('headers');

  const showBodyTab = ['POST', 'PUT', 'PATCH'].includes(request.method);

  return (
    <div className="request-builder">
      <input
        type="text"
        className="request-name-input"
        value={request.name}
        onChange={(e) => onUpdateRequest({ name: e.target.value })}
        placeholder="Request Name"
      />

      <div className="url-bar">
        <select
          className="method-select"
          value={request.method}
          onChange={(e) => onUpdateRequest({ method: e.target.value })}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>PATCH</option>
          <option>DELETE</option>
          <option>HEAD</option>
          <option>OPTIONS</option>
        </select>
        <input
          type="text"
          className="url-input"
          value={request.url}
          onChange={(e) => onUpdateRequest({ url: e.target.value })}
          placeholder="https://api.example.com/endpoint"
        />
        <button
          className="send-btn"
          onClick={onSendRequest}
          disabled={loading || !request.url}
        >
          {loading ? <span className="spinner" /> : <Send size={18} />}
          Send
        </button>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'headers' ? 'active' : ''}`}
          onClick={() => setActiveTab('headers')}
        >
          Headers
        </button>
        {showBodyTab && (
          <button 
            className={`tab ${activeTab === 'body' ? 'active' : ''}`}
            onClick={() => setActiveTab('body')}
          >
            Body
          </button>
        )}
      </div>

      {activeTab === 'headers' && (
        <HeadersSection
          headers={request.headers}
          onUpdateHeaders={(headers) => onUpdateRequest({ headers })}
        />
      )}

      {activeTab === 'body' && showBodyTab && (
        <BodySection
          body={request.body}
          bodyType={request.bodyType}
          onUpdateBody={(body) => onUpdateRequest({ body })}
          onUpdateBodyType={(bodyType) => onUpdateRequest({ bodyType })}
        />
      )}
    </div>
  );
};

export default RequestBuilder;
