import { useContext, useState } from 'react';

import Form from '../../components/Form';
import RegisterCardList from '../../components/RegisterCardList';
import NotificationWindow from '../../components/NotificationWindow';
import { AppContext } from '../../context';

import './styles.scss';

const FormPage = () => {
  const { state } = useContext(AppContext);
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

      <RegisterCardList cards={state.form.cards} className="form-page__register-cards" />

      {isShowNotification && <NotificationWindow message="The data was saved successfully!" />}
    </main>
  );
};

export default FormPage;
