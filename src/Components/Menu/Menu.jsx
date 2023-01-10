import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/">Serviços</a>
      <a href="/">A Empresa</a>
      <a href="/">Equipe</a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;