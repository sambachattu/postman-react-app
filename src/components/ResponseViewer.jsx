import React from 'react';
import { Copy, Download, Clock, CheckCircle2, XCircle, AlertCircle, Send } from 'lucide-react';
import './ResponseViewer.css';

const ResponseViewer = ({ response, loading }) => {
  const copyResponse = () => {
    if (response && !response.error) {
      navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
    }
  };

  const downloadResponse = () => {
    if (response && !response.error) {
      const blob = new Blob([JSON.stringify(response.data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `response-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  if (!response && !loading) {
    return (
      <div className="response-section">
        <div className="empty-state">
          <Send size={48} className="empty-state-icon" />
          <div>Send a request to see the response</div>
        </div>
      </div>
    );
  }

  return (
    <div className="response-section">
      <div className="response-header">
        <div className="response-title">
          Response
          {response && !response.error && (
            <span className={`status-badge ${
              response.status >= 200 && response.status < 300 ? 'success' :
              response.status >= 400 ? 'error' : 'warning'
            }`}>
              {response.status >= 200 && response.status < 300 ? (
                <CheckCircle2 size={14} />
              ) : response.status >= 400 ? (
                <XCircle size={14} />
              ) : (
                <AlertCircle size={14} />
              )}
              {response.status} {response.statusText}
            </span>
          )}
          {response && response.error && (
            <span className="status-badge error">
              <XCircle size={14} />
              Error
            </span>
          )}
        </div>
        <div className="response-actions">
          {response && !response.error && (
            <>
              <button className="icon-btn" onClick={copyResponse} title="Copy">
                <Copy size={18} />
              </button>
              <button className="icon-btn" onClick={downloadResponse} title="Download">
                <Download size={18} />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="response-body">
        {response && (
          <>
            <div className="response-meta">
              <div className="meta-item">
                <Clock size={16} />
                {response.duration}ms
              </div>
              {!response.error && (
                <div className="meta-item">
                  Size: {new Blob([JSON.stringify(response.data)]).size} bytes
                </div>
              )}
            </div>
            <pre className="response-content">
              {response.error 
                ? response.message 
                : JSON.stringify(response.data, null, 2)
              }
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

export default ResponseViewer;
