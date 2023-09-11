import { render, screen } from '@testing-library/react';
import SpanError from './SpanError';

describe('<SpanError />', () => {
  it('should render the heading', () => {
    const { container } = render(<SpanError />);

    expect(
      screen.getByRole('heading', { name: /SpanError/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
