import { Component } from 'react';

import './styles.scss';

import { IProps } from './types';

class UploadPhoto extends Component<IProps> {
  handleChange = () => {
    const { textErr, name, errorReset, checkSubmitBtn } = this.props;

    if (textErr !== '') {
      errorReset(`${name}Err`);
    }

    checkSubmitBtn();
  };

  render() {
    return (
      <div className="uploadphoto">
        <input
          ref={this.props.picRef}
          className="uploadphoto__input"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={this.handleChange}
          data-testid="uploadphoto"
        />

        {this.props.textErr !== '' && (
          <div className="uploadphoto__validation">{this.props.textErr}</div>
        )}
      </div>
    );
  }
}

export default UploadPhoto;
