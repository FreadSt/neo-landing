import upperDots from '../../../assets/images/image 16.svg';
import tabbar from '../../../assets/images/tabbar.svg';
import { Navbar } from '../../../components/navbar/Navbar';
import downDots from '../../../assets/images/image 18.svg';
import './style.scss';
import Header from '../../../components/header/Header';
import videoBg from '../../../assets/images/HeroVid10 (1).mp4';
import { Button } from '../../../components/button/Button';
import menuMobile from '../../../assets/images/burger-menu.svg';
import { useState } from 'react';
import { MobMenu } from '../../../components/mobileMenu/MobMenu';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import './glitch.css';
import ReactPlayer from 'react-player';
import VideoBackground from '../../../components/videoPlayer/VideoBackground';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const videoUrl = 'https://vimeo.com/user109067760/review/913360625/0f57eb2d22';

  return (
    <div className={'homepage-header-box'}>
      <img src={upperDots} alt={'up-dots'} className={'up-dots'} />
      <Header />
      {/*<ReactPlayer url={videoUrl} playing={true} muted={true} />*/}
      {/*<VideoBackground videoUrl={videoUrl} />*/}
      <video autoPlay muted loop preload="auto" className={'video'}>
        <source src={videoBg} />
      </video>
      {/*<VideoBackground />*/}
      {isMobile ? (
        <div className={'poster-container'}>
          <div className={'home-title'}>
            <h1>The</h1>
            <h1>Future Of</h1>
            <h1>Filmmaking</h1>
          </div>
          <a href={'https://vimeo.com/user109067760/review/913360625/0f57eb2d22'}>
            <Button text={'watch reel'} width={'250px'} />
          </a>
        </div>
      ) : (
        <div className={'poster-container'}>
          <div className={'home-title'}>
            <h1>The Future</h1>
            <h1>Of Filmmaking</h1>
          </div>
          <a href={'https://vimeo.com/user109067760/review/913360625/0f57eb2d22'}>
            <Button text={'watch reel'} width={'250px'} />
          </a>
        </div>
      )}
      <div className={'navbar-box'}>
        {/*<img src={tabbar} alt={'home-page-tabs'} className={'tabs-bar-home'} />*/}
      </div>
      {isMobile ? (
        <div className={'menu-mob-wrapper'}>
          <img
            src={menuMobile}
            className={'sidebar-mob-btn'}
            onClick={handleOpenMobMenu}
            alt={'menuMob-hp'}
          />
        </div>
      ) : (
        <Navbar />
      )}
      {isMobileMenuOpen && <MobMenu onClose={handleOpenMobMenu} />}
      <img src={downDots} alt={'up-dots'} className={'down-dots'} />
      {/*<div className={'linear-bg'} />*/}
    </div>
  );
};
