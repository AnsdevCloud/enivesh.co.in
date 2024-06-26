import { Avatar, Badge, Box, Button, Card, CardMedia, Grid, IconButton, LinearProgress, Stack, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import GetSingleBlogFiretore from '../../function/firebasecustumfunc/GetDocFirestore';
import { BlogHeader, BlogsContainer } from './css/BlogsContainer';
import HTMLView from './HTMLView';
import EditFunc from '../../function/Editorjs/Edit';
import { grey } from '@mui/material/colors';
import { AutoStories, Comment, Edit, PhotoFilter, Visibility } from '@mui/icons-material';
import { editorJsParser } from 'editorjs-data-parser';
import ShareButton from '../postcreate/ShareComponent';
import FollowingCheck from './FollowingCheck';
import AuthorAccMenu from './AuthorAccMenu';
import LikeButton from './likes/LikeButton';
import CommentContainer from './comments/CommentContainer';


const Show = () => {

    const user = JSON.parse(localStorage.getItem("loginUser"));
    const navigate = useNavigate();
    const location = useLocation();
    const { bid } = useParams();
    const [content, setContent] = useState(null)
    const [isLoading, setLosding] = useState(true)

    const getData = async () => {
        if (!content || content?.id !== bid) {
            let data = await GetSingleBlogFiretore(bid)
            if (data) {
                navigate(`?${data?.title}`)

                setLosding(false);

                setContent(data)
            } else {
                navigate("/blogs");
            }
        }




    }
    useEffect(() => {
        getData();
    }, [bid])

    const convertTimestampToDate = (timestamp) => {
        // Create a new Date object using the 13-digit timestamp (milliseconds)
        const date = new Date(timestamp);

        // Format the date in Indian format (DD-MM-YYYY HH:MM:SS)
        const formattedDate = date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        const formattedTime = date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // 24-hour format
        });

        return `${formattedDate} ${formattedTime}`;
    };


    const extractTextFromHTML = () => {
        if (content?.content?.blocks) {
            let htmlparse = editorJsParser(content?.content?.blocks)
            const div = document.createElement('div');
            div.innerHTML = htmlparse;

            let time = calculateReadTime(div.textContent || div.innerText || '');

            return time + " min";
        }

    };
    const calculateReadTime = (text) => {
        const wordsPerMinute = 200; // Average reading speed
        const words = text.trim().split(/\s+/).filter(word => word).length; // Split by whitespace and filter out empty strings
        const readTimeMinutes = Math.ceil(words / wordsPerMinute);
        return readTimeMinutes;
    };


    // Function to handle the button click
    const handleClick = () => {

    };
    return (
        <Grid container pt={5} >

            <Grid item xs={0} sm={1.5} md={2}>

            </Grid>
            <Grid item xs={12} sm={9} md={8} p={1}>
                {isLoading && <LinearProgress />}

                <BlogsContainer>

                    <Typography variant='h3' mb={2} color={"primary"} component={"h1"} fontWeight={600} >{content?.title}</Typography>

                    <BlogHeader>
                        <Grid container spacing={1} >
                            <Grid item xs={12} md={6}>
                                <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                                    {/* <Avatar sx={{ width: 25, height: 25 }} title='Author' alt='profile' src={content?.author?.profileUrl} /> */}
                                    <AuthorAccMenu imageSrc={content?.author?.profileUrl} aid={content?.author?.id} />
                                    <Typography variant='subtitle2' component={"span"} fontWeight={600} color={grey[600]}> {content?.author?.name}</Typography>
                                    {/* <Button size='small' sx={{ fontSize: 8, fontWeight: 600 }} variant='outlined' color='info'>Follow</Button> */}


                                    <FollowingCheck aid={content?.author?.id} currentUserId={user?.id} />
                                    <Box>
                                        <LikeButton currentUserId={user?.id} postId={bid} />
                                        <Typography variant='caption' fontWeight={600} color={"error"}>{content?.likes?.length}</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='caption' component={"p"} textAlign={{ xs: "left", sm: "right" }} fontWeight={600} color={grey[400]}>Publish : {convertTimestampToDate(content?.timestamp)} </Typography>

                            </Grid>
                            <Grid item xs={12} >
                                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1}>
                                    <Typography display={{ xs: "none", md: "block" }} variant='caption' component={"p"} textAlign={"right"} fontWeight={600} color={grey[400]}>Read Only : {extractTextFromHTML()} </Typography>

                                    <Button size='small' sx={{ display: { md: "none" }, fontSize: 10, fontWeight: 600 }} disabled startIcon={<AutoStories fontSize='10px' />}>
                                        {extractTextFromHTML()?.toLowerCase()}
                                    </Button>
                                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>

                                        {user?.email === content?.author?.email && <Tooltip title='Edit Blog'>
                                            <IconButton size='small' onClick={() => navigate('/blogs/create', { state: { editobject: content, url: location.pathname } })}>
                                                <Edit fontSize='10px' />
                                            </IconButton>
                                        </Tooltip>}

                                        <Tooltip title='Generate Post'>
                                            <IconButton size='small' color='primary' onClick={() => navigate('/ai_post_gen', { state: { data: content, url: location.pathname } })}>
                                                <PhotoFilter fontSize='10px' />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title='Comments'>
                                            <Badge badgeContent={content?.comments?.length} color="primary">
                                                <IconButton size='small' onClick={handleClick} >
                                                    <Comment fontSize='10px' />
                                                </IconButton>
                                            </Badge>
                                        </Tooltip>
                                        <ShareButton onlyIcon url={`https://enivesh.co.in/blogs/${bid}`} title={content?.title} />

                                        <Button disabled size='small' startIcon={<Visibility fontSize='10px' />} title={content?.views} >{content?.views}</Button>
                                    </Stack>

                                </Stack>
                            </Grid>
                        </Grid>
                    </BlogHeader>
                    <Card>
                        <CardMedia component={"img"} image={content?.coverImageUrl} />

                    </Card>
                    <HTMLView EditorjsJSON={content?.content?.blocks} />
                    <CommentContainer currentUserId={user?.id} postId={bid} />
                </BlogsContainer>
            </Grid>
            <Grid item xs={0} sm={1.5} md={2}></Grid>

        </Grid>
    )
}

export default Show