import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDown = ({ active }) => {
    return (
        <Wrapper onMouseLeave={active}>
            <h1 className="title">LIFE INSURANCE</h1>
            <div className="linkcontaner">
                <div className="item">
                    <h2>Term Insurance</h2>
                    <Link to={"/term_insurance"}>React Js</Link>
                    <Link>React Js</Link>
                </div>

                <div className="item">
                    <h2>Term Insurance</h2>
                    <Link>React Js</Link>
                    <Link>React Js</Link>
                </div>

                <div className="item">
                    <h2>Term Insurance</h2>
                    <Link>React Js</Link>
                    <Link>React Js</Link>
                </div>
            </div>
        </Wrapper>
    )
}

export default DropDown
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
z-index: 99;

.title{
    font-size: 20px;
    text-align: center;
    padding: 5px 10px;
    font-weight: 600;
    color: #555;
    
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
            font-size: 16px;
           
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