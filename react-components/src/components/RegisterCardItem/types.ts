export interface IRegisterCardItem {
  id: number;
  picture: string;
  name: string;
  surname: string;
  email: string;
  birthday: string;
  country: string;
  zipcode: string;
  gender: string;
  news: boolean;
}

export interface IProps {
  card: IRegisterCardItem;
}
