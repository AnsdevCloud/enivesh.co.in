import React from 'react'
import styled from 'styled-components';
import ItemCard from '../../items/ItemCard';
import recurring from '../../../jsondata/insuarnce/recurring.json'
const Reurring = () => {
    return (
        <Wrapper>
            <Box>
                The recurring payout option in guaranteed plans refers to a feature where the policyholder receives regular and periodic payments over a specified duration instead of a one-time lump sum. Instead of getting the entire guaranteed amount at once, the policyholder opts for a series of payouts at regular intervals, such as monthly, quarterly, or annually.

                <br />
                <br />
                This option provides individuals with a steady stream of income, creating a predictable and reliable cash flow.
                <br />
                <br />
                These payout can range between 5 to 30 Years
            </Box>
            <FlexBox>
                {
                    recurring && recurring.map((item, index) => {
                        return <ItemCard Height={0} key={index} data={item} Width={"250"} />
                    })
                }
            </FlexBox>
        </Wrapper>
    )
}

export default Reurring
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