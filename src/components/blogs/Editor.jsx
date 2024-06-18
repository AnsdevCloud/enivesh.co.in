import { Add, ExpandMore, Save } from '@mui/icons-material';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Autocomplete, Avatar, Box, Button, CircularProgress, Container, Divider, Grid, IconButton, LinearProgress, Menu, Paper, Select, Skeleton, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddBlogBothDatabase from '../../function/firebasecustumfunc/AddDataBothDatabase';
import UploadBlogCoverFireStorage from '../../function/firebasecustumfunc/UploadBlogCoverFireStorage';
import MyTextEditor from './MyTextEditor';
import { editorJsParser } from 'editorjs-data-parser';
import { BlogsContainer } from './css/BlogsContainer';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const categories = [
    {
        label: "Life Insurance",
    },
    {
        label: "Health Insurance",
    }
]
const MyEditor = () => {
    const userData = localStorage.getItem("loginUser")
    const useUser = JSON.parse(userData);
    const [user, setUserData] = useState(useUser);
    const [jsonData, setJsonData] = useState(null);
    const [editorData, setEditorData] = useState({});
    const [contents, setContents] = useState();
    const [coverImage, setCoverImage] = useState();
    const [coverImgageURL, setCoverImageURL] = useState();
    const [isUploading, setIsUploading] = useState(false);

    const handleChange = (e) => {
        setContents({ ...contents, [e.target.name]: e.target.value })

    }

    const handleFileChange = (e) => {
        setCoverImage(e.target.files[0])
        let url = URL.createObjectURL(e.target.files[0]);
        setCoverImageURL(url);
    }
    const handleUploadCoverImage = async () => {
        setIsUploading(true)
        let url = await UploadBlogCoverFireStorage(coverImage)

        if (url) {
            setCoverImageURL(url);
            setContents({ ...contents, coverImageUrl: url });
            setCoverImage(null)
            setIsUploading(false)
        }
    }



    const handleEditorChange = (data) => {
        setEditorData(data);


    };

    const convertToJSON = () => {
        if (editorData) {
            let result = editorJsParser(editorData?.blocks);
            setContents({
                ...contents,
                content: result
            });

        }
    };
    useEffect(() => {
        setTimeout(() => {
            convertToJSON();
        }, 500);
    }, [editorData])

    return (
        <Container>

            <Paper sx={{ p: 1, mt: 2 }}>
                <Grid container spacing={2}  >
                    <Grid item xs={12}>
                        <Stack p={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Avatar sizes='small' src={user ? user.profileUrl : ""} sx={{ width: 30, height: 30 }} />
                            <Typography textTransform={"uppercase"} fontWeight={600}>Blog Post</Typography>
                            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                                <IconButton color='primary' variant='text' onClick={() => convertToJSON()} size='small' >
                                    <Save />
                                    {/* <CircularProgress size={20} disableShrink /> */}
                                </IconButton>
                                <Button onClick={() => AddBlogBothDatabase(contents)} variant='contained' size='small' disabled={contents?.title && contents?.content ? false : true}>Publish</Button>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8} >
                        <Paper elevation={0} sx={{ p: 2 }}>
                            <Typography variant="caption" textAlign={"center"} component={"p"} color="initial">Content</Typography>
                            <Typography mt={1} mb={1} variant='body2' color={"primary"}>Title</Typography>
                            <TextField onChange={handleChange} fullWidth name='title' size='small' placeholder='Write title here...' />
                            <Typography mt={1} mb={1} variant='body2' color={"primary"}>Discription</Typography>
                            {/* <TextField onChange={handleChange} fullWidth name='content' size='small' placeholder='Write title here...' /> */}
                            <MyTextEditor className="custom-editor" data={editorData} onChange={handleEditorChange} />

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={2} md={4}>
                        <Paper elevation={0} sx={{ p: 2 }}>
                            <Typography variant="caption" textAlign={"center"} mb={2} component={"p"} color="initial">Features</Typography>

                            <Accordion elevation={1}>
                                <AccordionSummary expandIcon={<ExpandMore />}>Select Blog Cotegory *</AccordionSummary>
                                <AccordionDetails>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={categories}
                                        size='small'
                                        renderInput={(params) => <TextField {...params} variant='standard' size='small' label="Category *" />}
                                    />
                                    <Divider sx={{ m: "10px 0" }} />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={categories}
                                        size='small'

                                        renderInput={(params) => <TextField  {...params} variant='standard' size='small' label="Label *" />}
                                    />
                                </AccordionDetails>
                                <AccordionActions>

                                    <Button fullWidth variant='outlined' size='small' >Save</Button>
                                </AccordionActions>
                            </Accordion>
                            <Accordion elevation={1}>
                                <AccordionSummary expandIcon={<ExpandMore />}>Add Cover Image *</AccordionSummary>
                                <AccordionDetails>
                                    {coverImgageURL ? <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={coverImgageURL} alt='coverimg' /> :
                                        <Tooltip title="Image Preview" placement='left'><Skeleton height={120} variant='rounded' animation={"wave"} /></Tooltip>}
                                    {coverImage && <Typography variant='caption' component={"span"} fontSize={8} color={"red"} fontWeight={600}> Currently Image Not Uploaded , Preview</Typography>}
                                    {isUploading && <LinearProgress variant="indeterminate" value={14} />}
                                </AccordionDetails>
                                <AccordionActions>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        size='small'
                                        fullWidth
                                        color={coverImage ? "success" : 'secondary'}

                                    >
                                        {coverImage ? "Change File" : "Select File"}
                                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                                    </Button>
                                    <Button fullWidth variant='outlined' size='small' onClick={() => handleUploadCoverImage()} disabled={coverImage ? false : true}>Upload</Button>
                                </AccordionActions>
                            </Accordion>


                            <Accordion elevation={1}>
                                <AccordionSummary expandIcon={<ExpandMore />}>Blog Preview</AccordionSummary>
                                <AccordionDetails >
                                    <Box maxHeight={150} overflow={"hidden"}>
                                        <Typography variant='subtitle2' fontWeight={600} component={"h1"} mb={1} >{contents?.title}</Typography>
                                        <BlogsContainer> <Box dangerouslySetInnerHTML={{ __html: contents?.content }} /></BlogsContainer>

                                    </Box>

                                </AccordionDetails>
                                <AccordionActions>
                                    <Button fullWidth color='secondary' variant='outlined' size='small'>Full Preview</Button>

                                </AccordionActions>
                            </Accordion>

                            <Accordion elevation={1}>
                                <AccordionSummary expandIcon={<ExpandMore />}>Add Tags *</AccordionSummary>
                                <AccordionDetails >
                                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={'space-between'} gap={1}>
                                        <TextField placeholder='Write tags...' fullWidth variant='standard' size='small' />
                                        <IconButton size='small' color='primary'>
                                            <Add />
                                        </IconButton>
                                    </Stack>
                                    <Typography variant='caption' color={"gray"} mt={2} mb={2}>Your Tags</Typography>
                                    <Box maxHeight={150} overflow={"hidden"}>

                                    </Box>

                                </AccordionDetails>
                                <AccordionActions>
                                    <Button fullWidth color='secondary' variant='outlined' size='small'>View All Tags</Button>

                                </AccordionActions>
                            </Accordion>

                        </Paper>
                    </Grid>
                </Grid>
            </Paper >
        </Container >
    );
};

export default MyEditor;
