import clipleft from '../../assets/images/clipleft.svg';
import clipright from '../../assets/images/clipright.svg';
import { NAVBAR_TABS } from '../../constants/homePageConst';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.scss';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [initialActive, setInitialActive] = useState(location.pathname);

  useEffect(() => {
    setInitialActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="navbar-wrapper">
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
