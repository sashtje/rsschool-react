import { createAsyncThunk } from '@reduxjs/toolkit';

import { getDataWithURL } from '../../utils/flickrApi';

import { IFetchDataParams } from './types';
import { IDataResponse } from '../../utils/types';

import { KEY } from '../../model/const';

export const fetchPhotos = createAsyncThunk(
  'main/fetchAll',
  async ({ search, sort, cardsPerPage, currentPage }: IFetchDataParams, thunkAPI) => {
    try {
      const searchText = search === '' ? 'nature' : search;

      const response = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&text=${searchText}&sort=${sort}&per_page=${cardsPerPage}&page=${currentPage}&extras=description%2C+date_upload%2C+date_taken%2C+owner_name%2C+last_update%2C+geo%2C+tags%2C+views%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1`
      );

      const dataResp: IDataResponse = await response.json();
      const { stat, message, photos } = dataResp;

      if (stat === 'fail') {
        throw new Error(`Error from server: ${message}`);
      } else if (!photos.photo.length) {
        throw new Error('Nothing found for your request');
      } else {
        return { data: getDataWithURL(photos.photo), totalPages: photos.pages.toString() };
      }
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
