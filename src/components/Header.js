import styled from 'styled-components';
import log from '../img/header/log.png';
import menu from '../img/header/menu.png';
import avatar from '../img/header/avatar.png';

const Header = () => {
  const link = () => {};

  return (
    <Container>
      <TitleText>Powerball</TitleText>
      <BattonMenu type="button" onClick={link}>
        <ButtonImg src={menu} alt="It is menu" />
      </BattonMenu>
      <ImgLog src={log} alt="Company`s logo" />
      <BattonAvatar type="button" onClick={link}>
        <ButtonImg src={avatar} alt="It is avatar" />
      </BattonAvatar>
      <WelkomeBalanceText>
        <WelcomeText>
          Welcome<TextSpan>&nbsp;Roma&nbsp;</TextSpan> -
          <LinkLogout
            href="https://github.com/ElenaStepanchuk/test"
            onClick={link}
          >
            &nbsp;Logout
          </LinkLogout>
        </WelcomeText>
        <BalanceText>
          Your balance: <TextSpan>P 0,00</TextSpan>
        </BalanceText>
      </WelkomeBalanceText>
    </Container>
  );
};
export default Header;

const Container = styled.header`
  width: 375px;
  margin: 0 auto 0 auto;
  padding: 15px 16px 0 16px;
  font-family: Roboto;
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
`;
const ButtonImg = styled.img`
  display: block;
`;
const ImgLog = styled.img`
  display: flex;
  margin: 0 auto 0 auto;
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
`;
const WelkomeBalanceText = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 24px;
`;
const WelcomeText = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: #000000;
  margin: 0 auto 0 0;
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
`;
const BalanceText = styled.h2`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: #000000;
  margin: 0 0 0 auto;
`;
