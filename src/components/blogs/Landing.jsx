import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ReadBlogRealtimeDatabase } from '../../function/firebasecustumfunc/ReadBlogs';
import { Delete } from '@mui/icons-material';
import DeleteBlogBothDatabase from '../../function/firebasecustumfunc/DeleteDataBothDatabase';
import { useNavigate } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs'



const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [blogsArray, setBlogsArray] = useState(null);
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {

        const has = async () => {
            let data = await ReadBlogRealtimeDatabase();
            setBlogsArray(data);
            setTimeout(() => {
                setUpdate(true)
            }, 2000);

        }
        has();


    }, [update])


    return (
        <Container>
            {!update && <LinearProgress />}
            <Grid container spacing={1} p={1}>
                {
                    blogsArray?.map((item) => (
                        <Grid key={item?.id} item xs={12} sm={6} md={4}>
                            <Card>
                                <CardActionArea onClick={() => navigate(item?.bid)}>
                                    <CardMedia height={200} component={"img"} image={item?.coverImageUrl} />
                                    <CardContent>
                                        <Typography>{item?.title}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {/* <IconButton size='small' onClick={() => DeleteBlogBothDatabase(item?.bid)}>
                                        <Delete />
                                    </IconButton> */}
                                    <Typography variant='caption' alignItems={"center"} display={"flex"} flexDirection={"row"} gap={1} ><BsEyeFill />{item?.views}</Typography>


                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }


            </Grid>


        </Container>
    )
}

export default Landing

const Wrapper = styled.div`
width: 100%;
height: 100%;
  
`;