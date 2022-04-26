export interface IProps {
  showNotification: () => void;
}

export interface IFormData {
  name: string;
  surname: string;
  email: string;
  birthday: string;
  country: string;
  zipcode: string;
  gender: boolean;
  picture: FileList;
  news: boolean;
}

export type Name =
  | 'name'
  | 'surname'
  | 'email'
  | 'birthday'
  | 'country'
  | 'zipcode'
  | 'gender'
  | 'picture'
  | 'news'
  | 'picture.length'
  | 'picture.item';
