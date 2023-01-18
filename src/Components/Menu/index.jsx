import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#home">Home</a>
      <a href="#services">Serviços</a>
      <a href="#about">A Empresa</a>
      <a href="#team">Equipe</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
