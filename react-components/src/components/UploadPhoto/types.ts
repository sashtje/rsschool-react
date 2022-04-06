export interface IProps {
  picRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  errorReset: (key: string) => void;
  checkSubmitBtn: () => void;
}
