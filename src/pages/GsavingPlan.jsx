import React from 'react'
import styled from 'styled-components';
import GHeroSection from '../components/elements/GHeroSection';
import OurParter from '../components/elements/OurParter';
import partners from '../jsondata/insuarnce/lifeinspartner.json'

import Question from '../components/elements/Question';
import CardImg from '../components/elements/CardImg';
import gsaving from '../jsondata/insuarnce/gsavingconsider.json'
import CardDetails from '../components/items/CardDetails';
import Irdai from '../components/items/Irdai';
const GsavingPlan = () => {
    return (
        <Wrapper>
            <GHeroSection />
            <Irdai />

            <OurParter data={partners} />
            <CardDetails />
            <CardImg mainUrl={"/images/gsaving/manreceived.jpg"} cardWidth={"300px"} flexDirection={"row-reverse"} data={gsaving} />
            <Question />

        </Wrapper>
    )
}

export default GsavingPlan
const Wrapper = styled.div`
  
`;