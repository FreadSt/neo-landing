import Header from '../../../../components/header/Header';
import wallet from '../../../../assets/images/wallet connect.svg';
import refresh from '../../../../assets/images/Linear/Arrows/Refresh.svg';
import './style.scss';
export const HeaderStaking = () => {
  return (
    <div className={'staking-header-wrapper'}>
      <Header />
      <div className={'title-box'}>
        <h2 className={'staking-title'}>neo staking</h2>
        <div className={'balance-box'}>
          <button className={'button-balance'}>
            <img src={wallet} alt={'btn-wallet'} className={'wallet-btn'} />
            <span>WalletConnect</span>
          </button>
          <div className={'balance-text'}>
            <span>Your Balance:</span>
            <div className={'balance-count'}>0.00 NEOBux</div>
            <button className={'reload-btn'}>
              <img src={refresh} alt={'refresh-balance'} className={'refresh-balance'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
