import styled from 'styled-components';
import banner from '../img/body/banner.png';
import computer from '../img/body/computer.png';
import shop from '../img/body/shop.png';
import money from '../img/body/money.png';
import loto from '../img/body/loto.png';
import americanFlag from '../img/body/americanFlag.png';
import clock from '../img/body/clock.png';
import mega from '../img/body/mega.png';
import ball from '../img/body/ball.png';
import mega2 from '../img/body/mega2.png';
import alarm from '../img/body/alarm.png';
import star from '../img/body/star.png';

const MainBody = () => {
  return (
    <>
      <BannerImg src={banner} alt="Company`s banner" title="Company`s banner" />
      <BodyContainer>
        <ul>
          <ListItem>
            <ListImg src={computer} alt="It is computer" />
            <ListTitle href="https://github.com/ElenaStepanchuk/test">
              you pick
              <ListLink>Play Now »</ListLink>
            </ListTitle>
            <ListText>
              It’s easy! Pick from over 40 official lottery games you wish to
              play. Then select your winning numbers.
            </ListText>
          </ListItem>
          <ListItem>
            <ListImg src={shop} alt="It is shop" />
            <ListTitle href="https://github.com/ElenaStepanchuk/test">
              we buy
              <ListLink>More Details »</ListLink>
            </ListTitle>
            <ListText>
              Once you’ve picked your winning numbers we’ll purchase your ticket
              on your behalf.
            </ListText>
          </ListItem>
          <ListItem>
            <ListImg src={money} alt="It is money" />
            <ListTitle href="https://github.com/ElenaStepanchuk/test">
              you win!!!
              <ListLink>Withdraw My Winnings »</ListLink>
            </ListTitle>
            <ListText>
              When you win, we’ll automatically credit your account the full
              value of your winnings.
            </ListText>
          </ListItem>
        </ul>
        <LotteryTitle>Biggect upcoming lottery draw</LotteryTitle>
        <ul>
          <LotteryListItem>
            <LotteryListImg src={loto} alt="Log OZlotto" />
            <LotteryListTitle>
              <IconFlag src={americanFlag} alt="Icon amerycan flag" />
              Mega millions
            </LotteryListTitle>
            <LotteryListText>$94 000 000</LotteryListText>
            <ContainerButton>
              <LotteryListButton type="button">Play Now</LotteryListButton>
              <LotoClock>
                <LotoClockImg src={clock} alt="clock" />
                1:22:01
              </LotoClock>
            </ContainerButton>
          </LotteryListItem>
          <LotteryListItem>
            <LotteryListImg src={mega} alt="Log mega millions" />
            <LotteryListTitle>
              <IconFlag src={americanFlag} alt="Icon amerycan flag" />
              Mega millions
            </LotteryListTitle>
            <LotteryListText>$94 000 000</LotteryListText>
            <ContainerButton>
              <LotteryListButton type="button">Play Now</LotteryListButton>
              <LotoClock>
                <LotoClockImg src={clock} alt="clock" />
                1:22:01
              </LotoClock>
            </ContainerButton>
          </LotteryListItem>
          <LotteryListItem>
            <LotteryListImg src={ball} alt="Log power ball" />
            <LotteryListTitle>
              <IconFlag src={americanFlag} alt="Icon amerycan flag" />
              Mega millions
            </LotteryListTitle>
            <LotteryListText>$94 000 000</LotteryListText>
            <ContainerButton>
              <LotteryListButton type="button">Play Now</LotteryListButton>
              <LotoClock>
                <LotoClockImg src={clock} alt="clock" />
                1:22:01
              </LotoClock>
            </ContainerButton>
          </LotteryListItem>
        </ul>
        <PlayBatton>Play uncoming lotteries online</PlayBatton>
        <PlayList>
          <PlayListItem>
            <MainImg src={mega2} alt="Log mega millions" />
            <StarImg src={star} alt="icon star" />
            <PlayListTitle>
              <PlayFlag src={americanFlag} alt="Icon amerycan flag" />
              Mega millions
            </PlayListTitle>
            <PlayText>$122 000 000</PlayText>
            <PlayTime>
              <AlarmImg src={alarm} alt="clock" />
              1:22:01
            </PlayTime>
            <BtnPlayNow>Play Now</BtnPlayNow>
          </PlayListItem>
          <PlayListItem>
            <img src={mega2} alt="Log mega millions" />
            <h2>
              <img src={americanFlag} alt="Icon amerycan flag" />
              Mega millions
            </h2>
            <p>$122 000 000</p>
            <p>
              <img src={clock} alt="clock" />
              1:22:01
            </p>
          </PlayListItem>
        </PlayList>
      </BodyContainer>
    </>
  );
};
export default MainBody;

