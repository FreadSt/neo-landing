import Header from '../../components/header/Header';
import './style.scss';
import clipleft from '../../assets/images/clipleft.svg';
import { NAVBAR_TABS } from '../../constants/homePageConst';
import { Link, useLocation } from 'react-router-dom';
import clipright from '../../assets/images/clipright.svg';
import { useEffect, useState } from 'react';
import { FooterCreds } from '../../components/credsFooter/FooterCreds';
import upperDots from '../../assets/images/image 16.svg';
import downDots from '../../assets/images/image 18.svg';
import mobMenu from '../../assets/images/sidebar-menu-mob.svg';
import { MobMenu } from '../../components/mobileMenu/MobMenu';
export const Live = () => {
  const location = useLocation();
  const [initialActive, setInitialActive] = useState(location.pathname);
  const isMobile = window.innerWidth <= 430;
  const [isMobileMenuOpen, setIsMobMenuOpen] = useState(false);

  const handleOpenMobMenu = () => {
    setIsMobMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setInitialActive(location.pathname);
  }, [location.pathname]);
  return (
    <div className={'live-wrapper'}>
      <div className={'live-inner-content'}>
        <img src={upperDots} alt={'up-dots'} className={'live-up-dots'} />
        <Header />
        <div className={'live-title-box'}>
          <h2 className={'live-title'}>neo films livestreams</h2>
          <div className={'live-soon'}>
            <span className={'soon-span'}>coming soon</span>
          </div>
        </div>
        {isMobileMenuOpen && <MobMenu onClose={handleOpenMobMenu} />}
        {isMobile ? (
          <img
            src={mobMenu}
            alt={'mob-menu-live'}
            className={'mob-menu-live'}
            onClick={handleOpenMobMenu}
          />
        ) : (
          <div className="navbar-wrapper-live">
            <img className="clip-top-left" src={clipleft} alt={'clip-l-live'} />
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
                        {item.title}{' '}
                        {(item.mark && <p>{item.mark}</p>) || (
                          <img src={item.icon} alt={'live-icon-nav'} />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <img className="clip-bottom-right" src={clipright} alt={'clip-r-live'} />
          </div>
        )}
        <img src={downDots} alt={'up-dots'} className={'live-down-dots'} />
      </div>
      <FooterCreds />
    </div>
  );
};
