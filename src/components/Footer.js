import styled from 'styled-components';
import fonStar from '../img/footer/fonStar.png';
import whatsapp from '../img/footer/whatsapp.png';
import visa from '../img/footer/visa.png';
import masterCard from '../img/footer/masterCardDark.png';
import maestro from '../img/footer/maestroDark.png';
import dinersCard from '../img/footer/dinersClubDark.png';
import skrill from '../img/footer/skrillDark.png';
import bitcoin from '../img/footer/bitcoinDark.png';
import qiwi from '../img/footer/qiwi.png';
import hsbc from '../img/footer/hsbc.png';
import litecoin from '../img/footer/litecoin.png';
import comodo from '../img/footer/comodo.png';
import ctv from '../img/footer/ctv.png';
import facebook from '../img/footer/facebook.png';
import twitter from '../img/footer/twitter.png';
import messeger from '../img/footer/facebookMessenger.png';
import fonStarDesktop from '../img/footer/fonStarDesktop.png';

const Footer = () => {
  return (
    <FooterOwn>
      <ContainerFonImg>
        <source srcset={fonStarDesktop} media="(min-width: 1200px)" />
        <source srcset={fonStar} media="(min-width: 375px)" />
        <FonImg src={fonStar} alt="Fon footer" title="Fon footer" />
      </ContainerFonImg>
      <FooterContainer>
        <div>
          <WhatsAppIcon src={whatsapp} alt="WhatsApp icon" />
          <WhatsAppTitle>Live chat by WhatsApp</WhatsAppTitle>
          <WhatsAppText>Customer Service</WhatsAppText>
          <UsefulLinksTitle>Useful links</UsefulLinksTitle>
          <UsefulLinksContainer>
            <UsefulLink>Home</UsefulLink>
            <UsefulLink>Terms & Conditions</UsefulLink>
            <UsefulLink>Lottery Results & Winners</UsefulLink>
            <UsefulLink>Security</UsefulLink>
            <UsefulLink>Lottery Promotions</UsefulLink>
            <UsefulLink>Privacy Policy</UsefulLink>
            <UsefulLink>About Us</UsefulLink>
            <UsefulLink>Acceptable Use Policy</UsefulLink>
            <UsefulLink>Contact Us</UsefulLink>
            <UsefulLink>Website Use Policy</UsefulLink>
            <UsefulLink></UsefulLink>
            <UsefulLink>Affiliate program</UsefulLink>
          </UsefulLinksContainer>
          <UsefulLinksContainerDesktop>
            <UsefulLink>Lottery Results & Winners</UsefulLink>
            <UsefulLink>Lottery Promotions</UsefulLink>
            <UsefulLink>About Us</UsefulLink>
            <UsefulLink>Contact Us</UsefulLink>
            <UsefulLink>Terms & Conditions</UsefulLink>
            <UsefulLink>Security</UsefulLink>
            <UsefulLink>Privacy Policy</UsefulLink>
            <UsefulLink>Acceptable Use Policy</UsefulLink>
            <UsefulLink>Website Use Policy</UsefulLink>
            <UsefulLink>Affiliate program</UsefulLink>
          </UsefulLinksContainerDesktop>
        </div>
        <div>
          <SecondTitle>smartwinners</SecondTitle>
          <Text1>
            The trade name SmartWinners and all content on this website is a
            copyright of SmartWinners Limited. All rights reserved. We are an
            independent lottery ticket purchasing service. We are not affiliated
            with nor are we endorsed by any State sanctioned lottery
            organization. We make no claims on our site to be such.
          </Text1>
          <Text2>Our registered business address is</Text2>
          <Text2>
            Unit 6158, PO Box 6945, London, W1A 6US, United Kingdom.
          </Text2>
        </div>

        <ListPaymentSecurity>
          <ItemPaymentSecurity>
            <SecondTitlePayment>payment methods</SecondTitlePayment>
            <CardsList>
              <Card src={visa} alt="card visa" />
              <Card src={masterCard} alt="card masterCard" />
              <Card src={maestro} alt="card maestro" />
              <Card src={dinersCard} alt="card dinersCard" />
              <Card src={skrill} alt="card skrill" />
              <Card src={bitcoin} alt="card bitcoin" />
              <Card src={qiwi} alt="card qiwi" />
              <Card src={hsbc} alt="card hsbc" />
              <Card src={litecoin} alt="card litecoin" />
            </CardsList>
          </ItemPaymentSecurity>
          <ItemPaymentSecurity>
            <SecondTitleSecutity>security & trust</SecondTitleSecutity>
            <ContainerSecurity>
              <SecurityImgCtv src={ctv} alt="ctv" />
              <SecurityImgComodo src={comodo} alt="comodo" />
            </ContainerSecurity>
            <ContainerSocial>
              <SocialImg src={facebook} alt="facebook" />
              <SocialImg src={twitter} alt="twitter" />
              <SocialImg src={messeger} alt="messeger" />
            </ContainerSocial>
          </ItemPaymentSecurity>
        </ListPaymentSecurity>
      </FooterContainer>
    </FooterOwn>
  );
};
export default Footer;
const ContainerFonImg = styled.picture`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
`;
const FonImg = styled.img``;
const FooterOwn = styled.footer`
  position: relative;
  width: 375px;
  margin: 0 auto 0 auto;

  background: linear-gradient(
      180deg,
      rgba(255, 253, 253, 0) 33.74%,
      rgba(255, 255, 255, 0.99) 100%
    ),
    url(Aesthetic-Star-PNG-Isolated-HD.png);
  opacity: 0.86;
  @media screen and (min-width: 1200px) {
    width: 1200px;
    background: linear-gradient(
      0deg,
      rgba(224, 224, 224, 0.47) 0%,
      rgba(225, 225, 225, 0.16) 20.75%,
      rgba(255, 254, 254, 0.26) 84.14%,
      #ffffff 126.52%
    );
  }
`;
const FooterContainer = styled.div`
  width: 375px;
  margin: 0 auto 0 auto;
  padding: 0 16px 32px 16px;
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 133px 123px 56px 109px;
    display: flex;
    justify-content: space-between;
  }
`;
const WhatsAppIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 82px;
  @media screen and (min-width: 1200px) {
    width: 36px;
    height: 36px;
    margin-top: 0;
  }
