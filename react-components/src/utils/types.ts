import { IData } from '../pages/Main/types';

export interface IDataResponse {
  stat: string;
  message: string;
  photos: { photo: IData[]; pages: number };
}
