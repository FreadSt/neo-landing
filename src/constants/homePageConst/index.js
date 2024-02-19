import webArrow from '../../assets/images/navbar-arr.svg';
import house from '../../assets/images/housepng.png';
import peoples from '../../assets/images/peoplepng.png';
import GlitchEffect from '../../components/glitch/GlitchComponent';
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

export const LATEST_NEWS_CARDS = [
  {
    mark: 'news',
    date: 'aug 02 2023',
    title: 'Some title',
    img: house,
    glitchEffect: <GlitchEffect imgSrc={house} />,
    buttonText: 'Read More',
    desc: 'Mi sagittis viverra auctor habitant vitae urna praesent. Pellentesque commodo condimentum eros eros. ',
  },
  {
    date: 'aug 02 2023',
    mark: 'news',
    img: peoples,
    title: 'Pretty long title taking two lines',
    buttonText: 'Read More',
    desc: 'Venenatis neque viverra habitant est sed massa volutpat at.',
    glitchEffect: <GlitchEffect imgSrc={house} />,
  },
];
