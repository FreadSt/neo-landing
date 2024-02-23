import Header from '../../../components/header/Header';
import { Navbar } from '../../../components/navbar/Navbar';
import updots from '../../../assets/images/image 16.svg';
import downDots from '../../../assets/images/image 18.svg';
import symbols from '../../../assets/images/ネオ.svg';
import xDots from '../../../assets/images/x-head-about.svg';
import dots from '../../../assets/images/circles-head-about.svg';
import './style.scss';
export const AboutHeader = () => {
  return (
    <div className={'about-header-wrapper'}>
      <img src={updots} alt={'about-up-dots'} className={'up-dots'} />
      <Header />
      <div className={'about-content'}>
        <img src={dots} alt={'about-dots'} className={'about-h-dots'} />
        <img src={symbols} alt={'about-symbols'} className={'symbols-img'} />
        <h2 className={'about-title'}>The Future Of Filmmaking</h2>
        <img src={xDots} alt={'about-x-dots'} className={'about-x-dots'} />
      </div>
      <Navbar />
      <img src={downDots} alt={'down-up-dots'} className={'down-dots'} />
    </div>
  );
};
