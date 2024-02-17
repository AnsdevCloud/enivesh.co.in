import React from 'react'
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi'
import Button from './Button';
const SuccesMessage = ({ backForm }) => {
    return (
        <Container>
            <GiCheckMark color='#ff5c00' />
            <MassegeBobx>Successfully Submitted </MassegeBobx>
            <Button funcs={backForm} title={"Submit Again "} m={"50px 0"} />
        </Container>
    )
}

export default SuccesMessage

const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
background-color: #f8e9de;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
padding: 20px;
overflow: hidden;
 svg{
    position: relative;
    background-color: #f8bd96;
    padding: 20px ;
    border-radius: 50%;
    font-size: 6rem;
    animation: animateFadeUp 2s linear infinite  ;
    
    @keyframes animateFadeUp {
        0%{
            font-size: 4rem;
        }
        50%{
            font-size: 5rem;
        }
        100%{
            font-size: 4rem;
        }
    }
 }

  
`;
const MassegeBobx = styled.h2`
color: #ff5c00;
font-weight: 600;
margin: 20px 10px;
font-size: 1.2rem;
@media (max-width:375px) {
    font-size: 1.5rem; 
}
  
`;