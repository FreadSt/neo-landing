import './style.scss';
import clipleft from '../../assets/images/btn-clip-left.svg';
import clipright from '../../assets/images/btn-clip-right.svg';
export const Button = ({ text }) => {
  return (
    <div className={'btn-box'}>
      <img src={clipleft} alt={'btn-clip-left'} />
      <div>
        <span>{text}</span>
      </div>
      <img src={clipright} alt={'btn-clip-right'} />
    </div>
  );
};
