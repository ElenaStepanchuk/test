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
import megaNoShadow from '../img/body/megaNoShadow.png';
import starNoShadow from '../img/body/starNoShadow.png';
import winnerIcon from '../img/body/winnerIcon.png';
import germany from '../img/body/germany.png';
import lottoStar from '../img/body/lotoStar.png';
import photoWon from '../img/body/photoWon.png';
import bunnerDesktop from '../img/desktop/body/bannerDesktop.png';

const MainBody = () => {
  return (
    <>
      <ContainerBannerImg>
        <source srcset={bunnerDesktop} media="(min-width: 1200px)" />
        <source srcset={banner} media="(min-width: 375px)" />
        <BannerImg
          src={banner}
          alt="Company`s banner"
          title="Company`s banner"
        />
      </ContainerBannerImg>
      {/* <BannerImg src={banner} alt="Company`s banner" title="Company`s banner" /> */}
      <BodyContainer>
        <ListPickBuyWin>
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
        </ListPickBuyWin>
        <LotteryTitle>Biggect upcoming lottery draw</LotteryTitle>
        <LotteryDrawsList>
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
        </LotteryDrawsList>
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
            <MainImg src={megaNoShadow} alt="Log mega millions" />
            <StarImg src={starNoShadow} alt="icon star" />
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
            <MainImg src={megaNoShadow} alt="Log mega millions" />
            <StarImg src={starNoShadow} alt="icon star" />
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
            <MainImg src={megaNoShadow} alt="Log mega millions" />
            <StarImg src={starNoShadow} alt="icon star" />
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
            <MainImg src={megaNoShadow} alt="Log mega millions" />
            <StarImg src={starNoShadow} alt="icon star" />
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
            <MainImg src={megaNoShadow} alt="Log mega millions" />
            <StarImg src={starNoShadow} alt="icon star" />
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
        </PlayList>
        <LinkLotteries href="https://github.com/ElenaStepanchuk/test">
          All lotteries »
        </LinkLotteries>
        <LinkMoreDetails href="https://github.com/ElenaStepanchuk/test">
          More Details »
        </LinkMoreDetails>
        <ContainerOwnWon>
          <div>
            <PlayBatton>Biggest lottery winner</PlayBatton>
            <ContainerWonPeople>
              <WonPeopleTitle>
                <WonIcon src={lottoStar} alt="icon lotto star" />
                won<WonPeopleTitleSpan>€100 000 000</WonPeopleTitleSpan>
              </WonPeopleTitle>
              <PhotoWonPeople src={photoWon} alt="won people" />
              <ResultsText>
                uk lotto results: <ResultsTextSpan>07</ResultsTextSpan>
                <ResultsTextSpan>07</ResultsTextSpan>
                <ResultsTextSpan>07</ResultsTextSpan>
                <ResultsTextSpan>07</ResultsTextSpan>
                <ResultsTextSpan>07</ResultsTextSpan>
              </ResultsText>
              <DateText>Date: 20.11.2021</DateText>
              <WonPeopleTitle2>Shaun Vincent a Lottery Winner</WonPeopleTitle2>
              <WonPeopleText>
                Shaun Vincent, from Barnsley, celebrates his £1,158,038 National
                Lottery win after his cheque presentation at the Cedar Court
                Hotel, Wakefield.
              </WonPeopleText>
              <WonPeopleLink href="https://github.com/ElenaStepanchuk/test">
                Read the full story
              </WonPeopleLink>
              <WonPeopleButton>Play Now</WonPeopleButton>
            </ContainerWonPeople>
          </div>
          <div>
            <PlayBatton>Our latest winners</PlayBatton>
            <ContainerTotalPrizes>
              <TotalPrizesTitle>Total prizes paid out</TotalPrizesTitle>
              <TotalPrizesText1>US$ 107 233 768</TotalPrizesText1>
              <TotalPrizesText2>
                6 975 146
                <TotalPrizesTextSpan>winning tickets</TotalPrizesTextSpan>
              </TotalPrizesText2>
            </ContainerTotalPrizes>
            <WinnersList>
              <WinnersListItem>
                <WinnersListIcon src={winnerIcon} alt="winner icon" />
                <WinnersListDate>20.11.2021</WinnersListDate>
                <WinnersListName>
                  <WinnersListFlagGerm src={germany} alt="flag Germany" />
                  J.J won Р175
                </WinnersListName>
                <WinnersListInfo>in 7 ИЗ 49 draw #13476</WinnersListInfo>
              </WinnersListItem>
              <WinnersListItem>
                <WinnersListIcon src={winnerIcon} alt="winner icon" />
                <WinnersListDate>20.11.2021</WinnersListDate>
                <WinnersListName>
                  <WinnersListFlagGerm src={germany} alt="flag Germany" />
                  J.J won Р175
                </WinnersListName>
                <WinnersListInfo>in 7 ИЗ 49 draw #13476</WinnersListInfo>
              </WinnersListItem>
              <WinnersListItem>
                <WinnersListIcon src={winnerIcon} alt="winner icon" />
                <WinnersListDate>20.11.2021</WinnersListDate>
                <WinnersListName>
                  <WinnersListFlagGerm src={germany} alt="flag Germany" />
                  J.J won Р175
                </WinnersListName>
                <WinnersListInfo>in 7 ИЗ 49 draw #13476</WinnersListInfo>
              </WinnersListItem>
              <WinnersListItem>
                <WinnersListIcon src={winnerIcon} alt="winner icon" />
                <WinnersListDate>20.11.2021</WinnersListDate>
                <WinnersListName>
                  <WinnersListFlagGerm src={germany} alt="flag Germany" />
                  J.J won Р175
                </WinnersListName>
                <WinnersListInfo>in 7 ИЗ 49 draw #13476</WinnersListInfo>
              </WinnersListItem>
              <WinnersListItem>
                <WinnersListIcon src={winnerIcon} alt="winner icon" />
                <WinnersListDate>20.11.2021</WinnersListDate>
                <WinnersListName>
                  <WinnersListFlagGerm src={germany} alt="flag Germany" />
                  J.J won Р175
                </WinnersListName>
                <WinnersListInfo>in 7 ИЗ 49 draw #13476</WinnersListInfo>
              </WinnersListItem>
              <WinnersListItem>
                <WinnersListIcon src={winnerIcon} alt="winner icon" />
                <WinnersListDate>20.11.2021</WinnersListDate>
                <WinnersListName>
                  <WinnersListFlagGerm src={germany} alt="flag Germany" />
                  J.J won Р175
                </WinnersListName>
                <WinnersListInfo>in 7 ИЗ 49 draw #13476</WinnersListInfo>
              </WinnersListItem>
            </WinnersList>
          </div>
        </ContainerOwnWon>
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
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 30px 15px 75px 15px;
  }
`;
const BannerImg = styled.img`
  display: block;
  margin: 0 auto 0 auto;
`;

const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  padding: 5px 8px 5px 5px;
  width: 343px;
  :not(:last-child) {
    margin-bottom: 12px;
    padding: 5px 15px 5px 5px;
  }
  @media screen and (min-width: 1200px) {
    width: 380px;
    height: 90px;
    :not(:last-child) {
      margin-right: 15px;
    }
  }
`;
const ListImg = styled.img`
  display: block;
  position: absolute;
  top: 9px;
  left: 5px;
  @media screen and (min-width: 1200px) {
    top: 10px;
    left: 5px;
  }
`;
const ListTitle = styled.h3`
  display: flex;
  margin-left: 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 0;
  @media screen and (min-width: 1200px) {
    line-height: 1.5;
    margin-bottom: 5px;
  }
`;
const ListLink = styled.a`
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
  @media screen and (min-width: 1200px) {
    font-size: 14px;
    line-height: 1.5;
  }
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
  @media screen and (min-width: 1200px) {
    font-size: 24px;
    line-height: 1.5;
    margin-top: 75px;
    margin-bottom: 30px;
  }
`;
const LotteryDrawsList = styled.ul`
  @media screen and (min-width: 1200px) {
    display: flex;
    margin-bottom: 76px;
  }
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
  @media screen and (min-width: 1200px) {
    width: 380px;
    :not(:last-child) {
      margin-right: 15px;
      margin-bottom: 0;
    }
  }
`;
const LotteryListImg = styled.img`
  display: block;
  position: absolute;
  top: 4px;
  left: 24px;
  width: 127px;
  height: 80px;
  @media screen and (min-width: 1200px) {
    width: 141px;
    height: 80px;
    top: 4px;
    left: 24px;
  }
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
  @media screen and (min-width: 1200px) {
    margin: 24px 45px 0 0;
  }
`;
const IconFlag = styled.img`
  display: flex;
  margin: 0 10px 0 0;
`;
const LotteryListText = styled.p`
  font-style: normal;
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 0.92;
  color: #13902a;
  justify-content: end;
  padding: 0;
  margin: 12px 19px 20px 0;
  @media screen and (min-width: 1200px) {
    font-size: 26px;
    line-height: 0.85;
    margin: 14.5px 39px 12px 0;
  }
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
  @media screen and (min-width: 1200px) {
    width: 171px;
    color: #000000;
    margin: 11px 0 11px 12px;
    padding: 6px 52px;
  }
`;
const LotoClock = styled.p`
  display: flex;
  margin: 21px 0 0 50px;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  @media screen and (min-width: 1200px) {
    margin-left: 40px;
  }
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
  @media screen and (min-width: 1200px) {
    width: 100%;
    padding-top: 10.5px;
    padding-bottom: 10.5px;
    margin-top: 0;
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 15px;
  }
`;
const PlayList = styled.ul`
  width: 326px;
  display: grid;
  grid-template-columns: 157px 157px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1200px) {
    width: 1100px;
    grid-template-columns: 208px 208px 208px 208px 208px;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;
const PlayListItem = styled.li`
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  list-style-type: none;
  padding: 16px 8px 10px 8px;
  text-align: center;
  @media screen and (min-width: 1200px) {
    padding: 12px 13px 13px 13px;
  }
`;
const MainImg = styled.img`
  position: absolute;
  top: 16px;
  left: calc(100% / 2 - 40px);
  width: 81px;
  height: 78px;
  @media screen and (min-width: 1200px) {
    width: 96px;
    height: 94px;
    top: 12px;
    left: calc(100% / 2 - 48px);
  }
`;
const StarImg = styled.img`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  @media screen and (min-width: 1200px) {
    top: 10px;
    right: 18px;
    width: 16px;
    height: 16px;
  }
`;
const PlayListTitle = styled.h3`
  display: flex;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  margin-top: 90px;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    margin-top: 122px;
    font-size: 14px;
    line-height: 1.21;
  }
