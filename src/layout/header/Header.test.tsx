import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Header from './Header';

describe('Header', () => {
  it('renders products and cart link', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});
