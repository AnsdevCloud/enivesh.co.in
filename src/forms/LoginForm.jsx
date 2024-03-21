import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from '../Firebase/Firebase';
import axios from 'axios';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

const LoginForm = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const [checkUser, setCheckUser] = useState(null);
    const users = [];
    const [formData, setFormData] = useState()
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const SigninWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                handdleAddUserDoc(user)

            }).catch((error) => {
                console.warn(error.message);
            });
    }


    const handdleAddUserDoc = async (e) => {
        const userRef = doc(db, "users", e.uid);
        const docSnap = await getDoc(userRef)
        if (docSnap.exists()) {
            localStorage.setItem("loginUser", JSON.stringify(docSnap.data()));
            navigate('/');
        } else {
            // docSnap.data() will be undefined in this case
            if (e) {
                await setDoc(userRef, {
                    name: e.displayName ? e.displayName : null,
                    email: e.email,
                    profileUrl: e.photoURL ? e.photoURL : null,
                    phone: e.phone ? e.phone : null,
                    job: e.job ? e.job : null,
                    city: e.city ? e.city : null,
                    id: e.uid,
                    role: "User"
                });
            }
            console.warm("No such document!");
        }


    }

    const handleChange = (e) => {
        const {
            target: { value, name },
        } = e;
        setFormData({ ...formData, [name]: value });


    }

    const hadleSignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, formData?.email, formData?.password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                handdleAddUserDoc(user)


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
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
                    <InputField LabelTitle={"Email"} Required={true} onChange={handleChange} name={"email"} Placeholder={"Email"} Type={"email"} />
                </div>
                <div className="list">
                    <InputField LabelTitle={"Password"} Required={true} onChange={handleChange} name={"password"} Placeholder={"Password"} Type={"password"} />

                </div>
                <div className="list">
                    <Button title={"Submit"} funcs={hadleSignIn} Width={'100%'} m={"40px 0"} lpWidth={"50%"} lpP={"5px 20px"} />
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