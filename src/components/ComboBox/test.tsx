import { render, screen } from '@testing-library/react';
import ComboBox from '.';

describe('<ComboBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<ComboBox />);

    expect(
      screen.getByRole('heading', { name: /ComboBox/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
 
});
