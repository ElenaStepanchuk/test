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

const Footer = () => {
  return (
    <FooterOwn>
      <FooterFon src={fonStar} alt="fon star" />
      <FooterContainer>
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
        <SecondTitle>smartwinners</SecondTitle>
        <Text1>
          The trade name SmartWinners and all content on this website is a
          copyright of SmartWinners Limited. All rights reserved. We are an
          independent lottery ticket purchasing service. We are not affiliated
          with nor are we endorsed by any State sanctioned lottery organization.
          We make no claims on our site to be such.
        </Text1>
        <Text2>Our registered business address is</Text2>
        <Text2>Unit 6158, PO Box 6945, London, W1A 6US, United Kingdom.</Text2>
        <ListPaymentSecurity>
          <ItemPaymentSecurity>
            <SecondTitle>payment methods</SecondTitle>
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
            <SecondTitle>security & trust</SecondTitle>
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

const FooterOwn = styled.footer`
  position: relative;
  width: 375px;
  margin: 0 auto 0 auto;
`;
const FooterFon = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
`;
const FooterContainer = styled.div`
  width: 375px;
  margin: 0 auto 0 auto;
  padding: 0 16px 32px 16px;
  font-family: Roboto;
`;
const WhatsAppIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 82px;
`;
const WhatsAppTitle = styled.h2`
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
`;
const WhatsAppText = styled.p`
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
`;
const UsefulLinksTitle = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.31;
  text-transform: uppercase;
  color: #000000;
  margin-top: 16px;
  margin-bottom: 12px;
`;
const UsefulLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 160px 139px;
  grid-column-gap: 16px;
`;
const UsefulLink = styled.a`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
const SecondTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #000000;
  margin: 20px 0 0 0;
`;
const Text1 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
`;
const Text2 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 2.1;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
`;
const ListPaymentSecurity = styled.ul`
  width: 327px;
  display: grid;
  grid-template-columns: 152px 141px;
  grid-column-gap: 34px;
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
const ContainerSocial = styled.div``;
const SocialImg = styled.img`
  /* display: block; */
  margin-top: 18px;
  width: 24px;
  height: 24px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
