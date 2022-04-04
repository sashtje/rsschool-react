import { screen, render } from '@testing-library/react';

import NotificationWindow from './NotificationWindow';

test('Check handleChange of DateField component with error', () => {
  render(<NotificationWindow />);

  const notif = screen.getByText(/The data was saved successfully/i);

  expect(notif).toBeInTheDocument();
});
