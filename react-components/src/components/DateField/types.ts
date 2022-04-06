export default interface IProps {
  label: string;
  dateRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
