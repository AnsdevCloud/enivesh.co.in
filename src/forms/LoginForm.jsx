import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import fb from '../Firebase/FireConfig';
import { GoogleAuthProvider } from 'firebase/auth'

var provider = new GoogleAuthProvider();
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
        fb.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                var token = credential.accessToken;

                var user = result.user;
                handdleAddUserDoc(user)


            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    const handdleAddUserDoc = async (e) => {
        const db = fb.firestore()
        var docRef = db.collection("users").doc(e.uid);
        if (e) {
            docRef.get().then((doc) => {
                if (doc.exists) {
                    localStorage.setItem("loginUser", JSON.stringify(doc.data()));
                    navigate('/');
                } else {
                    if (e) {
                        docRef.set({
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
                    localStorage.setItem("loginUser", JSON.stringify({
                        name: e.displayName ? e.displayName : null,
                        email: e.email,
                        profileUrl: e.photoURL ? e.photoURL : null,
                        phone: e.phone ? e.phone : null,
                        job: e.job ? e.job : null,
                        city: e.city ? e.city : null,
                        id: e.uid,
                        role: "User"
                    }));
                    navigate('/');

                }
            }).catch((error) => {
                console.warn("Error getting document:", error);
            });
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
        fb.auth().signInWithEmailAndPassword(formData?.email, formData?.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                handdleAddUserDoc(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
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