`;
const PlayFlag = styled.img`
  margin-right: 3px;
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
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.1;
  }
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
  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;
const AlarmImg = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  @media screen and (min-width: 1200px) {
    width: 16px;
    height: 16px;
  }
`;
const BtnPlayNow = styled.button`
  width: 139px;
  height: 36px;
  border-radius: 8px;
  background: #f7d300;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  margin-top: 8px;
  @media screen and (min-width: 1200px) {
    width: 182px;
    height: 38px;
    margin-top: 12px;
  }
`;
const LinkLotteries = styled.a`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #0061a3;
  margin-top: 12px;
  justify-content: end;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
const LinkMoreDetails = styled.a`
  @media screen and (min-width: 1200px) {
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #0061a3;
    margin-top: 15px;
    margin-bottom: 75px;
    margin-right: 35px;
    justify-content: end;
  }
`;
/////
const ContainerOwnWon = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;
const ContainerWonPeople = styled.div`
  width: 343px;
  height: 504px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding-top: 16px;
  padding-bottom: 16.5px;
  @media screen and (min-width: 1200px) {
    position: relative;
    width: 775px;
    height: 382px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const WonPeopleTitle = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 1.33;
  text-transform: uppercase;
  justify-content: center;
  margin: 0;
  @media screen and (min-width: 1200px) {
    font-size: 28px;
    line-height: 1.29;
  }
`;
const WonIcon = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  @media screen and (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;
const WonPeopleTitleSpan = styled.span`
  color: #0061a3;
  text-align: center;
  margin-left: 8px;
  @media screen and (min-width: 1200px) {
    margin-left: 10px;
  }
`;
const PhotoWonPeople = styled.img`
  width: 297px;
  height: 172px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  margin-bottom: 17.5px;
  @media screen and (min-width: 1200px) {
    width: 358px;
    height: 207px;
    margin-left: 48px;
    margin-right: 43px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
`;
const ResultsText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  margin: 0;
  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-left: 84px;
  }
