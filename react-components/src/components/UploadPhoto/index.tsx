import { Component } from 'react';

import './styles.scss';

import { IProps } from './types';

class UploadPhoto extends Component<IProps> {
  render() {
    const { pictureRef, textError, name, handleChangeInput } = this.props;

    return (
      <div className="uploadphoto">
        <input
          ref={pictureRef}
          className="uploadphoto__input"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={() => handleChangeInput(`${name}Error`, textError)}
          data-testid="uploadphoto"
        />

        {textError !== '' && <div className="uploadphoto__validation">{textError}</div>}
      </div>
    );
  }
}

export default UploadPhoto;
