import styled from "styled-components";
import HeadingBox from "../items/HeadingBox";
import ItemCard from "../items/ItemCard";
import Button from "../items/ulip/Button";
import { useDispatch } from "react-redux";
import { hadleModelForm } from "../../reduxapp/features/userdata/userSlice";
import FormBtn from "../items/FormBtn";
const CardImg = ({ flexDirection, data, cardWidth, mainUrl, headingColor, headingDefault }) => {
    const dispatch = useDispatch();


    return (
        <Wrapper>
            <HeadingBox colorText={headingColor} defaultText={headingDefault} m={"5px 0"} />
            <CardContainer $flexd={flexDirection}>
                <div className="img_side">
                    <img src={mainUrl} alt="picture" />
                </div>
                <div className="card_side">
                    {
                        data && data.map((item, index) => {
                            return <ItemCard Width={cardWidth} Height={"fit-content"} key={index} data={item} />
                        })
                    }


                </div>
            </CardContainer>
            {/* <Button funcs={() => dispatch(hadleModelForm(true))} title={"Free Consultation"} Width={'80%'} m={'20px 10%'} lpWidth={"20%"} lpP={"10px 20px"} lpM={"20px 40%"} /> */}
            <FormBtn InputName1={"phone"} BtnName={"Free Consultation"} Label1={"Phone"} InputType1={"number"} InputName2={"pincode"} Label2={"Pincode"} InputType2={"number"} InputName3={"email"} Label3={"Email"} InputType3={"email"} />

        </Wrapper>
    )
}

export default CardImg
const Wrapper = styled.div`
  width: 90%;
height: fit-content;
padding: 10px;
margin: 20px auto;
box-shadow: 0px 0px 9px -7px #1a1a1a;
border-radius: 10px;
overflow: hidden;

`;

const CardContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: ${props => props.$flexd ? props.$flexd : ""};
gap: 2%;
.img_side{
    width: 40%;
    height: 100%;
    padding: 20px;
    overflow: hidden;
    img{
        width: 100%;
        border-radius: 10px;
    }

}
  
  .card_side{
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    justify-content: space-evenly;
    @media (max-width:426px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x:auto;

  }
  }
  
  @media (max-width:768px) {
    .img_side{
        display: none;
    }
    .card_side{
        width: 100%;
        padding: 10px;
    }
    
  }
   
`;