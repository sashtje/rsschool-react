export interface IRegisterCardItem {
  id: number;
  pic: string;
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
