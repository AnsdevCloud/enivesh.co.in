import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputField from '../Components/items/ulip/InputField';
import Button from '../components/items/ulip/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ImageCompressor } from 'image-compressor';
// import { updateCurrentUser } from 'firebase/auth';
// import ImageCompressor from 'image-compressor';


const EditDetail = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const navegate = useNavigate();
    const [formData, setFromData] = useState(user);


    const handleChaenge = (e) => {
        const {
            target: { value, name },
        } = e;
        setFromData({ ...formData, [name]: value });
        // console.log(formData);



    }


    const compressImage = async (file) => {
        const options = {
            maxWidth: 800,
            maxHeight: 600,
            quality: 0.6,
            mimeType: 'image/jpeg'
        };

        try {
            const compressedFile = await new ImageCompressor(file, options).compress();
            return compressedFile;
        } catch (error) {
            console.error('Error compressing image:', error);
            return null;
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const fileSize = file.size / 2048; // Size in KB

            if (fileSize > 900) {
                alert('Please upload an image smaller than 900KB');
                return;
            }

            // Upload the image
            const storageRef = ref(storage, `profileimage/${file.name}`);
            // Upload the file and metadata
            // const uploadTask = await uploadBytes(storageRef, file);
            // const downloadUrl = await getDownloadURL(uploadTask?.ref)
            //     .then((url) => {
            //         return url


            //     })
            //     .catch((error) => {
            //         console.log(error.message);
            //     });

            setFromData({ ...formData, profileUrl: downloadUrl })

        }
    }

    const UpdateUserDeatail = async (e) => {
        e.preventDefault();

        // const washingtonRef = doc(db, "users", formData.id);

        if (user) {
            // await updateDoc(washingtonRef, {
            //     name: formData?.name ? formData?.name : user.name ? user.name : "***",
            //     profileUrl: formData?.profileUrl ? formData?.profileUrl : user.profileUrl ? user.profileUrl : "***",
            //     phone: formData?.phone ? formData?.phone : user.phone ? user.phone : "***",
            //     job: formData?.job ? formData?.job : user.job ? user.job : "***",
            //     city: formData?.city ? formData?.city : user.city ? user.city : "***",


            // });
        }
        localStorage.setItem("loginUser", JSON.stringify({
            name: formData?.name ? formData?.name : user.name,
            profileUrl: formData?.profileUrl ? formData?.profileUrl : user.profileUrl,
            phone: formData?.phone ? formData?.phone : user.phone,
            job: formData?.job ? formData?.job : user.job,
            city: formData?.city ? formData?.city : user.city,
            id: formData.id,
            email: user.email,
            role: user.role
        }));
        navegate("/profile");

    }

    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/profile/login');
        }
    }, [])
    return (
        <Wrapper>

            <h3 style={{ marginBottom: "10px", textAlign: "center", fontWeight: 600, color: "#222" }}>Add More Details</h3>

            {/* <form onSubmit={(event) => UpdateUserDeatail(user)}> */}

            <div className="list">

                <InputField value={formData?.name} onChange={(e) => handleChaenge(e)} name={"name"} LabelTitle={"Username"} Required={true} Placeholder={"Username"} Type={"text"} />
            </div>
            <div className="list">
                <InputField value={formData?.city} onChange={(e) => handleChaenge(e)} name={"city"} LabelTitle={"City"} Required={true} Placeholder={"City"} Type={"text"} />

            </div>
            <div className="list">
                <InputField value={formData?.job} onChange={(e) => handleChaenge(e)} name={"job"} LabelTitle={"Work"} Required={true} Placeholder={"Work"} Type={"text"} />

            </div>
            <div className="list">
                <InputField value={formData?.phone} onChange={(e) => handleChaenge(e)} name={"phone"} LabelTitle={"Phone No."} Required={true} Placeholder={"0000000000"} Type={"number"} />

            </div>
            <div className="list">

                <InputField onChange={handleImageUpload} name={"profileUrl"} LabelTitle={"Prifile"} Placeholder={"Username"} Type={"file"} />
            </div>
            <div className="list">
                <Button title={"Change"} Type={"button"} funcs={UpdateUserDeatail} Width={'100%'} m={"40px 0"} lpWidth={"50%"} lpP={"5px 20px"} />
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
    /* bottom: 10px;/ */
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