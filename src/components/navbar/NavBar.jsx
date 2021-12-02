import { Badge, MenuItem } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Center, Container, Input, Language, Left, Logo, Right, SearchContainer, Wrapper } from "./NavBarStyle"




const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search style={{fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Вязание</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sing in</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
