import React from 'react'
import styled from 'styled-components';
import HeadingBox from './HeadingBox';
import CardButton from '../elements/CardButton';
import { Outlet, useLocation } from 'react-router-dom';

const CardDetails = () => {
    const location = useLocation();
    return (
        <Wrapper>
            <HeadingBox titleTag={"Your Money, your Wish.!"} colorText={"Fixed "} defaultText={"Benefits"} m={"5px 0"} />
            <Discription>With guaranteed plans, you have the option to receive guaranteed returns either as a one-time lump sum or as recurring annual pay-outs.</Discription>
            <FlexBox>
                <CardButton active={location.pathname === "/life/granteed_saving_plan" ? "active" : ""} title={"Lump sum Benefits"} href={"/life/granteed_saving_plan"} />
                <CardButton active={location.pathname === "/life/granteed_saving_plan/reurring-30-pay-out" ? "active" : ""} title={"Reurring Payout Upto 30 Years"} href={"reurring-30-pay-out"} />
                <CardButton active={location.pathname === "/life/granteed_saving_plan/whole-benefit-99-year" ? "active" : ""} title={"Whole Life Benefits Upto 99 Years"} href={"whole-benefit-99-year"} />
            </FlexBox>
            <Content>
                <Outlet />

            </Content>
        </Wrapper>
    )
}

export default CardDetails

const Wrapper = styled.div`

  width: 90%;
height: fit-content;
padding: 10px;
margin: 20px auto;
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
overflow: hidden;
  
`;

const Discription = styled.p`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: #1a1a1a;
  margin: 10px 0;
`;

const FlexBox = styled.div`
margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  flex-wrap: wrap;
`;
const Content = styled.div`
margin: 20px 0;
width: 100%;
height: fit-content;
padding: 10px;

border-radius: 10px;
  
`;

