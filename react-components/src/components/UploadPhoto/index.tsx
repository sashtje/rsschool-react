import { Component } from 'react';

import './styles.scss';

import { IProps } from './types';

class UploadPhoto extends Component<IProps> {
  handleChange = () => {
    const { textError, name, errorReset, checkSubmitBtn } = this.props;

    if (textError !== '') {
      errorReset(`${name}Error`);
    }

    checkSubmitBtn();
  };

  render() {
    const { pictureRef, textError } = this.props;

    return (
      <div className="uploadphoto">
        <input
          ref={pictureRef}
          className="uploadphoto__input"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={this.handleChange}
          data-testid="uploadphoto"
        />

        {textError !== '' && <div className="uploadphoto__validation">{textError}</div>}
      </div>
    );
  }
}

export default UploadPhoto;
