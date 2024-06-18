import { Box, Button, Card, CardMedia, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetSingleBlogFiretore from '../../function/firebasecustumfunc/GetDocFirestore';
import { BlogsContainer } from './css/BlogsContainer';

const Show = () => {
    const { bid } = useParams();
    const [content, setContent] = useState(null)
    const [isLoading, setLosding] = useState(true)

    const getData = async () => {
        let data = await GetSingleBlogFiretore(bid)
        setLosding(false);
        setContent(data)

    }
    useEffect(() => {
        getData();
    }, [bid])

    return (
        <Grid container>

            <Grid item xs={0} sm={1.5} md={2}></Grid>
            <Grid item xs={12} sm={9} md={8} p={1}>
                {isLoading && <LinearProgress />}
                <Typography variant='h3' mb={2} color={"primary"} component={"h1"} >{content?.title}</Typography>
                <Card>
                    <CardMedia component={"img"} image={content?.coverImageUrl} />

                </Card>
                <BlogsContainer>
                    <Box dangerouslySetInnerHTML={{ __html: content?.content }} />
                </BlogsContainer>
            </Grid>
            <Grid item xs={0} sm={1.5} md={2}></Grid>


        </Grid>
    )
}

export default Show