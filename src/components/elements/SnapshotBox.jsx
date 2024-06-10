import React from 'react'
import styled from 'styled-components';

import CardBox from '../items/ulip/CardBox'
import { GiChargedArrow, GiMissileLauncher, GiReceiveMoney } from 'react-icons/gi';
import { AiFillWallet, AiOutlineFileProtect } from 'react-icons/ai';
import { BiListUl } from 'react-icons/bi';
import { MdOutlineMiscellaneousServices, MdOutlineWorkspacePremium } from 'react-icons/md';
import Button from '../items/ulip/Button';
import HeadingTagLine from '../items/ulip/HeadingTagLine';
import FormBtn from '../items/FormBtn';
// import Button from '../items/ulip/Button';
// import Button from '../Items/Button';

const SnapshotBox = ({ modelfuncs }) => {
    return (
        <Container>

            <HeadingTagLine Size={"1rem"} lpSize={"1.2rem"} Margin={"0px 10px"} title={"Plan Snapshot"} />
            <Box>


                <FlexContainer>
                    <FlexBox>
                        <Card >
                            <CardBox Icon={<GiMissileLauncher />} title={"Maturity Booster"} discription={"Return of charges from 11th year onwards."} />
                            <CardBox Icon={<BiListUl />} title={"Fund Options"} discription={"19 funds across all fund classes"} />
                        </Card>
                        <Card >
                            <CardBox Icon={<GiChargedArrow />} title={"Charges"} discription={"Return of charges from 11th year onwards."} />
                            <CardBox Icon={<AiOutlineFileProtect />} title={"Comprehensive protection"} discription={"Life cover , Accidental Death & Disability Cover"} />

                        </Card>
                    </FlexBox>
                    <FlexBox>
                        <Card >
                            <CardBox Icon={<GiReceiveMoney />} title={"Min. Investment"} discription={"₹50,000 p.a."} />
                            <CardBox Icon={<MdOutlineWorkspacePremium />} title={"Premium Payment Term Options"} discription={"Limited / Regular Pay"} />
                        </Card>
                        <Card>
                            <CardBox Icon={<AiFillWallet />} title={"Withdrawals"} discription={"Unlimited Free Withdrawals"} />
                            <CardBox Icon={<MdOutlineMiscellaneousServices />} title={"Fund Switches"} discription={"Unlimited free fund switches"} />

                        </Card>
                    </FlexBox>

                </FlexContainer>
            </Box>
            {/* <Button Width={'80%'} funcs={modelfuncs} m={'20px 10%'} title={"Connect with Us "} lpWidth={"40%"} lpP={"10px 20px"} lpM={"20px 40%"} /> */}
            <FormBtn BtnName={"Connect with Us"} InputName1={"phone"} Label1={"Phone"} InputType1={"number"} InputName2={"pincode"} Label2={"Pincode"} InputType2={"number"} InputName3={"email"} Label3={"Email"} InputType3={"email"} />



        </Container>
    )
}

export default SnapshotBox
const Container = styled.div`
width: 90%;
margin: 50px auto;
padding: 30px;
border: 1px solid #ff5c00;
border-radius: 10px;
background-color: #ff5e003a;
box-shadow: 0px 0px 9px -7px #1a1a1a;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
@media (min-width: 768px) {
    width: 80%;
    margin: 50px 10%;
    

    
}


  
`;

const Box = styled.div`
width: 100%;
background-color: #fff;
padding: 10px;
border-radius: 10px;

    `;

const FlexBox = styled.div`
width: 100%;
display: flex;
gap: 1px;

`;
const FlexContainer = styled(FlexBox)`
width: 100%;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
background-color: #ff5c00;
border-radius: 10px;
gap: 1px;
@media (min-width:1024px) {
    flex-wrap: nowrap;

    
}
  
`;
const Card = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ff5c00;
  display: flex;
  flex-direction: column;
  gap: 1px;


`;