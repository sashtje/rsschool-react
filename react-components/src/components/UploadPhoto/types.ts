export interface IProps {
  pictureRef: React.RefObject<HTMLInputElement>;
  textError: string;
  name: string;
  errorReset: (key: string) => void;
  checkSubmitBtn: () => void;
}
