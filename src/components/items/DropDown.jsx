import { Link } from "react-router-dom";
import styled from "styled-components";


const DropDown = ({ active, data }) => {


    return (
        <>
            <CloseWrapper onMouseEnter={active} />
            <Wrapper onMouseLeave={active}>
                <h1 className="title">{data.text}</h1>
                <div className="linkcontaner">
                    {
                        data.list && data.list.map((item, index) => {
                            return <div key={index} className="item">
                                <h2>{data.title}</h2>
                                <p> <Link to={item.path}>{item.name}</Link></p>
                            </div>
                        })

                    }


                </div>
            </Wrapper>
        </>
    )
}

export default DropDown
const CloseWrapper = styled.div`
position: fixed;
top: 65px;
left: 0;
width: 100%;
height: 100%;
background-color: transparent;
z-index: 99;
  
`;

const Wrapper = styled.div`
transition: all 1s ease-in-out;
background-color: #fff;
position: fixed;
top: 62px;
left: 10%;
width: 80%;
height: fit-content;
padding: 10px;
box-shadow: 0px 5px 9px -7px #555;
border-radius: 10px;
margin: 0 auto;
z-index: 999;

.title{
    font-size: 20px;
    text-align: center;
    padding: 5px 10px;
    font-weight: 600;
    color: #555;
    text-transform: uppercase;
    
}
.linkcontaner{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    justify-content: space-between;
    .item{
        width: 28%;
        h2{
            font-weight: 600;
            color: #ff5c00;
            font-size: 12px;
            text-align: center;
           
        }
        p{
            text-align: center;
        }
         a{
                display: block;
                font-size: 14px;
                transition: all ease-in .4s;
                font-weight: 500;
                color: #555;
                text-decoration: underline;
                margin: 5px 0;
                &:hover{
                    color: #ff5c00;
                }
            }
    }
}
  
`;