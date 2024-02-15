import human from '../../../assets/images/business-products-cash-user-man-message-49.svg';
import './style.scss';
import bottomLine from '../../../assets/images/footer-hp-placeholder.svg';
import Form from '../../../components/form/Form';
export const FooterHomepage = () => {
  return (
    <div className={'f-hp-form-description'}>
      <div className={'footer-form-container'}>
        <div className={'f-hp-body-text'}>
          <div className={'form-description'}>
            <span className={'sub-title-footerpage'}>Have an Idea?</span>
            <div className={'f-hp-description-form'}>
              <p className={'title-footer-text'}>Let&apos;s Create Something Huge!</p>
              <img src={human} alt={'hand'} className={'hand'} />
            </div>
          </div>
          <p className={'footer-hp-text'}>
            Id vivamus habitant ac lectus diam et. Dignissim at mauris sagittis nibh maecenas
            adipiscing. Facilisis enim nunc aliquet quis ipsum. Vitae id sodales nunc congue morbi
            consectetur sed.
          </p>
        </div>
        <div className={'form-box'}>
          <Form />
        </div>
      </div>
      <img src={bottomLine} alt={'footer-hp-bot-line'} className={'linear-f-bg-bottom'} />
    </div>
  );
};
