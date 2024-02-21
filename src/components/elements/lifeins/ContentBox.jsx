import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import lifeInffo from '../../../jsondata/insuarnce/lifeinsuranceinfformation.json'

const ContentBox = ({ data }) => {
    const [updateData, setData] = useState(lifeInffo[0]);
    const processDescription = (ite) => {
        // Apply bold style
        ite = ite.replace(/\*\*(.*?)\*\*/g, '<p  style="font-weight: 600; margin: 5px 0">$1</p>');

        return <li dangerouslySetInnerHTML={{ __html: ite }} />;
    };
    const processDescription2 = (ite) => {
        // Apply bold style
        ite = ite.replace(/\*\*(.*?)\*\*/g, '<span  style="font-weight: 600; margin: 5px 0">$1</span>');

        return <h1 style={{ margin: 2 }} dangerouslySetInnerHTML={{ __html: ite }} />;
    };
    useEffect(() => {
        if (data === (null || undefined)) {
            setData(lifeInffo[0])
        } else {

            setData(data)
        }
        return;
    }, [data])
    return (
        <Wrapper>




            {updateData && <div id={updateData?.id}>  {processDescription2(updateData?.title)}</div>}
            {
                updateData && updateData?.dis?.map((ite, index) => {
                    return <ul key={index}>
                        {processDescription(ite)}
                    </ul>
                })
            }



        </Wrapper>
    )
}

export default ContentBox
const Wrapper = styled.div`
  h1{
    position: sticky;
    top: -5px;
    font-size: 1.5vmax;
    padding: 5px 0;
    font-weight: 500;
    color: #ff5c00;
    background-color: #fff;
  }
  ul{
    list-style: none;
    li{
        margin: 10px;
        font-size: 1vmax;
    }
  }


  
`;