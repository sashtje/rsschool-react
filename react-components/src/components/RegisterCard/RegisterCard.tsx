import { Component } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import './RegisterCard.scss';

interface IRegisterCard {
  id: number;
  pic: string;
  name: string;
  surname: string;
  email: string;
  birthday: string;
  country: string;
  zipcode: string;
  gender: string;
  news: boolean;
}

interface IProps {
  card: IRegisterCard;
}

class RegisterCard extends Component<IProps> {
  render() {
    const { pic, name, surname, email, birthday, country, zipcode, gender, news } = this.props.card;

    return (
      <div className="registercard">
        <div className="registercard__pic" style={{ backgroundImage: `url("${pic}")` }}></div>

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

export default RegisterCard;
