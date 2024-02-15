import React, { useState, useEffect } from 'react';
import './style.scss';
import clipleft from '../../assets/images/btn-clip-left.svg';
import clipright from '../../assets/images/btn-clip-right.svg';
import PropTypes from 'prop-types';
import play from '../../assets/images/play-mob.svg';

export const Button = ({ text, style, onClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={'btn-box'} onClick={onClick}>
      <img src={clipleft} alt={'btn-clip-left'} />
      <div className={'btn-body'} style={style}>
        <span className={'button-text'}>{text}</span>
        {isMobile ? <img src={play} alt={'play-icon'} className={'arr-mob'} /> : null}
      </div>
      <img src={clipright} alt={'btn-clip-right'} />
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object, // additional styles for the button container
  onClick: PropTypes.func, // onClick handler for the button
};
