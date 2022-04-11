import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ModalWindow from './index';

describe('tests for ModalWindow', () => {
  test('test render ModalWindow', () => {
    const closeWindow = jest.fn();
    const card = {
      id: '1',
      title: 'Sports',
      description: { _content: 'About sport and different activity' },
      ownername: 'John Doe',
      datetaken: '2022-04-03',
      dateupload: new Date('2000-05-06').getTime().toString(),
      lastupdate: new Date('2022-05-10').getTime().toString(),
      views: '100',
      tags: 'sport, swimming pool, water',
      latitude: '15',
      longitude: '20',
      url: '',
    };

    render(<ModalWindow closeWindow={closeWindow} card={card} />);

    const modalWindow = screen.getByTestId('modal-window');
    expect(modalWindow).toBeInTheDocument();

    const img = screen.getByAltText('flickr photo sport, swimming pool, water');
    expect(img).toBeInTheDocument();

    const title = screen.getByText(/Sports/i);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/About sport and different activity/i);
    expect(description).toBeInTheDocument();

    const datetaken = screen.getByText(/Date taken:/i);
    expect(datetaken).toBeInTheDocument();

    const dateupload = screen.getByText(/Date upload:/i);
    expect(dateupload).toBeInTheDocument();

    const lastupdate = screen.getByText(/Last update:/i);
    expect(lastupdate).toBeInTheDocument();
  });

  test('test render ModalWindow', () => {
    const closeWindow = jest.fn();
    const card = {
      id: '1',
      title: 'Sports',
      description: { _content: 'About sport and different activity' },
      ownername: 'John Doe',
      datetaken: '20220403',
      dateupload: '',
      lastupdate: '',
      views: '100',
      tags: 'sport, swimming pool, water',
      latitude: '15',
      longitude: '20',
      url: '',
    };

    render(<ModalWindow closeWindow={closeWindow} card={card} />);

    const modalWindow = screen.getByTestId('modal-window');
    expect(modalWindow).toBeInTheDocument();

    const img = screen.getByAltText('flickr photo sport, swimming pool, water');
    expect(img).toBeInTheDocument();

    const title = screen.getByText(/Sports/i);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/About sport and different activity/i);
    expect(description).toBeInTheDocument();

    const datetaken = screen.getByText(/20220403/i);
    expect(datetaken).toBeInTheDocument();

    const dateupload = screen.queryByText(/Date upload:/i);
    expect(dateupload).not.toBeInTheDocument();

    const lastupdate = screen.queryByText(/Last update:/i);
    expect(lastupdate).not.toBeInTheDocument();
  });

  test('test render ModalWindow', () => {
    const closeWindow = jest.fn();
    const card = {
      id: '1',
      title: 'Sports',
      description: { _content: 'About sport and different activity' },
      ownername: 'John Doe',
      datetaken: '20220403',
      dateupload: '',
      lastupdate: '',
      views: '100',
      tags: 'sport, swimming pool, water',
      latitude: '15',
      longitude: '20',
      url: '',
    };

    render(<ModalWindow closeWindow={closeWindow} card={card} />);

    const modalWindow = screen.getByTestId('modal-window');
    expect(modalWindow).toBeInTheDocument();

    const content = screen.getByTestId('modal-window-content');
    expect(content).toBeInTheDocument();

    userEvent.click(content);
    expect(modalWindow).toBeInTheDocument();

    userEvent.click(modalWindow);
  });
});
