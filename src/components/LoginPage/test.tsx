import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import React from 'react';

describe('<LoginPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<LoginPage />);

    expect(
      screen.getByRole('heading', { name: /LoginPage/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
 
});
