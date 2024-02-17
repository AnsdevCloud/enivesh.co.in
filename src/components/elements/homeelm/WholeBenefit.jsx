import React from 'react'
import styled from 'styled-components';
import ItemCard from '../../items/ItemCard';
import whole from '../../../jsondata/insuarnce/wholelife.json'
const WholeBenefit = () => {
    return (
        <Wrapper>
            <Box>
                A Whole Life Guaranteed Policy provides recurring payout for the entire lifetime of the insured individual (upto 99 Age).  This type of policy combines a death benefit, which is the amount paid to beneficiaries upon the insured's death and inbuilt saving under the plan.
            </Box>
            <FlexBox>
                {
                    whole && whole.map((item, index) => {
                        return <ItemCard key={index} data={item} Width={"30%"} />
                    })
                }
            </FlexBox>
        </Wrapper>
    )
}

export default WholeBenefit

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
const Box = styled.div`
width: 100%;
padding: 10px;
font-size: small;
font-weight: 400;
color: #1a1a1a;
text-align: justify;
box-shadow: 0px 0px 9px -7px #1a1a1a;

  
`;
const FlexBox = styled(Box)`
margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  box-shadow: none;
  
`;