import React from 'react'
import styled from 'styled-components';
const Nav = ({ icon, title, active }) => {
  return (
    <Container $active={active}>
      {icon}
      <span>{title}</span>
    </Container>
  )
}

export default Nav
const Container = styled.div`
cursor: pointer;
  width: 90%;
  margin: 10px auto;
  height: fit-content;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: ${props => props.$active ? "rgba(117, 75, 50, 0.105)" : "#444"};
  border-radius: 5px;
    border:  1px solid #ff5e0090 ;
  border:  ${props => props.$active ? "1px solid #ff5e0090" : "1px solid transparent"};
  transition: all .4s ease-in-out;

  svg{
    color: #fff;
    font-size: 1.2rem;
  }

  span{
    color: #fff;
    font-weight: 500;
  }
  &:hover{
    background-color: rgba(117, 75, 50, 0.105);
    border:  1px solid #ff5e0090 ;
  }

`;