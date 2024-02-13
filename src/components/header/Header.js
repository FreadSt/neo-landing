import './style.scss';
import neoLogo from '../../assets/images/neo_logo.svg';
import x from '../../assets/images/X.svg';
import discord from '../../assets/images/Discord.svg';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={neoLogo} alt="logo" />
      <div className="header__social-wrapper">
        <img src={x} alt="X" />
        <img src={discord} alt="Discord" />
      </div>
    </div>
  );
};

export default Header;
