import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const FilmCards = ({ img, title, date, backgroundStatic, backgroundHover, buttonText, path }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigateToDetails = () => {
    navigate(`/film-details${path}`);
    window.scrollTo(0, 0);
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
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {isHovered && (
        <Button text={buttonText} style={{ width: '150px' }} onClick={navigateToDetails} />
      )}
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
  path: PropTypes.string.isRequired, // Include the path field in PropTypes
};

export default FilmCards;
