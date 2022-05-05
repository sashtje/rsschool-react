import { screen, render } from '@testing-library/react';

import Checkbox from '.';

test('Check render of Checkbox component', () => {
  const label = 'Test';
  const name = 'news';
  const register = jest.fn();

  render(<Checkbox label={label} register={register} name={name} />);

  const checkbox = screen.getByRole('checkbox', {
    name: label,
  });

  expect(checkbox).toBeInTheDocument();
});
