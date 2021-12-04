import { Link } from 'react-scroll';
import styled from 'styled-components';
import { MenuItem } from './NavBarStyle';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <MenuItem>
          <Link
            activeClass='active'
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Главная
          </Link>
        </MenuItem>
      </li>
      <li>
        <MenuItem>
          <Link
            activeClass='active'
            to="category"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Категории
          </Link>
        </MenuItem>
      </li>
      <li>
        <MenuItem>
          <Link
            activeClass='active'
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Отзывы
          </Link>
        </MenuItem>
      </li>
      <li>
        <MenuItem>
          <Link
            activeClass='active'
            to="contactForm"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Контакты
          </Link>
        </MenuItem>
      </li>
    </Ul >
  )
}

export default RightNav