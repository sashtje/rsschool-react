import { screen, render } from '@testing-library/react';

import RegisterCards from './RegisterCards';

test('Check render of RegisterCards component with empty array and without className', () => {
  render(<RegisterCards cards={[]} />);

  const containerCards = screen.getByTestId('regcards-container');

  expect(containerCards).toBeInTheDocument();
  expect(containerCards).toHaveClass('registercards');
  expect(containerCards).toBeEmptyDOMElement();
});

test('Check render of RegisterCards component with cards array and with className', () => {
  render(
    <RegisterCards
      cards={[
        {
          id: 1,
          pic: './img/photo_1.png',
          name: 'Name',
          surname: 'Surname',
          email: 'Email',
          birthday: '21.03.1905',
          country: 'Algeria',
          zipcode: '12345',
          gender: 'F',
          news: true,
        },
        {
          id: new Date().getTime(),
          pic: './img/photo_2.png',
          name: 'Name',
          surname: 'Surname',
          email: 'Email',
          birthday: '21.03.1905',
          country: 'Algeria',
          zipcode: '12345',
          gender: 'M',
          news: false,
        },
      ]}
      className="test"
    />
  );

  const containerCards = screen.getByTestId('regcards-container');

  expect(containerCards).toBeInTheDocument();
  expect(containerCards).toHaveClass('registercards test');
  expect(containerCards).not.toBeEmptyDOMElement();
});
