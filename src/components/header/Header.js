import './style.scss';
import neoLogo from '../../assets/images/neo_logo.svg';
import x from '../../assets/images/X.svg';
import discord from '../../assets/images/Discord.svg';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img src={neoLogo} alt="logo" onClick={() => navigate('/', { replace: true })} />
      <div className="header__social-wrapper">
        <img src={x} alt="X" />
        <img src={discord} alt="Discord" />
      </div>
    </div>
  );
};

export default Header;
