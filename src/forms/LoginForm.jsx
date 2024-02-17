import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../Firebase/Firebase';
import axios from 'axios';

const LoginForm = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const [checkUser, setCheckUser] = useState(null);
    const users = [];
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const SigninWithGoogle = async () => {
        const data = "";
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // if (checkUser.uid === user.uid) {
                //     return;
                // } else {
                sendData({
                    username: user.displayName,
                    email: user.email,
                    profileUrl: user.photoURL,
                    uid: user.uid,
                })
                // }



            }).catch((error) => {
                console.warn(error.message);
            });
    }



    const sendData = async (e) => {
        // if (condition) {
        await axios({
            method: 'post',
            url: `https://enivesh-54d95-default-rtdb.asia-southeast1.firebasedatabase.app/users/-Nq7D2OyuQoALehmQjLq.json`,
            data: [e],
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem("loginUser", JSON.stringify({
                username: e.username,
                email: e.email,
                profileUrl: e.profileUrl,
                number: e.phoneNumber,
                mydbid: res.data.name,
                uid: e.uid
            }));
        }, (error) => {
            console.log(error);
        })
        // }
        navigate("/")
    }
    const getData = async () => {
        const val = await axios({
            method: 'get',
            url: 'https://enivesh-54d95-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
        });
        console.log(val);

    }


    useEffect(() => {
        window.scrollTo(0, 0)
        if (user) {
            navigate('/profile')
        }
        return;

    }, [location])
    return (
        <Wrapper>

            <h3 style={{ marginBottom: "10px", textAlign: "center", fontWeight: 600, color: "#222" }}>Login</h3>
            <div className="list">
                <Button title={"Login with Google"} funcs={SigninWithGoogle} Width={'100%'} lpWidth={"100%"} m={"15px 0"} lpP={"5px 20px"} />
            </div>
            <p style={{ textAlign: 'center', margin: "5px 0" }}>or</p>
            <form>
                <div className="list">
                    {/* <span className="label">Email :</span> */}
                    <InputField LabelTitle={"Email"} Required={true} Placeholder={"Email"} Type={"email"} />
                </div>
                <div className="list">
                    <InputField LabelTitle={"Password"} Required={true} Placeholder={"Password"} Type={"password"} />

                </div>
                <div className="list">
                    <Button title={"Submit"} funcs={getData} Width={'100%'} m={"40px 0"} lpWidth={"50%"} lpP={"5px 20px"} />
                </div>
                <div className="list">
                    <p style={{ fontSize: "10px" }}>Create new Account - <Link to={"/profile/signup"}>Sing Up</Link></p>
                </div>
            </form>



        </Wrapper>
    )
}

export default LoginForm

const Wrapper = styled.div`
width: 100%;
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