import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('renders with the current year', async () => {
    render(<Footer />);
    const node = screen.queryByText(`${new Date().getFullYear()}`);
    expect(node).toBeInTheDocument();
  });
});
