import { useState } from 'react';

export const useApiRequest = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const sendRequest = async (request) => {
    setLoading(true);
    setResponse(null);
    const startTime = Date.now();

    try {
      const headers = {};
      request.headers
        .filter(h => h.enabled && h.key)
        .forEach(h => headers[h.key] = h.value);

      const options = {
        method: request.method,
        headers
      };

      if (['POST', 'PUT', 'PATCH'].includes(request.method) && request.body) {
        options.body = request.body;
      }

      const res = await fetch(request.url, options);
      const duration = Date.now() - startTime;
      
      let data;
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        data = await res.text();
      }

      const responseData = {
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers.entries()),
        data,
        duration,
        timestamp: new Date().toISOString()
      };

      setResponse(responseData);
      setHistory([{
        id: Date.now().toString(),
        request: { ...request },
        response: responseData,
        timestamp: new Date().toISOString()
      }, ...history.slice(0, 19)]);

    } catch (error) {
      setResponse({
        error: true,
        message: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    response,
    loading,
    history,
    sendRequest
  };
};
