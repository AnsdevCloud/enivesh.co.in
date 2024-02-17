import React from 'react'
import styled from 'styled-components'
import HeadingTagLine from '../items/ulip/HeadingTagLine'
// import device from '../../StyledComponentsItem/Devices'

const DynamicCard = ({ Img, id, Wdth, title, discription }) => {
    return (
        <Wrapper $Width={Wdth} $id={id}>
            <div className="container">
                <div className="imgbox">
                    <img src={Img} alt=" icons " />
                </div>
                <div className="discription">
                    <HeadingTagLine title={title} Margin={'5px 0'} Align={'left'} />
                    <div className="dics">
                        <p>{discription}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default DynamicCard
const Wrapper = styled.div`
cursor: default;
width: 100%;
height: 140px;
max-height:fit-content ;
background-color: #fff;
box-shadow: 0px 0px 9px -7px #1a1a1a;

border-radius: 10px;
padding: 5px;
.container{
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5px 10px;
    gap: 20px;
    align-items: center;
    .imgbox{
        position: relative;
        width: 100px;
        height: 60px;
        background-color: #fff;
       
   
    img{
    height: 100%;


    }
}
    .discription{
        width: calc(100% - 80px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h1{
            height: auto;
        }
    }
  
     @media (min-width: 1024px) {
        flex-direction: ${props => props.$id === 7 ? 'row' : 'column'};
        .discription{
            width: ${props => props.$id === 7 ? '95%' : '100%'};
            h1{
                text-align: ${props => props.$id === 7 ? 'left' : 'center'}
            }
        }
    }
    }
        @media (min-width: 768px){
         height: auto;
    
    }

        @media (min-width: 1024px){
        width: ${props => props.$Width ? props.$id == 7 ? '88%' : props.$Width : '100%'};
        
    }
`;