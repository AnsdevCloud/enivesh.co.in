import React, { useEffect } from 'react'
// import Form from '../Elements/Form'
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Form from '../../components/elements/Form.jsx';

// import device from '../../StyledComponentsItem/Devices';

const PopUpModel = ({ funcs }) => {


  return (
    <>
      <Wrapper onClick={funcs}><span>Click for Close</span></Wrapper>
      <Container>
        <div className="form">
          <Form />
        </div>
        <div className="closebtn" onClick={funcs}>
          <AiOutlineClose />
        </div>
      </Container>
    </>
  )
}

export default PopUpModel

const Wrapper = styled.div`
 cursor: pointers;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 99;
 

  span{
    position: relative;
    color: #000;
    font-size: 1rem;
    top: 200px;
    left: 50px;
    opacity: 0;
    transition: all .5S ease-in-out;
  }
  &:hover span{
    opacity: 1;
  }
`;
const Container = styled.div`
  position: fixed;
  width: fit-content;
  transform: translate(-50% -50%);
  top: 100px;
  left: 0%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media (min-width: 768px) {
     top: 150px;
     left: 10%;
    }
    @media (min-width: 1024px) {
     top: 150px;
     left: 20%;
    }
    @media (min-width: 1440px) {
     top: 150px;
     left: 30%;
    }
  .form{
    width: 90%;
    height: fit-content;
    padding: 10px;
    background-color: #e0baa423;
    border-radius: 10px;
    border: 1px solid #ff5c00;
    box-shadow: 0px 0px 231px #e59669;
    @media (min-width: 768px) {
      padding: 20px;
      width: 600px;
    }
  }
  .closebtn{
    position: absolute;
    bottom: -50px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: #e0baa4c1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius : 0px 0px 10px 10px;
    border: 1px solid #e0baa423;
    transition: all .5s ease-in-out;
    svg{
        font-size: 30px;
        font-weight: 900;
        color: #000;
    }
    &:hover{
    background-color: #ff5c00;
    }
    &:hover svg{
   rotate:calc(85deg);
}
@media (min-width: 768px) {
  bottom: auto;
  top: 10px;
  right: -50px;
  border-radius: 0px 10px 10px 0;

    }
  }
`;