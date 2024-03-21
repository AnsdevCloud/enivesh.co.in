import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from '../Firebase/Firebase';
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';

const SignUpForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        const {
            target: { value, name },
        } = e;
        setFormData({ ...formData, [name]: value });

    }


    const handleSignUp = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                if (user) {
                    const userRef = (collection(db, "users", user.uid));
                    const featureSnapshot = await addDoc(userRef, {
                        name: null,
                        email: user.email,
                        profileUrl: null,
                        uid: user.uid,
                        role: "User"
                    });
                    console.log(featureSnapshot);

                    // navigate('/');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }

    return (
        <Wrapper>

            <h3 style={{ marginBottom: "10px", textAlign: "center", fontWeight: 600, color: "#222" }}>Sign Up</h3>

            <form>
                <div className="list">
                    {/* <span className="label">Email :</span> */}
                    <InputField LabelTitle={"Email"} Required={true} onChange={handleChange} name={"email"} Placeholder={"Email"} Type={"email"} />
                </div>
                <div className="list">
                    <InputField LabelTitle={"Password"} Required={true} onChange={handleChange} name={"password"} Placeholder={"Password"} Type={"password"} />

                </div>
                <div className="list">
                    <Button title={"Submit"} funcs={handleSignUp} Width={'100%'} m={"40px 0"} lpWidth={"50%"} lpP={"5px 20px"} />
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