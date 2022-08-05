import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main', () => {
  it('renders children', async () => {
    render(<Main>Test child</Main>);
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });
});
