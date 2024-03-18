import Header from '../../../components/header/Header';
import { HeaderStaking } from './header/StakingHeader';
import { FooterCreds } from '../../../components/credsFooter/FooterCreds';
import { StakingBody } from './body/StakingBody';
export const NeoStaking = () => {
  return (
    <>
      <HeaderStaking />
      <StakingBody />
      <FooterCreds />
    </>
  );
};
