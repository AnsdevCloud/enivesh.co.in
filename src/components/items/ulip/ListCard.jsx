import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ListCard = ({ data }) => {
    return (
        <Container>
            <p>{data.title}</p>
            <ul>
                {
                    data.title === "ABOUT" ? <>
                        {
                            data.list.map((lidata, index) => {
                                return <Link key={index} to={"/privacy"}>
                                    <li >{lidata}</li>
                                </Link>
                            })
                        }
                    </> : data.list.map((lidata, index) => {
                        return <li key={index}>{lidata}</li>
                    })
                }

            </ul>

        </Container>
    )
}

export default ListCard
const Container = styled.div`
    width: fit-content;
    max-width: 300px;
    color: #000;
    padding: 10px 20px;
    p{
        font-weight: 500;
        color: #ff5c00;
        padding: 5px 0;
        text-transform: uppercase;
        letter-spacing: 1px;

    }
    ul{
        list-style: none;
        font-size: 12px;
        font-weight: 400;
        li{
            padding: 5px  0;
            cursor: default;
            letter-spacing: 1px;
        }
    }
    

  
`;