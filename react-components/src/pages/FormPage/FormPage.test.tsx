import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';
import FormPage from './FormPage';

import { renderWithRouter } from '../../testAPI/testapi';

test('Navigation Test for Router', () => {
  renderWithRouter(<FormPage />);
});
