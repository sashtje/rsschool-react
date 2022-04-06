export interface IProps {
  pictureRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  handleChangeInput: (nameError: string, textError: string) => void;
}
