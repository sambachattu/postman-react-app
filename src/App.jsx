import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RequestBuilder from './components/RequestBuilder';
import ResponseViewer from './components/ResponseViewer';
import { useApiRequest } from './hooks/useApiRequest';
import './styles/App.css';

function App() {
  const [requests, setRequests] = useState([
    {
      id: '1',
      name: 'Sample GET Request',
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      headers: [{ key: 'Content-Type', value: 'application/json', enabled: true }],
      body: '',
      bodyType: 'json'
    }
  ]);
  const [activeRequestId, setActiveRequestId] = useState('1');
  const { response, loading, sendRequest } = useApiRequest();

  const activeRequest = requests.find(r => r.id === activeRequestId) || requests[0];

  const updateRequest = (updates) => {
    setRequests(requests.map(r => 
      r.id === activeRequestId ? { ...r, ...updates } : r
    ));
  };

  const createNewRequest = () => {
    const newRequest = {
      id: Date.now().toString(),
      name: 'New Request',
      method: 'GET',
      url: '',
      headers: [{ key: 'Content-Type', value: 'application/json', enabled: true }],
      body: '',
      bodyType: 'json'
    };
    setRequests([...requests, newRequest]);
    setActiveRequestId(newRequest.id);
  };

  const deleteRequest = (id) => {
    if (requests.length === 1) return;
    const newRequests = requests.filter(r => r.id !== id);
    setRequests(newRequests);
    if (activeRequestId === id) {
      setActiveRequestId(newRequests[0].id);
    }
  };

  const handleSendRequest = () => {
    sendRequest(activeRequest);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar
          requests={requests}
          activeRequestId={activeRequestId}
          onSelectRequest={setActiveRequestId}
          onNewRequest={createNewRequest}
          onDeleteRequest={deleteRequest}
        />
        <div className="content">
          <RequestBuilder
            request={activeRequest}
            onUpdateRequest={updateRequest}
            onSendRequest={handleSendRequest}
            loading={loading}
          />
          <ResponseViewer response={response} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