const BodyContainer = styled.div`
  width: 375px;
  margin: 0 auto 0 auto;
  padding: 16px 16px 32px 16px;
  font-family: Roboto;
`;
const BannerImg = styled.img`
  display: block;
`;

const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  padding: 4px 8px 6px 5px;
  width: 343px;
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;
const ListImg = styled.img`
  display: block;
  position: absolute;
  top: 9px;
  left: 5px;
`;
const ListTitle = styled.a`
  display: flex;
  margin-left: 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 8px;
  text-decoration: none;
`;
const ListLink = styled.span`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.62;
  color: #0061a3;
  justify-content: end;
  text-decoration: underline;
  margin-left: auto;
  text-transform: none;
`;
const ListText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: #5f5f5f;
  margin: 0 0 0 80px;
  text-align: justify;
`;
const LotteryTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #000000;
  justify-content: end;
  text-transform: uppercase;
  margin: 30px 0 18px 0;
`;
const LotteryListItem = styled.li`
  list-style-type: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  padding: 0;
  width: 343px;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
const LotteryListImg = styled.img`
  display: block;
  position: absolute;
  top: 4px;
  left: 24px;
`;
const LotteryListTitle = styled.h2`
  font-style: normal;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #000000;
  justify-content: end;
  text-transform: uppercase;
  padding: 0;
  margin: 23px 19px 0 0;
`;
const IconFlag = styled.img`
  display: flex;
  margin: 0 10px 0 0;
`;
const LotteryListText = styled.h3`
  font-style: normal;
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 0.92;
  color: #13902a;
  justify-content: end;
  padding: 0;
  margin: 12px 19px 20px 0;
`;
const ContainerButton = styled.div`
  display: flex;
  background: #0061a3;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const LotteryListButton = styled.button`
  font-style: normal;
  width: 144px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin: 14px 0 12px 16px;
  padding: 5px 38px;
  background: #f7d300;
  border-radius: 8px;
  border: none;
  text-align: center;
`;
const LotoClock = styled.p`
  display: flex;
  margin: 21px 0 0 50px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
`;
const LotoClockImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;
const PlayBatton = styled.button`
  width: 343px;
  border: none;
  padding-top: 13px;
  padding-bottom: 13px;
  background: #f30000;
  border-radius: 8px;
  margin-top: 32px;
  margin-bottom: 16px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
`;
const PlayList = styled.ul`
  width: 326px;
  display: grid;
  grid-template-columns: 155px 155px;
  grid-column-gap: 16px;
  grid-auto-rows: 230px;
  margin-left: auto;
  margin-right: auto;
`;
const PlayListItem = styled.li`
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  list-style-type: none;
  padding: 16px 8px 10px 8px;
`;
const MainImg = styled.img`
  position: absolute;
  top: 16px;
  left: calc(100% / 2 - 40px);
`;
const StarImg = styled.img`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px; ;
`;
const PlayListTitle = styled.h2`
  display: flex;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  margin-top: 90px;
  justify-content: center;
`;
const PlayFlag = styled.img`
  margin-right: 5px;
`;
const PlayText = styled.p`
  display: flex;
  color: #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  margin-top: 8px;
  margin-bottom: 0;
  justify-content: center;
`;
const PlayTime = styled.p`
  display: flex;
  color: #0061a3;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  margin-top: 8px;
  margin-bottom: 0;
  justify-content: center;
  align-items: center;
`;
const AlarmImg = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;
const BtnPlayNow = styled.button``;
