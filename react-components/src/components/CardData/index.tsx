import { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

import './styles.scss';

import { IData } from '../../pages/Main/types';

import { GEO_KEY } from '../../model/const';

const CardData = ({
  card: {
    title,
    description,
    ownername,
    datetaken,
    dateupload,
    lastupdate,
    views,
    tags,
    latitude,
    longitude,
    url,
  },
}: {
  card: IData;
}) => {
  const [address, setAddress] = useState<string>('');

  const getLocalDateTaken = (date: string | number) => {
    let dateLocal: string | number;

    dateLocal = new Date(date).toLocaleString();

    if (dateLocal.toString() === 'Invalid Date') {
      dateLocal = date;
    }

    return dateLocal;
  };

  const getFullAddress = async () => {
    try {
      const data = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=${GEO_KEY}&lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
      );
      const response = await data.json();

      setAddress(response.display_name);
    } catch {
      setAddress('Address unknown');
    }
  };

  useEffect(() => {
    getFullAddress();
  }, []);

  return (
    <>
      <div className="carddata__photo">
        <img src={url} alt={`flickr photo ${tags}`} />
      </div>

      <h2 className="carddata__title">{title}</h2>

      <div className="carddata__author">
        by <span className="carddata__author-name">{ownername}</span>
      </div>

      <div className="carddata__feedback">
        <AiOutlineEye />
        {views}
      </div>

      {description?._content && (
        <div className="carddata__description">
          <b>Description:</b> {description?._content}
        </div>
      )}

      {datetaken && (
        <div className="carddata__block">
          <b>Date taken:</b> {getLocalDateTaken(datetaken)}
        </div>
      )}

      {dateupload && (
        <div className="carddata__block">
          <b>Date upload:</b> {getLocalDateTaken(+dateupload)}
        </div>
      )}

      {lastupdate && (
        <div className="carddata__block">
          <b>Last update:</b> {getLocalDateTaken(+lastupdate)}
        </div>
      )}

      <div className="carddata__block">
        <b>Geo:</b> {address}
      </div>
    </>
  );
};

export default CardData;
