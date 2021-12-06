import styled from "styled-components";
import { mobile, noteBook } from "../../responsive";


const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background: ${(props) => props.theme.colors.mainBg};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  max-width: 1440px;
  padding: 20px;
  ${mobile({padding: '5px'})}
`;

const DeliveryList = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const DeliveryCard = styled.li`
  display: flex;
  flex: 1;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Descr = styled.p`
  margin: 0;
  padding: 0;
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  padding: 0;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  letter-spacing: 2px;
  ${mobile({fontSize: '35px'})}
`;

const Delivery = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Доставка
        </Title>
        <DeliveryList>
          <DeliveryCard>
            <Image src='/images/delivery1.jpg' />
            <Descr>
              CDEK
            </Descr>
          </DeliveryCard>
          <DeliveryCard>
            <Image src='/images/delivery2.jpg' />
            <Descr>
              BoxBerri
            </Descr>
          </DeliveryCard>

        </DeliveryList>
      </Wrapper>
    </Container>
  )
}

export default Delivery
