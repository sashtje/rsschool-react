import { Component } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import './styles.scss';

import { IProps } from './types';

class RegisterCardItem extends Component<IProps> {
  render() {
    const { picture, name, surname, email, birthday, country, zipcode, gender, news } =
      this.props.card;

    return (
      <div className="registercard">
        <div className="registercard__pic" style={{ backgroundImage: `url("${picture}")` }}></div>

        {gender === 'F' ? (
          <div className="registercard__gender registercard__gender_is_female">
            <BsGenderFemale />
          </div>
        ) : (
          <div className="registercard__gender registercard__gender_is_male">
            <BsGenderMale />
          </div>
        )}

        {news && (
          <div className="registercard__news">
            <AiOutlineMail />
          </div>
        )}

        <div className="registercard__name">{`${name} ${surname}`}</div>
        <div className="registercard__email">{email}</div>
        <div className="registercard__birthday">{birthday}</div>
        <div className="registercard__address">{`${country}, ${zipcode}`}</div>
      </div>
    );
  }
}

export default RegisterCardItem;
