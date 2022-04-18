import { Validate } from 'react-hook-form';
import { validationPicture } from '../../utils/validation';

import './styles.scss';

import { IProps } from './types';

const UploadPhoto = ({ textError, name, register }: IProps) => {
  return (
    <div className="uploadphoto">
      <input
        {...register(name, {
          validate: validationPicture as
            | Validate<string | number | boolean | FileList | ((index: number) => File | null)>
            | Record<
                string,
                Validate<string | number | boolean | FileList | ((index: number) => File | null)>
              >
            | undefined,
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
