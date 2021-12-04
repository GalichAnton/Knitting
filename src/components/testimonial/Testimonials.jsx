import styled from "styled-components";
import { testimonials } from "../../data/data";

const Container = styled.div`
position:relative;
  display: flex;
  background: ${(props)=>props.theme.colors.mainBg};
  justify-content:center;
  align-items: center;
  padding-bottom: 50px;
  &::before {
      position: absolute;
      content: '';
      bottom: 6px;
      left: 0;
      height: 60%;
      width: 60%;
      z-index: 1;
      background-image: url('/images/decoration/');
      background-repeat: no-repeat;
      background-position: center left;
      background-size: 40%;
    };
  &::after {
      position: absolute;
      content: '';
      bottom: 100px;
      right: 0;
      height: 60%;
      width: 60%;
      z-index: 1;
      background-image: url('/images/decoration/');
      background-repeat: no-repeat;
      background-position: center right;
      background-size: 100%;
      transform: rotate(250deg);
    }
`;

const Wrapper = styled.div`
  position:relative;
  width: 1440px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  z-index:2;
`;

const TestimonialList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2,1fr);
  gap: 30px;
  margin: 0;
  padding: 0;

`;

const TestimonialCard = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 480px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  justify-content:center;
  align-items: center;
  border-radius: 25px;
`;

const Image = styled.img`
  width: 300px;
  height: 420px;
  object-fit: cover;
`;

const Descr = styled.p`
  margin: 0;
  padding: 0;
`;

const TestimonialLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  padding: 0;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  letter-spacing: 2px;
`;

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Отзывы
        </Title>
        <TestimonialList>
          {testimonials.map((item)=>(
            <TestimonialCard key={item.id}>
              <Image src={item.image}/>
              <Descr>
                {item.descr}
              </Descr>
              <TestimonialLink href='https://www.instagram.com/stories/highlights/17931206971386636/' target='_blank'>
                Тут еще Больше!
              </TestimonialLink>
            </TestimonialCard>
          ))}
        </TestimonialList>
      </Wrapper>
    </Container>
  )
}

export default Testimonials


