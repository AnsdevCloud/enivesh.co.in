import { Box, Button, Card, CardMedia, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetSingleBlogFiretore from '../../function/firebasecustumfunc/GetDocFirestore';
import { BlogsContainer } from './css/BlogsContainer';
import HTMLView from './HTMLView';
import EditFunc from '../../function/Editorjs/Edit';

const Show = () => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

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
        <Grid container pt={5} >

            <Grid item xs={0} sm={1.5} md={2}>
                {user?.role === "Admin" || (user?.role === "Author" && user?.id === content?.author?.id) ? <EditFunc data={content} /> : ""}
            </Grid>
            <Grid item xs={12} sm={9} md={8} p={1}>
                {isLoading && <LinearProgress />}
                <Typography variant='h3' mb={2} color={"primary"} component={"h1"} >{content?.title}</Typography>
                <Card>
                    <CardMedia component={"img"} image={content?.coverImageUrl} />

                </Card>
                <BlogsContainer>
                    <HTMLView EditorjsJSON={content?.content?.blocks} />
                </BlogsContainer>
            </Grid>
            <Grid item xs={0} sm={1.5} md={2}></Grid>

        </Grid>
    )
}

export default Show