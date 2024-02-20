import webArrow from '../../assets/images/navbar-arr.svg';
import house from '../../assets/images/fNew.png';
import peoples from '../../assets/images/newssec.png';
import GlitchEffect from '../../components/glitch/GlitchComponent';
import newfMobile from '../../assets/images/mobilefnew.png';
import newSecMobile from '../../assets/images/mobileSnew.png';

export const NAVBAR_TABS = [
  {
    title: 'home',
    path: '/',
  },
  {
    title: 'live',
    path: '/live',
    mark: 'soon',
  },
  {
    title: 'about',
    path: '/live',
  },
  {
    title: 'news',
    path: '/live',
  },
  {
    title: 'shop',
    path: '/live',
  },
  {
    title: 'services',
    path: '/live',
  },
  {
    title: 'web3',
    path: '/live',
    icon: webArrow,
  },
  {
    title: 'contacts',
    path: '/live',
  },
];

const isMobile = window.innerWidth <= 430;

export const LATEST_NEWS_CARDS = [
  {
    mark: 'news',
    date: 'feb 19 2024',
    title: 'Some title',
    img: isMobile ? newfMobile : house,
    glitchEffect: <GlitchEffect imgSrc={house} />,
    buttonText: 'Read More',
    borderRadius: '10px',
    desc: 'Neo Masterpiece Films Explores Exciting Collaboration Opportunities in Costa Rica',
  },
  {
    date: 'nov 20 2023',
    mark: 'news',
    borderRadius: '10px',
    img: isMobile ? newSecMobile : peoples,
    title: 'Pretty long title taking two lines',
    buttonText: 'Read More',
    desc: 'Neo Masterpiece Films, a trailblazer in the realm of cinematic excellence, has set its sights on pioneering a groundbreaking innovation in the filmmaking process.',
    glitchEffect: <GlitchEffect imgSrc={house} />,
  },
];
