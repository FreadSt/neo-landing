import clipleft from '../../assets/images/clipleft.svg';
import clipright from '../../assets/images/clipright.svg';
import { NAVBAR_TABS } from '../../constants/homePageConst';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.scss';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [navbarHeight, setNavbarHeight] = useState(5);
  const [initialActive, setInitialActive] = useState(location.pathname);

  useEffect(() => {
    setInitialActive(location.pathname);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const maxNavbarHeight = 25;
      const minNavbarHeight = 8;
      const scrollRange = window.innerHeight * 0.8;
      if (scrollPosition >= documentHeight - scrollRange) {
        const newHeight = Math.min(
          maxNavbarHeight,
          minNavbarHeight +
            ((scrollPosition - (documentHeight - scrollRange)) / scrollRange) *
              (maxNavbarHeight - minNavbarHeight),
        );
        setNavbarHeight(newHeight);
      } else {
        setNavbarHeight(minNavbarHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="navbar-wrapper" style={{ bottom: `${navbarHeight}vh` }}>
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
  );
};
