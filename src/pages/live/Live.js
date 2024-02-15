import Header from '../../components/header/Header';
import './style.scss';
import { Navbar } from '../../components/navbar/Navbar';
import clipleft from '../../assets/images/clipleft.svg';
import { NAVBAR_TABS } from '../../constants/homePageConst';
import { Link, useLocation } from 'react-router-dom';
import clipright from '../../assets/images/clipright.svg';
import { useEffect, useState } from 'react';
import { FooterCreds } from '../../components/credsFooter/FooterCreds';
import upperDots from '../../assets/images/image 16.svg';
import downDots from '../../assets/images/image 18.svg';
export const Live = () => {
  const location = useLocation();
  const [navbarHeight, setNavbarHeight] = useState(5);
  const [initialActive, setInitialActive] = useState(location.pathname);

  useEffect(() => {
    setInitialActive(location.pathname);
  }, [location.pathname]);
  return (
    <div className={'live-wrapper'}>
      <img src={upperDots} alt={'up-dots'} className={'live-up-dots'} />
      <Header />
      <h2 className={'live-title'}>neo films livestreams</h2>
      <div className={'live-soon'}>
        <span className={'soon-span'}>coming soon</span>
      </div>
      <div className="navbar-wrapper-live">
        <img className="clip-top-left" src={clipleft} />
        <div className={'nav-inner-content'}>
          <div className="navigation-container">
            {NAVBAR_TABS.map((item, i) => {
              const isActive = location.pathname === item.path || initialActive === item.path;
              return (
                <div className={`tab-btn ${isActive ? 'active' : ''}`} key={i}>
                  <Link
                    to={item.path}
                    className={`nav-title ${isActive ? 'active-link' : ''}`}
                    onClick={() => setInitialActive(item.path)}
                    style={isActive ? { color: '#FFFFFF', opacity: 1 } : {}}>
                    {item.title} {(item.mark && <p>{item.mark}</p>) || <img src={item.icon} />}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <img className="clip-bottom-right" src={clipright} />
      </div>
      <img src={downDots} alt={'up-dots'} className={'live-down-dots'} />
      <FooterCreds />
    </div>
  );
};
