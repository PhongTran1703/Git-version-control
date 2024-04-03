import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Astronomy Picture of the Day', async () => {
  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        title: 'Test Title',
        date: '2023-11-09',
        explanation: 'Test Explanation',
        url: 'test-image.jpg',
      }),
    })
  );

  render(<App />);

  // Wait for the fetch to complete and re-render the component
  await screen.findByText('Test Title');

  expect(screen.getByText('Astronomy Picture of the Day')).toBeInTheDocument();
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Date: 2023-11-09')).toBeInTheDocument();
  expect(screen.getByText('Test Explanation')).toBeInTheDocument();
});
