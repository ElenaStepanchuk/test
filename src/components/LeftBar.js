import styled from 'styled-components';
const LeftBar = () => {
  return (
    <Container>
      <ContainerBar>
        <TitleBar>Questions?</TitleBar>
        <Text1>contact us by:</Text1>
        <Text2>Skype:</Text2>
        <Text1>sales@mekashron.com</Text1>
        <Text1>or</Text1>
        <Text3>WhatsApp</Text3>
        <Text1>+972559461380</Text1>
      </ContainerBar>
    </Container>
  );
};
export default LeftBar;
const Container = styled.header`
  width: 375px;
  margin: 0 auto 0 auto;
  padding: 15px 16px 0 16px;
  font-family: Roboto;
  position: relative;
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 10px 0 30px 0;
  }
`;
const ContainerBar = styled.div`
  position: absolute;
  left: -338px;
  top: 48px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;
const TitleBar = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.21;
  color: #ee1d25;
  margin-bottom: 35px;
`;
const Text1 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.21;
  color: #000000;
  margin-bottom: 35px;
  margin-top: 0;
`;
const Text2 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.21;
  color: #000000;
  margin-bottom: 0;
`;
const Text3 = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.21;
  color: #167f6b;
  margin-bottom: 0;
`;
