export interface IProps {
  label: string;
  options: string[];
  selectRef: React.RefObject<HTMLSelectElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
