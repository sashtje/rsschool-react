import { AiOutlineMail } from 'react-icons/ai';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import './styles.scss';

import { IRegisterCardItem } from './types';

const RegisterCardItem = ({
  card: { picture, name, surname, email, birthday, country, zipcode, gender, news },
}: {
  card: IRegisterCardItem;
}) => {
  return (
    <div className="registercard">
      <div className="registercard__pic" style={{ backgroundImage: `url("${picture}")` }}></div>

      {gender === 'F' ? (
        <div className="registercard__gender registercard__gender_is_female" data-testid="female">
          <BsGenderFemale />
        </div>
      ) : (
        <div className="registercard__gender registercard__gender_is_male" data-testid="male">
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
};

export default RegisterCardItem;
