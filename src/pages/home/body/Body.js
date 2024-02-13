import './style.scss';
import dotsTop from '../../../assets/images/image 16.svg';
import topLine from '../../../assets/images/homepageline.svg';
import botLine from '../../../assets/images/homepagesec_line.svg';
import hand from '../../../assets/images/hand-love-sign-15.svg';

export const Body = () => {
  return (
    <div className={'hp-body-wrapper'}>
      <div className={'linear-bg-top'} />
      <div className={'bg-wrapper'}>
        <img src={dotsTop} className={'top-body-dots'} alt={'body-dots'} />
        <div className={'what_is_neo'}>
          <img src={topLine} alt={'neo-f-line'} />
          <div className={'neo-body-text'}>
            <div className={'neo-description'}>
              <span className={'sub-title-body'}>What is Neo masterpiece films?</span>
              <p className={'title-body-text'}>
                A Web 3 Film Studio. For the People, by the People. <img src={hand} alt={'hand'} />
              </p>
            </div>
            <p className={'neo-text'}>
              We are revolutionizing the filmmaking industry by successfully leveraging Blockchain
              technology. Direct, trackable ownership enables value to be shared without middle-men,
              and the community that is created is unparalleled in its power to grow the business.
            </p>
          </div>
          <img src={botLine} alt={'neo-b-line'} />
        </div>
      </div>
      <div className={'linear-bg-bottom'} />
    </div>
  );
};
