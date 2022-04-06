import { Component } from 'react';

import Label from '../Label';

import './styles.scss';

import { IProps } from './types';

class TextField extends Component<IProps> {
  componentDidMount() {
    if (this.props.autofocus) {
      this.props.inputRef.current!.focus();
    }
  }

  handleChange = () => {
    const { textErr, name, errorReset, checkSubmitBtn } = this.props;

    if (textErr !== '') {
      errorReset(`${name}Err`);
    }

    checkSubmitBtn();
  };

  render() {
    return (
      <div className="textfield">
        <Label>
          {this.props.label}
          <input
            ref={this.props.inputRef}
            className="textfield__input"
            type="text"
            onChange={this.handleChange}
          />
        </Label>

        {this.props.textErr !== '' && (
          <div className="textfield__validation">{this.props.textErr}</div>
        )}
      </div>
    );
  }
}

export default TextField;
