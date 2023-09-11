import { render, screen } from '@testing-library/react';
import SpanMessage from '.';

describe('<SpanMessage />', () => {
  it('should render the heading', () => {
    const { container } = render(<SpanMessage />);

    expect(
      screen.getByRole('heading', { name: /SpanMessage/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
 
});
