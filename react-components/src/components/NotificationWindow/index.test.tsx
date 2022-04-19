import { screen, render } from '@testing-library/react';

import NotificationWindow from '.';

test('Check render of NotifictaionWindow', () => {
  render(<NotificationWindow message="The data was saved successfully" />);

  const notif = screen.getByText(/The data was saved successfully/i);

  expect(notif).toBeInTheDocument();
});
