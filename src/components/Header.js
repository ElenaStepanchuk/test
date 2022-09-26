import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import log from '../img/header/log.png';
import menu from '../img/header/menu.png';
import avatar from '../img/header/avatar.png';
import logDesctop from '../img/desktop/header/logo.png';
import facebookDesktop from '../img/desktop/header/facebook.png';
import twitterDesktop from '../img/desktop/header/twitter.png';
import messagerDesktop from '../img/desktop/header/messenger.png';
import watsappDesktop from '../img/desktop/header/whatsapp.png';
import flagAmericanDesktop from '../img/desktop/header/flagAmerican.png';
import langIcon from '../img/desktop/header/buttonLang.png';

const Header = () => {
  return (
    <Container>
      <TitleText>Powerball</TitleText>
      <BattonMenu type="button">
        <ButtonImg src={menu} alt="It is menu" />
      </BattonMenu>
      <ImgLog>
        <source srcset={logDesctop} media="(min-width: 1200px)" />
        <source srcset={log} media="(min-width: 375px)" />
        <img src={log} alt="Company`s logo" />
      </ImgLog>
      <BattonAvatar type="button">
        <ButtonImg src={avatar} alt="It is avatar" />
      </BattonAvatar>
      <WelkomeBalanceText>
        <WelcomeText>
          Welcome<TextSpan>&nbsp;Roma&nbsp;</TextSpan> -
          <LinkLogout href="https://github.com/ElenaStepanchuk/test">
            &nbsp;Logout
          </LinkLogout>
        </WelcomeText>
        <BalanceText>
          Your balance: <TextSpan>P 0,00</TextSpan>
        </BalanceText>
      </WelkomeBalanceText>
      <MenuRight>
        <SocialIcon src={facebookDesktop} alt="facebook logo" />
        <SocialIcon src={twitterDesktop} alt="twitter logo" />
        <SocialIcon src={messagerDesktop} alt="messager logo" />
        <SocialIcon src={watsappDesktop} alt="watsapp logo" />
        <LanguageMenu>
          <LanguageName>
            <Languageimg src={flagAmericanDesktop} alt="flag American" />
            English
          </LanguageName>
          <LangButton>
            {/* <LangIcon src={langIcon} alt="lang Icon" /> */}
            <AiOutlineDown />
          </LangButton>
        </LanguageMenu>
      </MenuRight>
    </Container>
  );
};
export default Header;

const Container = styled.header`
  width: 375px;
  margin: 0 auto 0 auto;
  padding: 15px 16px 0 16px;
  font-family: Roboto;
  position: relative;
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 10px 16px 0 10px;
  }
`;

const TitleText = styled.h1`
  visibility: hidden;
  font-size: 0;
`;
const BattonMenu = styled.button`
  display: flex;
  position: absolute;
  padding: 0;
  border: none;
  background-color: #ffffff;
  top: 30px;
  left: 18px;
  margin-left: 0;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
const ButtonImg = styled.img`
  display: block;
`;
const ImgLog = styled.picture`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
  }
`;
const BattonAvatar = styled.button`
  display: flex;
  position: absolute;
  padding: 0;
  border: none;
  background-color: #ffffff;
  top: 25px;
  right: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
const WelkomeBalanceText = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 24px;
  @media screen and (min-width: 1200px) {
    display: inline;
  }
`;
const WelcomeText = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: #000000;
  margin: 0 auto 0 0;
  @media screen and (min-width: 1200px) {
    margin-right: auto;
    margin-left: 308px;
    margin-top: 9px;
  }
`;
const TextSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
const LinkLogout = styled.a`
  text-decoration: none;
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #0061a3;
  @media screen and (min-width: 1200px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
  }
`;
const BalanceText = styled.h2`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: #000000;
  margin: 0 0 0 auto;
  @media screen and (min-width: 1200px) {
    margin-right: auto;
    margin-left: 308px;
    margin-top: 9px;
  }
`;
const MenuRight = styled.div`
  @media screen and (max-width: 1199px) {
    display: none;
  }
  position: absolute;
  top: 25px;
  right: 38px;
`;
const SocialIcon = styled.img`
  width: 16px;
  height: 16px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
const LanguageMenu = styled.div``;
const Languageimg = styled.img`
  width: 20px;
  height: 14px;
  margin-right: 5px;
`;
const LanguageName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  margin: 10px 0 0 0;
`;
const LangButton = styled.button``;
const LangIcon = styled.img`
  width: 11px;
  height: 7px;
`;
