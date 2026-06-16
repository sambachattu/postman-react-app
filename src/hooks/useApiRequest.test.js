import { renderHook, act } from '@testing-library/react';
import { useApiRequest } from './useApiRequest';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('useApiRequest', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with correct default state', () => {
    const { result } = renderHook(() => useApiRequest());
    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBeNull();
    expect(result.current.history).toEqual([]);
  });

  it('should handle successful JSON request', async () => {
    const mockResponse = { id: 1, name: 'Test' };
    fetch.mockResolvedValueOnce({
      status: 200,
      statusText: 'OK',
      headers: {
        get: (name) => name === 'content-type' ? 'application/json' : null,
        entries: () => [['content-type', 'application/json']]
      },
      json: () => Promise.resolve(mockResponse)
    });

    const { result } = renderHook(() => useApiRequest());

    const requestPayload = {
      url: 'https://api.example.com/data',
      method: 'POST',
      headers: [
        { key: 'Authorization', value: 'Bearer token', enabled: true },
        { key: 'Ignored', value: 'ignored', enabled: false }
      ],
      body: JSON.stringify({ test: 'data' })
    };

    let promise;
    act(() => {
      promise = result.current.sendRequest(requestPayload);
    });

    // Loading should be true while resolving
    expect(result.current.loading).toBe(true);

    await act(async () => {
      await promise;
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toMatchObject({
      status: 200,
      statusText: 'OK',
      data: mockResponse
    });
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].request).toEqual(requestPayload);

    // Assert fetch arguments
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer token'
      },
      body: JSON.stringify({ test: 'data' })
    });
  });

  it('should handle successful Text request', async () => {
    const mockText = "Hello World";
    fetch.mockResolvedValueOnce({
      status: 200,
      statusText: 'OK',
      headers: {
        get: (name) => name === 'content-type' ? 'text/plain' : null,
        entries: () => [['content-type', 'text/plain']]
      },
      text: () => Promise.resolve(mockText)
    });

    const { result } = renderHook(() => useApiRequest());

    await act(async () => {
      await result.current.sendRequest({
        url: 'https://api.example.com/text',
        method: 'GET',
        headers: []
      });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toMatchObject({
      status: 200,
      statusText: 'OK',
      data: mockText
    });
  });

  it('should handle request errors (network/fetch failure)', async () => {
    fetch.mockRejectedValueOnce(new Error('Network response was not ok'));

    const { result } = renderHook(() => useApiRequest());

    await act(async () => {
      await result.current.sendRequest({
        url: 'https://api.example.com/fail',
        method: 'GET',
        headers: []
      });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toMatchObject({
      error: true,
      message: 'Network response was not ok'
    });
    expect(result.current.history).toHaveLength(0); // Assuming history doesn't save errors per implementation, verify this assumption.
  });
});
