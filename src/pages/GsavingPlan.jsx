import React, { useEffect } from 'react'
import styled from 'styled-components';
import GHeroSection from '../components/elements/GHeroSection';
import OurParter from '../components/elements/OurParter';
import partners from '../jsondata/insuarnce/lifeinspartner.json'

import Question from '../components/elements/Question';
import CardImg from '../components/elements/CardImg';
import gsaving from '../jsondata/insuarnce/gsavingconsider.json'
import CardDetails from '../components/items/CardDetails';
import Irdai from '../components/items/Irdai';
import QusAns from '../jsondata/insuarnce/gsavingqusans.json'
import FormBtn from '../components/items/FormBtn';
const GsavingPlan = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Wrapper>
            <GHeroSection />
            <FormBtn BtnName={"Get a Call Back"} InputName1={"phone"} Label1={"Phone"} InputType1={"number"} InputName2={"pincode"} Label2={"Pincode"} InputType2={"number"} InputName3={"email"} Label3={"Email"} InputType3={"email"} />

            <Irdai />
            <OurParter data={partners} />
            <CardDetails />
            <CardImg mainUrl={"/images/gsaving/manreceived.jpg"} cardWidth={235} headingColor={"Why consider "} headingDefault={"Guaranteed plans ?"} flexDirection={"row-reverse"} data={gsaving} />
            <Question Qustions={QusAns} />

        </Wrapper>
    )
}

export default GsavingPlan
const Wrapper = styled.div`
  
`;