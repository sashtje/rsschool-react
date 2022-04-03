import { Component } from 'react';

import Label from '../Label/Label';

import './EmailField.scss';

interface IProps {
  label: string;
  emailRef: React.RefObject<HTMLInputElement>;
  textErr: string;
  name: string;
  errorReset: (key: string) => void;
  checkSubmitBtn: () => void;
}

class EmailField extends Component<IProps> {
  handleChange = () => {
    const { textErr, name, errorReset, checkSubmitBtn } = this.props;

    if (textErr !== '') {
      errorReset(`${name}Err`);
    }

    checkSubmitBtn();
  };

  render() {
    return (
      <div className="emailfield">
        <Label>
          {this.props.label}
          <input
            ref={this.props.emailRef}
            className="emailfield__input"
            type="email"
            onChange={this.handleChange}
          />
        </Label>

        {this.props.textErr !== '' && (
          <div className="emailfield__validation">{this.props.textErr}</div>
        )}
      </div>
    );
  }
}

export default EmailField;