`;
const WhatsAppTitle = styled.h2`
  font-family: Roboto;
  display: flex;
  top: 82px;
  left: 62px;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #000000;
  @media screen and (min-width: 1200px) {
    top: 133px;
    left: 160px;
    font-size: 16px;
    line-height: 1.31;
  }
`;
const WhatsAppText = styled.p`
  font-family: Roboto;
  display: flex;
  top: 99px;
  left: 62px;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: #5f5f5f;
  @media screen and (min-width: 1200px) {
    top: 154px;
    left: 160px;
    line-height: 1.75;
  }
`;
const UsefulLinksTitle = styled.h2`
  font-family: Roboto;
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.31;
  text-transform: uppercase;
  color: #000000;
  margin-top: 16px;
  margin-bottom: 12px;
  @media screen and (min-width: 1200px) {
    margin-top: 36px;
    margin-bottom: 15px;
  }
`;
const UsefulLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 160px 139px;
  grid-column-gap: 16px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
const UsefulLinksContainerDesktop = styled.div`
  width: 183px;
  margin-top: 0;
  :not(:last-child) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;
const UsefulLink = styled.a`
  font-family: Roboto;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  :not(:last-child) {
    margin-bottom: 5px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 1.31;
  }
`;
const SecondTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #000000;
  margin: 20px 0 0 0;
  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 1.31;
    margin-top: 78px;
    margin-bottom: 15px;
  }
`;
const SecondTitlePayment = styled.h2`
  font-style: normal;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #000000;
  margin: 20px 0 0 0;
  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 1.31;
    margin-top: 78px;
    margin-bottom: 10px;
  }
`;
const SecondTitleSecutity = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #000000;
  margin: 20px 0 0 0;
  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 1.31;
    margin-top: 78px;
    margin-bottom: 12px;
    margin-top: 30px;
  }
`;
const Text1 = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 1200px) {
    width: 249px;
    font-size: 12px;
    line-height: 1.2;
  }
`;
const Text2 = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 2.1;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 1200px) {
    font-size: 13px;
    line-height: 1.62;
    width: 237px;
  }
`;
const ListPaymentSecurity = styled.ul`
  width: 327px;
  display: grid;
  grid-template-columns: 152px 141px;
  grid-column-gap: 34px;
  @media screen and (min-width: 1200px) {
    width: 152px;
    display: inline;
  }
`;
const ItemPaymentSecurity = styled.li`
  list-style-type: none;
`;
const CardsList = styled.div`
  width: 152px;
  display: grid;
  grid-template-columns: 44px 44px 44px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 10px;
  margin-bottom: 17px;
`;
const Card = styled.img`
  display: block;
  margin: 0;
  width: 44px;
  height: 26.4px;
`;
const ContainerSecurity = styled.li`
  display: flex;
`;
const SecurityImgCtv = styled.img`
  display: block;
  width: 64px;
  height: 72px;
  margin-top: 12px;
  margin-right: 10px;
`;
const SecurityImgComodo = styled.img`
  display: block;
  width: 66, 5px;
  height: 55px;
  margin-top: 12px;
`;
const ContainerSocial = styled.div`
  @media screen and (min-width: 1200px) {
    position: absolute;
    display: flex;
    right: 147px;
    top: 133px;
  }
`;
const SocialImg = styled.img`
  margin-top: 18px;
  width: 24px;
  height: 24px;
  :not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (min-width: 1200px) {
    width: 36px;
    height: 36px;
    margin-top: 0;
  }
`;
