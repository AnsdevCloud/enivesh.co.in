import React, { useEffect } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../Firebase/Firebase';
import axios from 'axios';

const SignUpForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const SigninWithGoogle = async () => {
        const data = "";
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                sendData({
                    gender: "",
                    name: user.displayName,
                    email: user.email,
                    profileUrl: user.photoURL,
                    number: user.phoneNumber,
                    id: user.uid,
                })
                localStorage.setItem("loginUser", JSON.stringify({
                    gender: "",
                    name: user.displayName,
                    email: user.email,
                    profileUrl: user.photoURL,
                    number: user.phoneNumber,
                    id: user.uid,
                }));





            }).catch((error) => {
                console.warn(error.message);
            });


    }
    const jdata = {
        name: "Google Nishad",
        phone: 8081741443,
    }
    const sendData = async (e) => {
        await axios({
            method: 'post',
            url: 'https://enivesh-54d95-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
            data: e,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        });
        navigate("/")
    }
    // const getData = async () => {
    //     const data = await axios({
    //         method: 'get',
    //         url: 'https://enivesh-54d95-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
    //     });
    //     console.log(data);
    // }




    return (
        <Wrapper>

            <h3 style={{ marginBottom: "10px", textAlign: "center", fontWeight: 600, color: "#222" }}>Sign Up</h3>

            <form>
                <div className="list">
                    {/* <span className="label">Email :</span> */}
                    <InputField LabelTitle={"Email"} Required={true} Placeholder={"Email"} Type={"email"} />
                </div>
                <div className="list">
                    <InputField LabelTitle={"Password"} Required={true} Placeholder={"Password"} Type={"password"} />

                </div>
                <div className="list">
                    <Button title={"Submit"} Width={'100%'} m={"40px 0"} lpWidth={"50%"} lpP={"5px 20px"} />
                </div>
                <div className="list">
                    <p style={{ fontSize: "10px" }}>You've Already Account - <Link to={"/profile/login"}>Sing in</Link></p>
                </div>
            </form>



        </Wrapper>
    )
}

export default SignUpForm

const Wrapper = styled.div`
  
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

@media (max-width:425px) {
    padding: 10px 20px;
}

`;