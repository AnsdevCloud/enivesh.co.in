import { Box, Button, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf';
import PdfBox from './PdfBox';
import userDetail from '../../components/test/form.json'
import { useDispatch, useSelector } from 'react-redux';
import { setOTP } from '../../reduxapp/features/userdata/userSlice';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import queryString from 'query-string';
import styled from 'styled-components';
const PDFViewer = ({ pdfUrl }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const daclRedux = useSelector((state) => state.user.daclDoc);
    const [params, setParams] = useState({ param1: v4(), param2: 'enivesh insurance & marketing ' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setOTP(""));

    }, [])

    useEffect(() => {
        if (daclRedux) {
            return;
        } else {
            navigate('/dacl');

        }

    }, [daclRedux])
    const url = "https://firebasestorage.googleapis.com/v0/b/ansdevcloud-4fb95.appspot.com/o/1194_Ravjibhai%20Manilal%20Solanki.pdf?alt=media&token=e1dd47ea-1111-4574-8498-075fc5088720"
    return (
        <Container sx={{ minHeight: "100vh" }}  >
            <Typography component={"h1"} mt={3} variant='h5' fontWeight={600} mb={3} color={"primary"} textAlign={"center"} textTransform={"uppercase"}>DACL Mediclaim Policy</Typography>

            <Grid container mt={3} spacing={2}>

                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 2 }}>
                        <Typography component={"h1"} variant='subtitle1' fontWeight={600} mb={3} color={"primary"} textAlign={"center"} textTransform={"uppercase"}>DACL Employee Details</Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Policy No : <Typography variant='caption' component={"span"} color={"primary"}>{daclRedux?.policynumber} </Typography> </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Sum Insured : <Typography variant='caption' component={"span"} color={"primary"} >{daclRedux?.SumInsured}</Typography></Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Members  Covered : <Typography variant='caption' component={"span"} color={"primary"} >{daclRedux?.members}</Typography></Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Emp ID : <Typography variant='caption' component={"span"} color={"primary"}>{daclRedux?.empid}</Typography> </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Name : <Typography variant='caption' component={"span"} color={"primary"}>{daclRedux?.name}</Typography> </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Phone : <Typography variant='caption' component={"span"} color={"primary"}>{daclRedux?.phone}</Typography> </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>Email : <Typography variant='caption' component={"span"} color={"primary"} >{daclRedux?.email ? daclRedux?.email : "NA"}</Typography> </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}>PDF Password : <Typography variant='caption' component={"span"} color={"primary"} >{daclRedux?.PDFPassword}</Typography></Typography>

                    </Paper>
                    <Paper sx={{ p: 2, mt: 2 }}>
                        <Typography component={"h1"} variant='subtitle1' fontWeight={600} mb={3} color={"primary"} textAlign={"center"} textTransform={"uppercase"}>Benefits for In-patient hospitalisation
                        </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}> {":- "} Room Category coverage upto Single private AC Room  </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}> {":- "} 30 Days for pre-hospitalisation & 60 Days for post-hospitalisation  </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}> {":- "} Maternity coverage upto 50,000 for Normal & C-Section  </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}> {":- "} Zero Sub-limit  </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}> {":- "} Zero Waiting Period   </Typography>
                        <Typography variant='caption' component={"p"} color={"gray"} mt={1.5}> {":- "} Zero Co-payment  </Typography>


                    </Paper>

                    <Button sx={{ mt: 5 }} onClick={() => navigate('/')}>Back Home</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper sx={{ p: 2 }}>
                        <SuctonBtn>

                            <Typography variant='caption' component={"p"}> Click Here to Download E-Card ⬇️</Typography>
                            <Button variant='contained' target='_blank' fullWidth sx={{ m: "10px 0" }} href={daclRedux?.PdfUrl}> Download E-Card</Button>
                        </SuctonBtn>
                        <ImgBox >
                            <embed src={daclRedux?.PdfUrl} style={{ width: "100%", minHeight: "80vh" }} />
                        </ImgBox>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PDFViewer
const ImgBox = styled.div`
width: 100%;
height: 100%;
@media (max-width: 768px) {
    display: none;
}

  
`;
const SuctonBtn = styled.div`
@media (min-width: 768px) {
    display: none;
}
  
`;