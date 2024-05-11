import { render, screen } from '@testing-library/react';
import App from './App';

import { Reservations } from './components';
import { BrowserRouter } from 'react-router-dom';

test('Checking Time Status Section', () => {
  render( 
    <BrowserRouter>
  <Reservations />
    </BrowserRouter>
);

  const statusHeadaing = screen.getByText("Evening");

  expect(statusHeadaing).toBeInTheDocument();
});