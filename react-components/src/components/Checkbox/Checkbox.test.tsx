import React from 'react';
import { screen, render } from '@testing-library/react';

import Checkbox from './Checkbox';

test('Check render of checkbox component', () => {
  const label = 'Test';
  const checkRef: React.RefObject<HTMLInputElement> = React.createRef();
  render(<Checkbox label={label} checkboxRef={checkRef} />);

  const checkbox = screen.getByRole('checkbox', {
    name: label,
  });

  expect(checkbox).toBeInTheDocument();
});