`;
const ResultsTextSpan = styled.span`
  color: #ffffff;
  background: red;
  border-radius: 50%;
  padding: 3px;
  :first-child {
    margin-left: 16px;
  }
  :not(:last-child) {
    margin-right: 4px;
  }
`;
const DateText = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: #000000;
  justify-content: end;
  margin-right: 53.5px;
  margin-top: 5.5px;
  margin-bottom: 0;
  @media screen and (min-width: 1200px) {
    justify-content: start;
    margin-left: 84px;
    margin-left: 250px;
  }
`;
const WonPeopleTitle2 = styled.h3`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
  margin-bottom: 0;
  justify-content: center;
  color: #000000;
  @media screen and (min-width: 1200px) {
    position: absolute;
    left: 450px;
    top: 94px;
    margin-top: 0;
  }
`;
const WonPeopleText = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  margin: 8px 16px 0 16px;
  @media screen and (min-width: 1200px) {
    width: 232px;
    position: absolute;
    left: 450px;
    top: 133px;
    margin: 0;
  }
`;
const WonPeopleLink = styled.a`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #007aff;
  text-decoration: none;
  margin-top: 12px;
  margin-bottom: 0px;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    position: absolute;
    left: 450px;
    top: 270px;
    margin: 0;
  }
`;
const WonPeopleButton = styled.button`
  display: flex;
  width: 232px;
  height: 36px;
  border-radius: 8px;
  background: #f7d300;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  padding: 9px;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    position: absolute;
    bottom: 20px;
    right: 94px;
    height: 40px;
    padding: 11px;
    margin-bottom: 0;
  }
