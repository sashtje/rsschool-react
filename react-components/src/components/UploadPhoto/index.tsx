import './styles.scss';

import { IProps } from './types';

const UploadPhoto = ({ pictureRef, textError, name, handleChangeInput }: IProps) => {
  return (
    <div className="uploadphoto">
      <input
        ref={pictureRef}
        className="uploadphoto__input"
        type="file"
        onChange={() => handleChangeInput(`${name}Error`, textError)}
        data-testid="uploadphoto"
      />

      {textError !== '' && <div className="uploadphoto__validation">{textError}</div>}
    </div>
  );
};

export default UploadPhoto;
