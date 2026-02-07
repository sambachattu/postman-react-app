import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ requests, activeRequestId, onSelectRequest, onNewRequest, onDeleteRequest }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="new-request-btn" onClick={onNewRequest}>
          <Plus size={18} />
          New Request
        </button>
      </div>
      <div className="requests-list">
        {requests.map(request => (
          <div
            key={request.id}
            className={`request-item ${activeRequestId === request.id ? 'active' : ''}`}
            onClick={() => onSelectRequest(request.id)}
          >
            <div className="request-item-content">
              <div className="request-item-name">{request.name}</div>
              <div className="request-item-method">{request.method}</div>
            </div>
            {requests.length > 1 && (
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteRequest(request.id);
                }}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
