import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/button/Button';

const FilmCards = ({ img, title, date, backgroundStatic, backgroundHover, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={'film-card-wrapper'}
      style={{ backgroundColor: isHovered ? backgroundHover : backgroundStatic }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={'film-card-title'}>
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <div
        className={'film-card'}
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      {isHovered && <Button text={buttonText} style={{ width: '150px' }} />}
    </div>
  );
};

FilmCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  backgroundStatic: PropTypes.string.isRequired,
  backgroundHover: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FilmCards;
