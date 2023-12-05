import styled from "styled-components";
import HeroSection from "../components/elements/HeroSection";
import NavigateProgress from "../components/elements/NavigateProgress";

const TermInsurance = () => {
    return (
        <Wrapper>
            <HeroSection />
            <NavigateProgress />
        </Wrapper>
    )
}

export default TermInsurance
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y:auto ;
  overflow-x: hidden;

`;