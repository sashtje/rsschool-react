export interface IProps {
  search: string;
  changeSearch: (searchStr: string, loadData?: boolean) => void;
}
