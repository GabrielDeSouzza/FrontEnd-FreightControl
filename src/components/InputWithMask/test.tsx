import { render, screen } from '@testing-library/react';
import Input from './InputWithMask';

describe('<Input />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Input label={'test'} placeholder={'dsad'} name={'sad'} type={'text'} />
    );

    expect(screen.getByRole('input', { name: /Input/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
