import styled from "styled-components";

export const Container =  styled.div`
background-color: black;
display: flex;
width: 100%;
height: 70px;
align-items: center;
justify-content: space-around;
padding: 10px ;

@media (min-width: 768px) {
  justify-content: space-between;
  position: sticky;
  top: 0;
}

`;


export const HamburNav = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
gap: 50px;
position: relative;
@media (min-width: 768px) {
  display: none;
}
`

export const DivNav = styled.ul`
display: none;
@media (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  margin-right: 20px;
}
`

export const UlNav = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
color: white;
`

export const LiNav = styled.li`
cursor: pointer;
text-align: center;

&:after {
  padding: 2px 0;
  display:block;
  content: '';
  border-bottom: 3px solid white;  
  transform: scaleX(0);
  transition: transform 400ms ease-in-out;
  
}
&:hover:after { transform: scaleX(1); }

`

export const ButtonNav = styled.button`
@media (min-width: 576px) {
  
  font-weight: 600;
  font-size: 1em;
  padding: 0.8em 1em;
  border: 2px solid white;
  border-radius: 3px;
  text-align: center;
  transition:  0.5s  ease-in-out;

  
  &:hover{
    background-color: #ffffff;
    
    color: black;
    
  }
}

`;



