export default interface IProps {
  label: string;
  dateRef: React.RefObject<HTMLInputElement>;
  textErr: string;
  name: string;
  errorReset: (key: string) => void;
  checkSubmitBtn: () => void;
}