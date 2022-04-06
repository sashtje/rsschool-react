import { screen, render } from '@testing-library/react';

import NotificationWindow from '.';

test('Check render of NotifictaionWindow', () => {
  render(<NotificationWindow />);

  const notif = screen.getByText(/The data was saved successfully/i);

  expect(notif).toBeInTheDocument();
});
