import Header from '../../components/header/Header';
import './style.scss';
import film from '../../assets/images/interface-essential-paginate-filter-camera-10.svg';
import { FooterCreds } from '../../components/credsFooter/FooterCreds';
import { FILM_CARDS } from '../../constants/filmsConstants';
import bg from '../../assets/images/image 37.jpg';
import { FilledButton } from '../../components/button/FilledButton';
import { useState, useEffect } from 'react';

export const AllMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(5);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const handleShowOlderClick = () => {
    setCardsPerPage(cardsPerPage * 2);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={'all-movies-wrapper'}>
      <div className={'upper-movies-section'}>
        <Header />
        <div className={'all-movies-title'}>
          <h2>Original Films, Series & More</h2>
          <img src={film} alt={'all-movies film'} />
        </div>
      </div>
      <div className={'films-cards-am'}>
        {FILM_CARDS.map((card, index) => (
          <div
            className={'img-am-box'}
            key={index}
            style={{ backgroundColor: card.backgroundStatic }}>
            <div className={'poster-am-title'}>
              <span>{card.title}</span>
              <span>{card.date}</span>
            </div>
            <img src={card.img} className={'am-poster-img'} />
          </div>
        ))}
      </div>
      <div className={'lower-bg-am-box'}>
        <img className={'bg-wrapper-am'} src={bg} />
      </div>
      <FilledButton btnText={'show older'} onClick={handleShowOlderClick} />
      <FooterCreds />
    </div>
  );
};
