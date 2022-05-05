import { IData } from '../pages/Main/types';

import { URLS } from '../model/const';

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
