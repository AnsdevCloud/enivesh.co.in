import { Box, Container, Grid, Stack, Typography, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostImageGen from './PostEditor'
import { useLocation } from 'react-router-dom'

const PostContainer = () => {
    const { state } = useLocation();

    const [content, setContent] = useState([]);
    const [title, settitle] = useState('');
    const [dis, setdis] = useState('');
    const [image, setimage] = useState('');

    useEffect(() => {
        if (state?.data) {
            setContent(state?.data)

        }
        return;
    }, [state])

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setimage(reader.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <Wrapper>
            <Container>

                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <Stack m={2} bgcolor={"#f9e1d4"} p={1} borderRadius={1}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={8}>
                                    <Box>
                                        <Typography variant='caption' component={"p"} m={1}>Add Your Headline</Typography>
                                        <TextField
                                            id=""
                                            fullWidth
                                            label="Headline"
                                            name='title'
                                            value={title}
                                            onChange={(e) => settitle(e.target.value)}
                                            size='small'

                                        />

                                    </Box>
                                    <Box>
                                        <Typography variant='caption' component={"p"} m={1}>Add Your Sub Headline</Typography>
                                        <TextField
                                            id=""
                                            fullWidth
                                            name='dis'
                                            label="Sub Headline"
                                            value={dis}
                                            onChange={(e) => setdis(e.target.value)}
                                            size='small'

                                        />

                                    </Box>
                                    <Box>
                                        <Typography variant='caption' component={"p"} m={1}>Add Your Image</Typography>
                                        <TextField
                                            id=""
                                            name='image'
                                            onChange={handleImage}
                                            type='file'
                                            size='small'

                                        />

                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}></Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                    {[1, 2, 3, 4].map((index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <PostImageGen data={content} title={title} image={image} discription={dis} />
                        </Grid>
                    ))

                    }
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default PostContainer

const Wrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
  
`;