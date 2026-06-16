import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ResponseViewer from './ResponseViewer';

describe('ResponseViewer', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('renders empty state when no response and not loading', () => {
    render(<ResponseViewer response={null} loading={false} />);
    expect(screen.getByText('Send a request to see the response')).toBeInTheDocument();
  });

  it('does not render empty state when loading', () => {
    const { container } = render(<ResponseViewer response={null} loading={true} />);
    expect(screen.queryByText('Send a request to see the response')).not.toBeInTheDocument();
  });

  it('renders successful response correctly', () => {
    const mockResponse = {
      status: 200,
      statusText: 'OK',
      duration: 150,
      data: { message: 'Success' },
    };

    render(<ResponseViewer response={mockResponse} loading={false} />);

    // Check status
    expect(screen.getByText('200 OK')).toBeInTheDocument();

    // Check duration
    expect(screen.getByText('150ms')).toBeInTheDocument();

    // Check size
    expect(screen.getByText(/Size: \d+ bytes/)).toBeInTheDocument();

    // Check content
    const preElement = screen.getByText(/Success/);
    expect(preElement.textContent).toContain('{\n  "message": "Success"\n}');
  });

  it('renders error status response correctly', () => {
    const mockResponse = {
      status: 404,
      statusText: 'Not Found',
      duration: 50,
      data: { error: 'Resource not found' },
    };

    render(<ResponseViewer response={mockResponse} loading={false} />);

    // Check status
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();

    // Status should have error class
    expect(screen.getByText('404 Not Found').closest('span')).toHaveClass('error');

    // Content should still be formatted
    expect(screen.getByText(/Resource not found/).textContent).toContain('{\n  "error": "Resource not found"\n}');
  });

  it('renders general error response correctly', () => {
    const mockResponse = {
      error: true,
      message: 'Network Error',
    };

    render(<ResponseViewer response={mockResponse} loading={false} />);

    // Check error status badge
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Error').closest('span')).toHaveClass('error');

    // Check error message content
    expect(screen.getByText('Network Error')).toBeInTheDocument();

    // Copy and download buttons should not be present
    expect(screen.queryByTitle('Copy')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Download')).not.toBeInTheDocument();
  });

  it('handles copy response functionality', () => {
    const mockResponse = {
      status: 200,
      data: { id: 1 },
    };

    const writeTextMock = vi.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<ResponseViewer response={mockResponse} loading={false} />);

    const copyBtn = screen.getByTitle('Copy');
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith('{\n  "id": 1\n}');
  });

  it('handles download response functionality', () => {
    const mockResponse = {
      status: 200,
      data: { id: 1 },
    };

    const createObjectURLMock = vi.fn(() => 'blob:http://localhost/mock-url');
    const revokeObjectURLMock = vi.fn();
    global.URL.createObjectURL = createObjectURLMock;
    global.URL.revokeObjectURL = revokeObjectURLMock;

    const clickMock = vi.fn();
    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = vi.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'a') {
        return {
          click: clickMock,
          href: '',
          download: ''
        };
      }
      return originalCreateElement(tagName);
    });

    render(<ResponseViewer response={mockResponse} loading={false} />);

    const downloadBtn = screen.getByTitle('Download');
    fireEvent.click(downloadBtn);

    expect(createObjectURLMock).toHaveBeenCalled();
    expect(clickMock).toHaveBeenCalled();
    expect(revokeObjectURLMock).toHaveBeenCalledWith('blob:http://localhost/mock-url');

    createElementSpy.mockRestore();
  });
});
