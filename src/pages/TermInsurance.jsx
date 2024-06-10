import styled from "styled-components";
import HeroSection from "../components/elements/HeroSection";
import NavigateProgress from "../components/elements/NavigateProgress";
import Card from "../components/elements/Card";
import OurParter from "../components/elements/OurParter";
import CardTextBox from "../components/elements/CardTextBox";
import CardImg from "../components/elements/CardImg";
import Question from "../components/elements/Question";
import Button from "../components/items/ulip/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hadleModelForm } from "../reduxapp/features/userdata/userSlice";
import Qustions from "../jsondata/QusAns.json"
import partners from '../jsondata/insuarnce/lifeinspartner.json'
import whychoiceData from '../jsondata/terminsurance_whychoice.json'
import Irdai from "../components/items/Irdai";
import FormBtn from "../components/items/FormBtn";

const TermInsurance = ({ haddleToggleModel }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <HeroSection />
      {/* <Button funcs={() => dispatch(hadleModelForm(true))} title={"Free Consultation"} Width={'80%'} m={'20px 10%'} lpWidth={"20%"} lpP={"10px 20px"} lpM={"20px 40%"} /> */}
      <FormBtn BtnName={"Free Consultation"} InputName1={"phone"} Label1={"Phone"} InputType1={"number"} InputName2={"pincode"} Label2={"Pincode"} InputType2={"number"} InputName3={"email"} Label3={"Email"} InputType3={"email"} />

      <Irdai />

      <NavigateProgress />
      <Card />
      <OurParter data={partners} />
      <CardImg mainUrl={"/images/eniveshicon/water1.png"} cardWidth={235} headingColor={"Why consider "} headingDefault={"Guaranteed plans ?"} data={whychoiceData} />
      <CardTextBox />
      <Question Qustions={Qustions} />
    </Wrapper>
  )
}

export default TermInsurance
const Wrapper = styled.div`
  width: 100%;
  overflow-y:auto ;
  overflow-x: hidden;
  @media (max-width:768px) {
    padding-bottom: 100px;
  }
  

`;