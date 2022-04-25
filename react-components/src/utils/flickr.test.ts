import { getDefaultPhotos, getPhotosByText, getDataWithURL } from './flickrApi';

describe('getDefaultPhotos tests', () => {
  test('test stat fail', async () => {
    /* const data = { stat: 'fail', message: 'bad request', photos: { photo: [] } };

    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(data);
              }),
          });
        })
    );
    const result = await getDefaultPhotos();
    expect(result).toEqual({ textError: 'Error from server: bad request', data: [] }); */
  });

  test('test there are no photos', async () => {
    /* const data = { stat: '200', message: '', photos: { photo: [] } };

    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(data);
              }),
          });
        })
    );
    const result = await getDefaultPhotos();
    expect(result).toEqual({ textError: 'No recent photos. Please enter a request.', data: [] }); */
  });

  test('test there are photos', async () => {
    /* const data = {
      stat: '200',
      message: '',
      photos: { photo: [{ id: '1', title: 'Photo1', url_l: 'https://test.com/1.jpg' }] },
    };

    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(data);
              }),
          });
        })
    );
    const result = await getDefaultPhotos();
    expect(result).toEqual({
      textError: '',
      data: [
        {
          id: '1',
          title: 'Photo1',
          url_l: 'https://test.com/1.jpg',
          url: 'https://test.com/1.jpg',
        },
      ],
    }); */
  });

  test('test error case', async () => {
    /* global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((_, reject) => {
          reject({ message: 'error 404' });
        })
    );

    const result = await getDefaultPhotos();
    expect(result).toEqual({
      textError: 'error 404',
      data: [],
    }); */
  });
});

//===============================
describe('getPhotosByText tests', () => {
  test('test stat fail', async () => {
    /* const data = { stat: 'fail', message: 'bad request', photos: { photo: [] } };

    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(data);
              }),
          });
        })
    );

    const resultByText = await getPhotosByText('sports');
    expect(resultByText).toEqual({ textError: 'Error from server: bad request', data: [] }); */
  });

  test('test there are no photos', async () => {
    /* const data = { stat: '200', message: '', photos: { photo: [] } };

    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(data);
              }),
          });
        })
    );
    const resultByText = await getPhotosByText('sports');
    expect(resultByText).toEqual({
      textError: 'Nothing found for your request',
      data: [],
    }); */
  });

  test('test there are photos', async () => {
    /* const data = {
      stat: '200',
      message: '',
      photos: { photo: [{ id: '1', title: 'Photo1', url_l: 'https://test.com/1.jpg' }] },
    };

    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(data);
              }),
          });
        })
    );
    const resultByText = await getPhotosByText('sports');
    expect(resultByText).toEqual({
      textError: '',
      data: [
        {
          id: '1',
          title: 'Photo1',
          url_l: 'https://test.com/1.jpg',
          url: 'https://test.com/1.jpg',
        },
      ],
    }); */
  });

  test('test error case', async () => {
    /* global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((_, reject) => {
          reject({ message: 'error 404' });
        })
    );

    const resultByText = await getPhotosByText('sports');
    expect(resultByText).toEqual({
      textError: 'error 404',
      data: [],
    }); */
  });
});

//===============================
describe('getDataWithURL tests', () => {
  test('check if there is not any url in data', () => {
    /* const data = [
      {
        id: '1',
        title: 'Photo1',
      },
    ];
    const result = getDataWithURL(data);

    expect(result).toEqual(data); */
  });
});
