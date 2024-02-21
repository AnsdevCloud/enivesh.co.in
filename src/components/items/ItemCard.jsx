import React from 'react'
import styled from 'styled-components';

const ItemCard = ({ data, Height, Width }) => {
    // const { imgUrl, titleDefault, titleColor, discription } = data;
    return (
        <Wrapper $width={Width} $height={Height}>
            {
                data && <>
                    <div className="icon">
                        <img src={data.imgUrl} alt="" />
                    </div>
                    <div className="title">
                        <h3>{data.titleColor} <span>{data.titleDefault}</span></h3>
                    </div>
                    <div className="discription">
                        <p>{data.discription}</p>
                    </div></>
            }
        </Wrapper>
    )
}

export default ItemCard
const Wrapper = styled.div`
width: ${props => props.$width ? props.$width : "210px"};
height: ${props => props.$height ? props.$height : "210px"};
box-shadow: 0px 0px 9px -7px #1a1a1a;
background-color: #fff;
display: flex;
border-radius: 10px;
overflow: hidden;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 5px;
padding: 10px;
.icon{
    width: 130px;
    height: 75px;
    img{
        width: 100%;
        height: 100%;
    }
}
.title{
    margin-top: 10px;
    display: flex;
    align-items: center;
    h3{
        color: #ff5c00;
        font-weight: 600;
        text-align: center;
        font-size: 14px;
        span{
            font-weight: 600;
            color: #1a1a1a;
        }
        
    }
}
.discription{
    padding: 5px ;
    p{
        font-size: 10px;
        font-weight: 500;
        text-align: justify;
    }
}
  
 @media (max-width:1025px) {
   width: ${props => props.$width ? props.$width : "300px"};
    height: 230px;
    
  }
  @media (max-width:475px) {
    width: 200px;
    height: 200px;
    .icon{
    width: 100px;
    height: 70px;
    img{
        width: 100%;
        height: 100%;
    }
}
.title{
    margin-top: 10px;
    display: flex;
    align-items: center;
    h3{
        color: #ff5c00;
        font-weight: 600;
        font-size: 12px;
        span{
            font-weight: 600;
            color: #1a1a1a;
        }
        
    }
}
  }
    @media (max-width:426px) {
   min-width: 100%;
    height: 200px;

  }
`;