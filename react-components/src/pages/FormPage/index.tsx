import Form from '../../components/Form';
import RegisterCardList from '../../components/RegisterCardList';
import NotificationWindow from '../../components/NotificationWindow';

import './styles.scss';

import { IRegisterCardItem } from '../../components/RegisterCardItem/types';
import { useState } from 'react';

const FormPage = () => {
  const [cards, setCards] = useState<IRegisterCardItem[]>([]);
  const [isShowNotification, setIsShowNotification] = useState(false);

  const addCard = (newCard: IRegisterCardItem) => {
    setCards((state) => [...state, newCard]);
  };

  const showNotification = () => {
    setIsShowNotification(true);

    setTimeout(() => {
      setIsShowNotification(false);
    }, 3000);
  };

  return (
    <main className="form-page">
      <Form addCard={addCard} showNotification={showNotification} />

      <RegisterCardList cards={cards} className="form-page__register-cards" />

      {isShowNotification && <NotificationWindow message="The data was saved successfully!" />}
    </main>
  );
};

export default FormPage;
