import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ads from '../../../jsondata/insuarnce/health/HerosectionOption.json'
import TermInsurance from "../../../jsondata/terminusraunce_herosection.json"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button, Card, CardContent, Stack, Typography, CardMedia, TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setQuikInsForm, setWhatsAppMail } from "../../../reduxapp/features/userdata/userSlice";
import { v4 } from "uuid";
import axios from "axios";
const HeroSectionHealth = () => {
    const GquikForm = useSelector((state) => state.user.quikInsuranceForm);
    const mailUpdate = useSelector((state) => state.user.mailupdate);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [data, setData] = useState(TermInsurance);
    const [disData, setDisplayData] = useState("");
    const [quikForm, setQuikForm] = useState([]);
    const handleToggle = (e) => {
        setActive(!active)
        setDisplayData(e.text)

    }
    const handleChange = (e) => {
        let value = e.target.value;
        setQuikForm({ ...quikForm, [e.target.name]: value })

    }



    const handleQuikInsForm = () => {
        if (quikForm.phone || GquikForm.phone) {

            if (quikForm.phone === GquikForm.phone) {
                alert('Already Submited')

            } else {
                dispatch(setQuikInsForm(quikForm));
                handleSubmitMail();
            }


        } else {
            alert('Plz Enter some details')
        }
    }

    const handleSubmitMail = () => {
        if (mailUpdate?.sent && mailUpdate?.whatsapp) {
            navigate("/insurance");
        } else {
            if (quikForm.phone) {
                const options = {
                    method: 'POST',
                    url: 'https://public.doubletick.io/whatsapp/message/template',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        Authorization: 'key_2sjcXWa3Ti'
                    },
                    data: {
                        messages: [
                            {
                                from: '+919833888817',
                                to: `+919820551112`,
                                messageId: v4(),
                                content: {
                                    templateName: 'sitequiksubmit_v3',
                                    language: 'en',
                                    templateData: {
                                        header: { type: 'TEXT', placeholder: 'Enivesh' },
                                        body: {
                                            placeholders: [
                                                `${quikForm?.phone}`,
                                                `${quikForm?.email ? quikForm?.email : "..."}`,
                                                `${quikForm?.pincode ? quikForm?.pincode : "..."}`,
                                                `${quikForm?.phone}`
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    }
                };

                axios
                    .request(options)
                    .then(function (response) {
                        dispatch(setWhatsAppMail({
                            whatsapp: true,
                            sent: true,
                        }))
                        navigate('/insurance')

                    })
                    .catch(function (error) {
                        console.log(error?.errrMessage);
                    })
            } else {
                alert("Phone Number is Required !")
            }
        }
    }
    return (
        <Wrapper>
            <div className="left_side">
                <div className="page_title">
                    <h1>Health <span>INSURANCE</span></h1>
                    <p className="tagline"> </p>
                </div>
                <div className="lookimag">
                    <Card elevation={0} sx={{ m: 1 }}>
                        <CardMedia
                            sx={{ height: 350, }}
                            image="images/healthins/thdm.jpg"
                            title="green iguana"
                        />

                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange} value={GquikForm ? GquikForm?.phone : quikForm?.phone} name="phone" label="Phone" fullWidth size="small" type="number" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange} value={GquikForm ? GquikForm?.pincode : quikForm?.pincode} name="pincode" label="Pincode" fullWidth size="small" type="number" />
                                </Grid>
                                <Grid item xs={12} sm={12} >
                                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={{ sm: "nowrap", xs: "wrap" }} gap={1}>
                                        <TextField onChange={handleChange} value={GquikForm ? GquikForm?.email : quikForm?.email} name="email" label="Email" fullWidth size="small" type="email" />
                                        <Button onClick={handleQuikInsForm} size="small" variant="contained" fullWidth>View Plans</Button>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </div>

                <MainTagline>
                    <h1> COMPLEXITIES TURNS</h1>
                    <Typography textAlign={"center"} color={"secondary"} fontSize={"2vmax"} fontWeight={900} component={"p"} >
                        INTO SIMPLICITY
                    </Typography>
                    <Typography textAlign={"center"} m={1} variant="caption" component={"p"} color="initial">Choosing the right health insurance plan requires careful evaluation beyond premium cost.
                    </Typography>
                </MainTagline>

                <div className="navigate_box">
                    {!active && <Stack flexDirection={"row"} gap={2} justifyContent={"space-evenly"} flexWrap={"wrap"} alignItems={"center"}>
                        {
                            ads && ads.map((item, index) => {
                                return <Stack minWidth={105} alignItems={"center"} gap={1} justifyContent={"center"} height={80} key={index} flexDirection={"column"} bgcolor={"#fff"} p={1.2} borderRadius={2} boxShadow={"0px 0px 9px -7px #1a1a1a"}>
                                    <Box sx={{ width: "100%", height: "80%" }}>
                                        <img style={{ width: "100%", height: "100%" }} src={item?.imgUrl} />
                                    </Box>
                                    <Typography textAlign={"center"} variant="caption" fontSize={10} fontWeight={600} component={"span"} >
                                        {item?.name}
                                    </Typography>
                                </Stack>



                            })

                        }


                    </Stack>}
                    {
                        active && <div className="text_container">
                            <p>{disData}</p>
                            <FaArrowCircleLeft onClick={handleToggle} />
                        </div>
                    }
                </div>
            </div>
            <div className="right_side">
                <Box>
                    <Card elevation={1}>
                        <CardMedia
                            sx={{ height: 500 }}
                            image="images/healthins/thdm.jpg"
                            title="green iguana"
                        />

                        <CardContent >
                            <Grid container spacing={1} >
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange} value={GquikForm ? GquikForm?.phone : quikForm?.phone} name="phone" label="Phone" fullWidth size="small" type="number" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange} value={GquikForm ? GquikForm?.pincode : quikForm?.pincode} name="pincode" label="Pincode" fullWidth size="small" type="number" />
                                </Grid>
                                <Grid item xs={12} sm={12} >
                                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={{ sm: "nowrap", xs: "wrap" }} gap={1}>
                                        <TextField onChange={handleChange} value={GquikForm ? GquikForm?.email : quikForm?.email} name="email" label="Email" fullWidth size="small" type="email" />
                                        <Button onClick={handleQuikInsForm} size="small" variant="contained" fullWidth>View Plans</Button>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        </Wrapper>
    )
}

export default HeroSectionHealth
const Wrapper = styled.div`
width: 100%;
min-height: 85vh;
position: relative;
display: flex;
margin: 10px 0;
align-items: center;
.left_side{
    min-width: 60%;
    .page_title{
        font-size: 12px;
        text-align: center;
        width: 100%;
        position: relative;
        /* margin: 10px; */
        h1{
               
                font-weight: 600;
            span{
                font-weight: 600;
                color: #ff5c00;
            }
            
        }
    .tagline{

        font-size: 12px;
        color: #444;
        font-weight: 500;
        }
        @media (max-width:768px) {
      margin-top: 20px;
            h1{
                font-size: 16px;
            }
           .tagline{
    
        font-size: 8px;
        
        }
            
        }
    }
    .lookimag{
        display: none;
        position: relative;
        width: 100%;
        height: fit-content;
        align-items: center;
        justify-content: center;
        img{
            margin-top: 70px;
            width: 260px;
        }
        @media (max-width:376px){
               
            img{
                margin-top: 60px;
            }
        }

        @media (max-width:768px){
               
            display: flex;
        }
    }
    .main_tagline{
        position: relative;
        font-size: 5rem;
        margin: 20px 0;
        h1{
            font-weight: 700;
            color: #ff5c00;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            .termplan{
                font-size: 40px;
                display: block;
                color: #444;
                font-weight: 600;
            .priority{
                display: block;
                font-size: 40px;
                font-weight: 600;
                margin: 5px 0;
                color: #ff5c00;

            }
        }     
        }

        @media (max-width:768px) {
            h1{
                font-size: 4rem;
                .termplan{
                    font-size: 20px;
                        .priority{
                        font-size: 20px;

                        }
            
                }
            }
            
        }
        
    }
    .navigate_box{
        position: relative;
        width: 610px;
        margin: 0 auto;
        padding: 20px 20px;
        border: 1px solid rgba(255, 163, 15, 0.50);
        background: rgba(255, 163, 15, 0.10);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap:20px;       
        &::-webkit-scrollbar{
            width: 2px;
            background-color: #ff5c00;
        }
        &::-webkit-scrollbar-track{
        background-color: transparent;
        }
        @media (max-width:768px) {
        width: 90%;
        height: fit-content;

            
        }
    }

}

  .right_side{
    padding: 20px;
    img{
        width: 450px;
        border-radius: 10px;
    }

    @media (max-width:768px) {
        display: none;
    }
  }

  @media (max-width:768px) {
    min-height: fit-content;
  }
`;

const MainTagline = styled.div`
    position: relative;
        font-size: 2vmax;
        margin: 20px 0;
        h1{
            font-weight: 700;
            color: #ff5c00;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            .termplan{
                font-size: 40px;
                display: block;
                color: #444;
                font-weight: 600;
                .priority{
                    display: block;
                    font-size: 40px;
                    font-weight: 600;
                    margin: 5px 0;
                    color: #ff5c00;

                }
            }     
        }

        @media (max-width:768px) {
            h1{
                font-size: 3vmax;
                .termplan{
                    font-size: 20px;
                        .priority{
                        font-size: 20px;

                        }
            
                }
            }
            
        }
        
  
`;