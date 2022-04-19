import { validationPicture } from '../../utils/validation';

import './styles.scss';

import { IProps } from './types';

const UploadPhoto = ({ textError, name, register }: IProps) => {
  return (
    <div className="uploadphoto">
      <input
        {...register(name, {
          validate: (value) => validationPicture(value as FileList),
        })}
        className="uploadphoto__input"
        type="file"
        data-testid="uploadphoto"
      />

      {textError && <div className="uploadphoto__validation">{textError}</div>}
    </div>
  );
};

export default UploadPhoto;
