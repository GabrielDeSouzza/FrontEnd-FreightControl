import { render, screen } from '@testing-library/react';
import Motorista from './Driver';

describe('<Motorista />', () => {
  it('should render the heading', () => {
    const { container } = render(<Motorista />);

    expect(
      screen.getByRole('heading', { name: /Motorista/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
