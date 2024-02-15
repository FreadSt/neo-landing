import xmark from '../../assets/images/side-menu-x.svg';
import './style.scss';
import { NAVBAR_TABS } from '../../constants/homePageConst';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const MobMenu = ({ onClose }) => {
  const location = useLocation();
  const [initialActive, setInitialActive] = useState(location.pathname);
  return (
    <div className={'mob-menu-wrapper'}>
      <img src={xmark} alt={'xmark-mob'} onClick={onClose} className={'xmark'} />
      <div className={'nav-tabs-mobile'}>
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
                {(item.mark && <p>{item.mark}</p>) || <img src={item.icon} alt={'icon-a-mobile'} />}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
