import React from 'react'
import styled from 'styled-components';
import CardImg from '../CardImg';
import ItemCard from '../../items/ItemCard';
import lumsum from '../../../jsondata/insuarnce/lumsum.json'
const LumSum = () => {
    return (
        <Wrapper>
            <Box>
                The lump-sum option in a guaranteed payout plan allows you to receive the entire assured amount in one single payment, providing a substantial sum at once. This can be advantageous for meeting significant financial needs or making a large investment. The lump-sum option offers flexibility in utilizing the guaranteed payout according to your immediate requirements or financial goals.
            </Box>
            <FlexBox>
                {
                    lumsum && lumsum.map((item, index) => {
                        return <ItemCard key={index} data={item} Width={"30%"} />
                    })
                }
            </FlexBox>
        </Wrapper>
    )
}

export default LumSum

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