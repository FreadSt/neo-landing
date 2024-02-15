import './style.scss';
import clipleft from '../../assets/images/btn-clip-left.svg';
import clipright from '../../assets/images/btn-clip-right.svg';
import PropTypes from 'prop-types';
export const Button = ({ text, style, onClick }) => {
  return (
    <div className={'btn-box'} onClick={onClick}>
      <img src={clipleft} alt={'btn-clip-left'} />
      <div className={'btn-body'} style={style}>
        <span className={'button-text'}>{text}</span>
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
