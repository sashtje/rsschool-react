import { Component } from 'react';

import './UploadPhoto.scss';

class UploadPhoto extends Component {
  render() {
    return (
      <div className="uploadphoto">
        <input className="uploadphoto__input" type="file" accept=".png, .jpg, .jpeg" />

        <div className="uploadphoto__validation">Error</div>
      </div>
    );
  }
}

export default UploadPhoto;
