import { render, screen } from '@testing-library/react';
import CenterOperation from './CenterOperation';

describe('<CenterOperation />', () => {
  it('should render the heading', () => {
    const { container } = render(<CenterOperation />);

    expect(
      screen.getByRole('heading', { name: /CenterOperation/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
