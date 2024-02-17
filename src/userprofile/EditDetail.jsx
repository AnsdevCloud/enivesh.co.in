import React, { useState } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditDetail = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const navegate = useNavigate();
    const [formData, setFromData] = useState(user);


    const handleChaenge = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFromData({ ...formData, [name]: e.target.value });


    }

    const UpdateUserDeatail = async (event) => {
        // event.preventDefault();
        const url = `https://enivesh-54d95-default-rtdb.asia-southeast1.firebasedatabase.app/users/${event.mydbid}.json`
        const response = await axios.patch(url, formData)
        const red = await axios.get(url)
        const updateUser = red.data
        if (updateUser) {
            localStorage.setItem("loginUser", JSON.stringify(updateUser));
            navegate("/profile")
        }

    }

    return (
        <Wrapper>

            <h3 style={{ marginBottom: "10px", textAlign: "center", fontWeight: 600, color: "#222" }}>Add More Details</h3>

            {/* <form onSubmit={(event) => UpdateUserDeatail(user)}> */}

            <div className="list">

                <InputField funcs={(e) => handleChaenge(e)} name={"username"} LabelTitle={"Username"} Required={true} Placeholder={"Username"} Type={"text"} />
            </div>
            <div className="list">
                <InputField funcs={(e) => handleChaenge(e)} name={"city"} LabelTitle={"City"} Required={true} Placeholder={"City"} Type={"text"} />

            </div>
            <div className="list">
                <InputField funcs={(e) => handleChaenge(e)} name={"work"} LabelTitle={"Work"} Required={true} Placeholder={"Work"} Type={"text"} />

            </div>
            <div className="list">
                <InputField funcs={(e) => handleChaenge(e)} name={"number"} LabelTitle={"Phone No."} Required={true} Placeholder={"0000000000"} Type={"number"} />

            </div>
            <div className="list">

                <InputField funcs={(e) => handleChaenge(e)} name={"profile"} LabelTitle={"Prifile"} Placeholder={"Username"} Type={"file"} />
            </div>
            <div className="list">
                <Button title={"Change"} Type={"button"} funcs={(event) => UpdateUserDeatail(user)} Width={'100%'} m={"40px 0"} lpWidth={"50%"} lpP={"5px 20px"} />
            </div>

            <Link className='backBtn' to={-1}>Back</Link>

            {/* </form> */}



        </Wrapper>
    )
}

export default EditDetail
const Wrapper = styled.div`
position: relative;
.backBtn{
    position: absolute;
    bottom: 10px;
    font-size: 10px;
    color: #1a1a1a;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    
}
   .list{
    padding: 10px 20px;
     .label{
        font-size: 10px ;
        color: #666;
        font-weight: 600;
        margin: 5px auto;
    }
    .title{
        font-size: 1vmax;
        padding: 10px 0;
        font-weight: 600;
        color: #1a1a1a;
        span{
            font-size: 10px;
            color: #666;

        }

    }
   }
     @media (max-width: 769px) {
        width: 100%;
        height: fit-content;
      .list{
        .title{
            font-size: 12px;
        }
      }
    }

  
`;