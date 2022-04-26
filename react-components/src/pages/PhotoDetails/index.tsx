import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';

import { AppContext } from '../../context';

import './styles.scss';

import { IData } from '../Main/types';

import { GEO_KEY } from '../../model/const';

const PhotoDetails = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams();
  const [
    { title, description, ownername, datetaken, dateupload, lastupdate, views, tags, url },
    setCardData,
  ] = useState<IData>({ id: '' });
  const [address, setAddress] = useState<string>('');
  const navigate = useNavigate();

  const getLocalDateTaken = (date: string | number) => {
    let dateLocal: string | number;

    dateLocal = new Date(date).toLocaleString();

    if (dateLocal.toString() === 'Invalid Date') {
      dateLocal = date;
    }

    return dateLocal;
  };

  const getFullAddress = async (lat: string, long: string) => {
    try {
      const data = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=${GEO_KEY}&lat=${lat}&lon=${long}&format=json&accept-language=en`
      );
      const response = await data.json();

      setAddress(response.display_name);
    } catch {
      setAddress('Address unknown');
    }
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const card = state.main.cards.find((item) => item.id === id);
    if (card) {
      setCardData(card);
      getFullAddress(card.latitude as string, card.longitude as string);
    } else {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <main className="photo-details">
      <div className="photo-details__container">
        <button className="photo-details__btn-back" onClick={handleClickBack}>
          Back
        </button>
        <div className="photo-details__photo">
          <img src={url} alt={`flickr photo ${tags}`} />
        </div>

        <h2 className="photo-details__title">{title}</h2>

        <div className="photo-details__author">
          by <span className="photo-details__author-name">{ownername}</span>
        </div>

        <div className="photo-details__feedback">
          <AiOutlineEye />
          {views}
        </div>

        {description?._content && (
          <div className="photo-details__description">
            <b>Description:</b> {description?._content}
          </div>
        )}

        {datetaken && (
          <div className="photo-details__block">
            <b>Date taken:</b> {getLocalDateTaken(datetaken)}
          </div>
        )}

        {dateupload && (
          <div className="photo-details__block">
            <b>Date upload:</b> {getLocalDateTaken(+dateupload)}
          </div>
        )}

        {lastupdate && (
          <div className="photo-details__block">
            <b>Last update:</b> {getLocalDateTaken(+lastupdate)}
          </div>
        )}

        <div className="photo-details__block">
          <b>Geo:</b> {address}
        </div>
      </div>
    </main>
  );
};

export default PhotoDetails;
