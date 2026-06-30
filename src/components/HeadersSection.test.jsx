import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeadersSection from './HeadersSection';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('HeadersSection', () => {
  const mockOnUpdateHeaders = vi.fn();
  const defaultHeaders = [
    { key: 'Accept', value: 'application/json', enabled: true },
    { key: 'Authorization', value: 'Bearer token123', enabled: false },
  ];

  beforeEach(() => {
    mockOnUpdateHeaders.mockClear();
  });

  it('renders correctly with given headers', () => {
    render(<HeadersSection headers={defaultHeaders} onUpdateHeaders={mockOnUpdateHeaders} />);

    expect(screen.getByDisplayValue('Accept')).toBeInTheDocument();
    expect(screen.getByDisplayValue('application/json')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Authorization')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Bearer token123')).toBeInTheDocument();

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
  });

  it('calls onUpdateHeaders with a new header when "+ Add Header" is clicked', async () => {
    render(<HeadersSection headers={defaultHeaders} onUpdateHeaders={mockOnUpdateHeaders} />);

    const addButton = screen.getByText('+ Add Header');
    await userEvent.click(addButton);

    expect(mockOnUpdateHeaders).toHaveBeenCalledTimes(1);
    expect(mockOnUpdateHeaders).toHaveBeenCalledWith([
      ...defaultHeaders,
      { key: '', value: '', enabled: true }
    ]);
  });

  it('calls onUpdateHeaders when a header key is updated', async () => {
    render(<HeadersSection headers={defaultHeaders} onUpdateHeaders={mockOnUpdateHeaders} />);

    const keyInput = screen.getByDisplayValue('Accept');
    await userEvent.type(keyInput, '1');

    expect(mockOnUpdateHeaders).toHaveBeenCalled();
    // Since userEvent.type triggers multiple events, we just check the last call
    const lastCallArg = mockOnUpdateHeaders.mock.lastCall[0];
    expect(lastCallArg[0].key).toBe('Accept1');
    expect(lastCallArg[0].value).toBe('application/json');
  });

  it('calls onUpdateHeaders when a header value is updated', async () => {
    render(<HeadersSection headers={defaultHeaders} onUpdateHeaders={mockOnUpdateHeaders} />);

    const valueInput = screen.getByDisplayValue('application/json');
    await userEvent.type(valueInput, 'x');

    expect(mockOnUpdateHeaders).toHaveBeenCalled();
    const lastCallArg = mockOnUpdateHeaders.mock.lastCall[0];
    expect(lastCallArg[0].value).toBe('application/jsonx');
  });

  it('calls onUpdateHeaders when a header checkbox is toggled', async () => {
    render(<HeadersSection headers={defaultHeaders} onUpdateHeaders={mockOnUpdateHeaders} />);

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[0]); // Uncheck the first one

    expect(mockOnUpdateHeaders).toHaveBeenCalledTimes(1);
    expect(mockOnUpdateHeaders).toHaveBeenCalledWith([
      { key: 'Accept', value: 'application/json', enabled: false },
      { key: 'Authorization', value: 'Bearer token123', enabled: false }
    ]);
  });

  it('calls onUpdateHeaders without the removed header when the trash button is clicked', async () => {
    render(<HeadersSection headers={defaultHeaders} onUpdateHeaders={mockOnUpdateHeaders} />);

    const deleteButtons = screen.getAllByRole('button', { name: 'Remove header' });
    // The last button is '+ Add Header'. The ones before are the trash icons.
    await userEvent.click(deleteButtons[0]);

    expect(mockOnUpdateHeaders).toHaveBeenCalledTimes(1);
    expect(mockOnUpdateHeaders).toHaveBeenCalledWith([
      { key: 'Authorization', value: 'Bearer token123', enabled: false }
    ]);
  });
});
