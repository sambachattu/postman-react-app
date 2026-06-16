import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RequestBuilder from './RequestBuilder';

describe('RequestBuilder', () => {
  const defaultProps = {
    request: {
      name: 'Test Request',
      method: 'GET',
      url: 'https://api.example.com',
      headers: [],
      body: '',
      bodyType: 'json'
    },
    onUpdateRequest: vi.fn(),
    onSendRequest: vi.fn(),
    loading: false
  };

  it('renders correctly with default GET request', () => {
    render(<RequestBuilder {...defaultProps} />);

    // Header tab should be present
    expect(screen.getByText('Headers')).toBeInTheDocument();

    // Body tab should NOT be present for GET
    expect(screen.queryByText('Body')).not.toBeInTheDocument();
  });

  it('shows Body tab for POST requests', () => {
    render(<RequestBuilder {...defaultProps} request={{ ...defaultProps.request, method: 'POST' }} />);

    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('shows Body tab for PUT requests', () => {
    render(<RequestBuilder {...defaultProps} request={{ ...defaultProps.request, method: 'PUT' }} />);

    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('shows Body tab for PATCH requests', () => {
    render(<RequestBuilder {...defaultProps} request={{ ...defaultProps.request, method: 'PATCH' }} />);

    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('does not show Body tab for DELETE requests', () => {
    render(<RequestBuilder {...defaultProps} request={{ ...defaultProps.request, method: 'DELETE' }} />);

    expect(screen.queryByText('Body')).not.toBeInTheDocument();
  });
});
