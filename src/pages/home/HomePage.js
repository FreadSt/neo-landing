import './style.scss';
import { HomepageHeader } from './header/HomepageHeader';
import { Body } from './body/Body';
export const HomePage = () => {
  return (
    <div className={'homepage-wrapper'}>
      <HomepageHeader />
      <Body />
    </div>
  );
};
