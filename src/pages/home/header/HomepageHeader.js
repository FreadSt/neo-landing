import upperDots from '../../../assets/images/image 16.svg';
import homeBtn from '../../../assets/images/button.svg';
import tabbar from '../../../assets/images/tabbar.svg';
import { Navbar } from '../../../components/navbar/Navbar';
import downDots from '../../../assets/images/image 18.svg';
import './style.scss';
import Header from '../../../components/header/Header';
import videoBg from '../../../assets/images/Hero_BG_Video_Alt (1).mp4';

export const HomepageHeader = () => {
  return (
    <div className={'homepage-header-box'}>
      <img src={upperDots} alt={'up-dots'} className={'up-dots'} />
      <video src={videoBg} autoPlay loop className={'video'} />
      <Header />
      <div className={'poster-container'}>
        <div className={'home-title'}>
          <h5>The</h5>
          <h1>Maestro</h1>
          <span>Coming late 2023</span>
        </div>
        <img
          src={homeBtn}
          alt={'home-button'}
          className={'homepage-btn'}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={'navbar-box'}>
        <img src={tabbar} alt={'home-page-tabs'} className={'tabs-bar-home'} />
      </div>
      <Navbar />
      <img src={downDots} alt={'up-dots'} className={'down-dots'} />
      {/*<div className={'linear-bg'} />*/}
    </div>
  );
};
