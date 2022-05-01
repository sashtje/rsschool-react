import { useState } from 'react';

import Form from '../../components/Form';
import RegisterCardList from '../../components/RegisterCardList';
import NotificationWindow from '../../components/NotificationWindow';

import { useAppSelector } from '../../hooks/redux';

import './styles.scss';

const FormPage = () => {
  const { cards } = useAppSelector((state) => state.formReducer);

  const [isShowNotification, setIsShowNotification] = useState(false);

  const showNotification = () => {
    setIsShowNotification(true);

    setTimeout(() => {
      setIsShowNotification(false);
    }, 3000);
  };

  return (
    <main className="form-page">
      <Form showNotification={showNotification} />

      <RegisterCardList cards={cards} className="form-page__register-cards" />

      {isShowNotification && <NotificationWindow message="The data was saved successfully!" />}
    </main>
  );
};

export default FormPage;
