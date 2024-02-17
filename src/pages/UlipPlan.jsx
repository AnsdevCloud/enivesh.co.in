
import Box from '../Components/Elements/Box'
import SnapshotBox from '../components/elements/SnapshotBox'
import MaximizeReturn from '../components/elements/MaximizeReturn'
import OurParter from '../components/elements/OurParter'
import HeadingBox from '../components/items/HeadingBox'
import styled from 'styled-components'
import DynamicCard from '../components/elements/DynamicCard';
import benefitsData from '../jsondata/AccordionBenefits.json'
import ListBoxSlider from '../components/elements/ListBoxSlider'
import IconBox from '../components/elements/IconBox'
import TextDocument from '../components/elements/TextDocument'
import Button from '../components/items/ulip/Button'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hadleModelForm } from '../reduxapp/features/userdata/userSlice'
import partners from '../jsondata/insuarnce/lifeinspartner.json'
import Irdai from '../components/items/Irdai'

const UlipPlan = () => {
    const dispatch = useDispatch();
    const haddleToggleModel = () => {
        dispatch(hadleModelForm(true))
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Box />
            <Irdai />

            <OurParter data={partners} />
            <Button funcs={haddleToggleModel} title={"Free Consultation"} Width={'80%'} m={'20px 10%'} lpWidth={"20%"} lpP={"10px 20px"} lpM={"20px 40%"} />

            <HeadingBox colorText={"ULIP"} defaultText={"Benefits"} />

            <FlexBox>
                <Benifits >

                    {
                        benefitsData && benefitsData.map((item) => {
                            return <>
                                <DynamicCard key={item.id} id={item.id} Wdth={'200px'} Img={item.image} title={item.title} discription={item.discription} />
                            </>


                        })
                    }
                    <Button title={"Consult now "} funcs={haddleToggleModel} Width={'80%'} m={'20px 10%'} lpWidth={"50%"} lpP={"10px 20px"} lpM={"20px 25%"} />
                </Benifits>
                <img id='big' src="/images/ulipplan/benifits.png" alt="imga" />
            </FlexBox>


            <SnapshotBox modelfuncs={haddleToggleModel} />
            <HeadingBox colorText={"We are"} defaultText={"Independent"} />
            <FlexBoxWrap>
                <IconBox Icon={<img src='/images/ulipplan/workyou.svg' alt='icon' />} title={"We work for you "} discription={"Not for the insurance companies. From identifying your financial goals and evaluating the associated risks, we create customized insurance solution that suits to your needs."} />
                <IconBox Icon={<img src='/images/ulipplan/experties.svg' alt='icon' />} title={"Experties "} discription={"With 15 Years of experience in the industry, We have a deep understanding of insurance products and can provide expert guidance"} />
                <IconBox Icon={<img src='/images/ulipplan/trackrecord.svg' alt='icon' />} title={"Proven Track record"} discription={"We have a proven track record of helping clients securing the right insurance for their needs."} />
                <IconBox Icon={<img src='/images/ulipplan/assistance.svg' alt='icon' />} title={"Claim Assistance "} discription={"In an unfortunate event we are committed to provide 100% Claim assistance."} />
            </FlexBoxWrap>
            <Button title={"Connect with Us "} funcs={haddleToggleModel} Width={'80%'} m={'20px 10%'} lpWidth={"30%"} lpP={"10px 20px"} lpM={"20px 35%"} />

            <TextDocument />
            <ListBoxSlider />
            <MaximizeReturn />
            <Button title={"Consult now "} funcs={haddleToggleModel} Width={'80%'} m={'20px 10%'} lpWidth={"30%"} lpP={"10px 20px"} lpM={"20px 35%"} />

        </div>
    )
}

export default UlipPlan

const FlexBox = styled.div`
width: 90%;
margin: 0 5%;
display: flex;
justify-content: space-evenly;
border-radius: 10px;
padding: 10px 0;

#big{
     transform:rotate(180deg)
}

img{
   display: none;
    @media (min-width:1024px) {
        display: block;
        width: 450px ;
        height: 500px;
        border-radius: 10px;
       
    }
}


  
`;
const FlexBoxWrap = styled.div`
display: flex;
width: ${props => props.$width ? props.$width : "96%"};
margin: 10px 2%;
flex-wrap: wrap;
justify-content : space-evenly;
 gap: 40px;

 @media (min-width:1024px)  {
 gap: 10px;
    }
    @media (min-width:1440px)  {
 gap: 30px;
    }
`;
const Benifits = styled(FlexBoxWrap)`
 
h1{
    font-size: .8rem;
}
p{
    font-size: .6rem;
    line-height: 15px;
}
img{
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
@media (min-width:1024px)  {
 gap: 25px;
    }
    @media (min-width:1440px)  {
 gap: 50px;
    }
`;