export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  textErr: string;
  name: string;
  errorReset: (key: string) => void;
  checkSubmitBtn: () => void;
  autofocus?: boolean;
}
