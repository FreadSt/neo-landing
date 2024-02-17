import upperDots from '../../../assets/images/image 16.svg';
import tabbar from '../../../assets/images/tabbar.svg';
import { Navbar } from '../../../components/navbar/Navbar';
import downDots from '../../../assets/images/image 18.svg';
import './style.scss';
import Header from '../../../components/header/Header';
import videoBg from '../../../assets/images/Hero_BG_Video_Alt (1).mp4';
import { Button } from '../../../components/button/Button';
import menuMobile from '../../../assets/images/sidebar-menu-mob.svg';
import { useState } from 'react';
import { MobMenu } from '../../../components/mobileMenu/MobMenu';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import './glitch.css';

export const HomepageHeader = () => {
  const [isMobileMenuOpen, setIsMobMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 430;

  const handleOpenMobMenu = () => {
    setIsMobMenuOpen((prev) => !prev);
  };

  const GlitchText = () => {
    return (
      <ul className="glitch" style={{ textAlign: 'center' }}>
        <li>
          <a href="#" style={{ fontSize: '32px' }}>
            The
          </a>
        </li>
        <li>
          <a href="#" style={{ fontSize: '128px', textAlign: 'center' }}>
            Maestro
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div className={'homepage-header-box'}>
      <img src={upperDots} alt={'up-dots'} className={'up-dots'} />
      <video src={videoBg} autoPlay loop className={'video'} />
      <Header />
      <div className={'poster-container'}>
        {isMobile ? (
          <div className={'home-title'}>
            <h5>The</h5>
            <h1>Maestro</h1>
            <span>Coming late 2023</span>
          </div>
        ) : (
          <GlitchText />
        )}
        <Button text={'watch trailer'} />
        {/*<img*/}
        {/*  src={homeBtn}*/}
        {/*  alt={'home-button'}*/}
        {/*  className={'homepage-btn'}*/}
        {/*  style={{ cursor: 'pointer' }}*/}
        {/*/>*/}
      </div>
      <div className={'navbar-box'}>
        <img src={tabbar} alt={'home-page-tabs'} className={'tabs-bar-home'} />
      </div>
      {isMobile ? (
        <img
          src={menuMobile}
          className={'sidebar-mob-btn'}
          onClick={handleOpenMobMenu}
          alt={'menuMob-hp'}
        />
      ) : (
        <Navbar />
      )}
      {isMobileMenuOpen && <MobMenu onClose={handleOpenMobMenu} />}
      <img src={downDots} alt={'up-dots'} className={'down-dots'} />
      {/*<div className={'linear-bg'} />*/}
    </div>
  );
};