`;

const ContainerTotalPrizes = styled.div`
  width: 343px;
  height: 98px;
  margin: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 5px 47px 10px 47px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1200px) {
    width: 380px;
    margin: 15px 0 30px 0;
  }
`;
const TotalPrizesTitle = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  color: #000000;
  margin-bottom: 5px;
  margin-top: 0;
  justify-content: center;
`;
const TotalPrizesText1 = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 0.85;
  color: #13902a;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 0;
`;
const TotalPrizesText2 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.19;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
`;
const TotalPrizesTextSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  margin-left: 10px;
`;
const WinnersList = styled.ul`
  height: 381px;
  width: 343px;
  overflow-y: auto;
  @media screen and (min-width: 1200px) {
    width: 380px;
    height: 254px;
  }
`;
const WinnersListItem = styled.li`
  width: 342px;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 15px 5px 15px;
  list-style-type: none;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1200px) {
    width: 380px;
  }
`;
const WinnersListIcon = styled.img`
  display: flex;
  position: absolute;
  top: 10px;
  left: 15px;
`;
const WinnersListDate = styled.p`
  display: flex;
  margin-left: 91px;
  margin-top: 5px;
  margin-bottom: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
`;
const WinnersListName = styled.p`
  display: flex;
  margin-left: 91px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
`;
const WinnersListFlagGerm = styled.img``;
const WinnersListInfo = styled.p`
  display: flex;
  margin-left: 91px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #5f5f5f;
  margin-top: 0;
  margin-bottom: 0;
`;
const ContainerBannerImg = styled.picture``;
const ListPickBuyWin = styled.ul`
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;
