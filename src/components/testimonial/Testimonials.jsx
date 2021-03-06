import styled from "styled-components";
import { testimonials } from "../../data/data";
import { mobile, noteBook, tablet } from "../../responsive";

const Container = styled.div`
  position:relative;
  display: flex;
  background: url('/images/decoration/4706201.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content:center;
  align-items: center;
  padding-bottom: 50px;
  
/*   &::before {
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
    } */
`;

const Wrapper = styled.div`
  position:relative;
  width: 1440px;
  display: flex;
  padding: 0 15px;
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
  ${noteBook({
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3,1fr)'
})};
  ${mobile({
  gridTemplateColumns: ' 1fr',
  gridTemplateRows: 'repeat(6,1fr)'
})};
`;

const TestimonialCard = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 40%;
  min-height: 50%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  justify-content:center;
  align-items: center;
  border-radius: 25px;


`;

const Image = styled.img`
  width: 75%;
  height: 75%;
  object-fit: cover;
  ${tablet({
  width: '75%',
  height: '75%'
})};
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
      <Wrapper id='testimonial'>
        <Title>
          ????????????
        </Title>
        <TestimonialList>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id}>
              <Image src={item.image} />
              <Descr>
                {item.descr}
              </Descr>
              <TestimonialLink href='https://www.instagram.com/stories/highlights/17931206971386636/' target='_blank'>
                ?????? ?????? ????????????!
              </TestimonialLink>
            </TestimonialCard>
          ))}
        </TestimonialList>
      </Wrapper>
    </Container>
  )
}

export default Testimonials


