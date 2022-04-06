export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
  autofocus?: boolean;
}
