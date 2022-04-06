export interface IProps {
  label: string;
  options: string[];
  selectRef: React.RefObject<HTMLSelectElement>;
  textErr: string;
  name: string;
  errorReset: (key: string) => void;
  checkSubmitBtn: () => void;
}
