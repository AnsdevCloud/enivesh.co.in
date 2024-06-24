import { Button, Card, CardMedia, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BlogsContainer } from './css/BlogsContainer';
import HTMLView from './HTMLView';

const Preview = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    return (
        <Grid container pt={5} >

            <Grid item xs={0} sm={1.5} md={2}>
                <Button onClick={() => navigate('/blogs/create')}>Back</Button>
            </Grid>
            <Grid item xs={12} sm={9} md={8} p={1}>
                {/* {isLoading && <LinearProgress />} */}
                <Typography variant='h3' mb={2} color={"primary"} component={"h1"} >{state?.title}</Typography>
                <Card>
                    <CardMedia component={"img"} image={state?.coverImageUrl} />

                </Card>
                <BlogsContainer>
                    <HTMLView EditorjsJSON={state?.content?.blocks} />
                </BlogsContainer>
            </Grid>
            <Grid item xs={0} sm={1.5} md={2}></Grid>

        </Grid>
    )
}

export default Preview