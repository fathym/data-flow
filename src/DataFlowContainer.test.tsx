import React from 'react';
import { render, screen } from '@testing-library/react';
import DataFlowContainer from './DataFlowContainer';

test('Renders Data Flow Canvas', () => {
  render(<DataFlowContainer />);

  const linkElement = screen.getByAltText(/logo/i);
  
  expect(linkElement).toBeInTheDocument();
});
