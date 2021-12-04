import { Button, Container, Descr, Image, ImgContainer, InfoContauner, Slide, Title, Wrapper } from "./SliderStyle"
import { sliderItems } from '../../data/data'
import AwesomeSlider from 'react-awesome-slider';
import './styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

const Slider = (props) => {


  return (
    <Container id='main'>
      <AwesomeSlider bullets={false}>
        {sliderItems.map(item => (
          <Wrapper>
            <Slide key={item.id} bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} alt='model' />
                <InfoContauner>
                  <Title>{item.title}</Title>
                  <Descr>{item.desc}</Descr>
                  <Button onClick={()=>props.onClick()}>Связаться</Button>
                </InfoContauner>
              </ImgContainer>
            </Slide>
          </Wrapper>
        ))}
      </AwesomeSlider>
    </Container>
  )
}

export default Slider
