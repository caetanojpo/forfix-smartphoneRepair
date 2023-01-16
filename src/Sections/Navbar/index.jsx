import { Image, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Burger from '../../Components/Burger';
import Menu from '../../Components/Menu';
import {
  ButtonNav,
  Container,
  DivNav,
  HamburNav,
  LiNav,
  UlNav,
} from './Navbar.styled';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <HamburNav>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </HamburNav>
        </>
      </ThemeProvider>

      <Container>
        <Link href="#home">
          <Image w={{ base: '150px', md: '200px' }} src="/FORFIX_4-09.png" />
        </Link>

        <DivNav>
          <UlNav>
            <LiNav as="a" href="#home">
              Home
            </LiNav>
            <LiNav as="a" href="#services">
              Serviços
            </LiNav>
            <LiNav as="a" href="#about">
              A Empresa
            </LiNav>
            <LiNav as="a" href="#team">
              Equipe
            </LiNav>
            <ButtonNav as="a" href="#">
              Fale Conosco
            </ButtonNav>
          </UlNav>
        </DivNav>
      </Container>
    </>
  );
};

export default Navbar;
