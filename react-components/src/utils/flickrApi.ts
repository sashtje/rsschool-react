import { IData, IPhotosData } from '../pages/Main/types';
import { IDataResponse } from './types';

import { KEY, URLS } from '../model/const';

export function getDataWithURL(data: IData[]): IData[] {
  data.forEach((item) => {
    for (let i = 0; i < URLS.length; i++) {
      if (item[URLS[i] as keyof IData] !== undefined) {
        item.url = item[URLS[i] as keyof IData] as string;
        break;
      }
    }
  });

  return data;
}

export async function getDefaultPhotos(sort: string, cardsPerPage: string, currentPage: string) {
  const photosData: IPhotosData = { textError: '', data: [], totalPages: '0' };

  try {
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&text=nature&sort=${sort}&per_page=${cardsPerPage}&page=${currentPage}&extras=description%2C+date_upload%2C+date_taken%2C+owner_name%2C+last_update%2C+geo%2C+tags%2C+views%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1`
    );

    const dataResp: IDataResponse = await response.json();
    const { stat, message, photos } = dataResp;

    if (stat === 'fail') {
      photosData.textError = `Error from server: ${message}`;
    } else if (!photos.photo.length) {
      photosData.textError = 'No recent photos. Please enter a request.';
    } else {
      photosData.data = getDataWithURL(photos.photo);
      photosData.totalPages = photos.total.toString();
    }
  } catch (e) {
    photosData.textError = (e as Error).message;
  }

  return photosData;
}

export async function getPhotosByText(
  search: string,
  sort: string,
  cardsPerPage: string,
  currentPage: string
) {
  const photosData: IPhotosData = { textError: '', data: [], totalPages: '0' };

  try {
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&text=${search}&sort=${sort}&per_page=${cardsPerPage}&page=${currentPage}&extras=description%2C+date_upload%2C+date_taken%2C+owner_name%2C+last_update%2C+geo%2C+tags%2C+views%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1`
    );

    const dataResp: IDataResponse = await response.json();
    const { stat, message, photos } = dataResp;

    if (stat === 'fail') {
      photosData.textError = `Error from server: ${message}`;
    } else if (!photos.photo.length) {
      photosData.textError = 'Nothing found for your request';
    } else {
      photosData.data = getDataWithURL(photos.photo);
      photosData.totalPages = photos.total.toString();
    }
  } catch (e) {
    photosData.textError = (e as Error).message;
  }

  return photosData;
}
