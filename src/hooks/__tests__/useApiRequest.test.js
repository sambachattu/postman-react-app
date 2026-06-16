import { renderHook, act } from '@testing-library/react';
import { useApiRequest } from '../useApiRequest';

describe('useApiRequest', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should handle fetch errors correctly', async () => {
    const mockError = new Error('Network error');
    global.fetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useApiRequest());

    const request = {
      method: 'GET',
      url: 'https://api.example.com/data',
      headers: []
    };

    await act(async () => {
      await result.current.sendRequest(request);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toEqual({
      error: true,
      message: 'Network error',
      duration: expect.any(Number),
      timestamp: expect.any(String)
    });
  });
});
