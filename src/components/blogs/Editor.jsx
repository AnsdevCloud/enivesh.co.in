import { Add, Delete, Edit, ExpandMore, Save } from '@mui/icons-material';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, Autocomplete, Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, CircularProgress, Container, Divider, FormControl, Grid, IconButton, InputLabel, LinearProgress, Menu, MenuItem, Paper, Select, Skeleton, Snackbar, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddBlogBothDatabase from '../../function/firebasecustumfunc/AddDataBothDatabase';
import UploadBlogCoverFireStorage from '../../function/firebasecustumfunc/UploadBlogCoverFireStorage';
import MyTextEditor from './MyTextEditor';
import { editorJsParser } from 'editorjs-data-parser';
import { BlogsContainer } from './css/BlogsContainer';
import { v4 } from 'uuid'
import categories from '../../function/categoryname';
import { useLocation, useNavigate } from 'react-router-dom';

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


const MyEditor = () => {
    let userData = JSON.parse(localStorage.getItem("loginUser"));

    useEffect(() => {
        if (userData.role === "Author" || userData.role === "Admin") {
            return;
        } else {
            navigate("/blogs");
        }
    }, [])
    const location = useLocation();
    const [isEditData, setIsEditData] = useState(location?.state?.editobject);
    const [autoSave, setAutoSave] = useState(false);
    const [subLabel, setSubLabel] = useState(null)
    const [category, setCategory] = useState(0)
    const [user, setUserData] = useState(userData);
    const [tags, setTags] = useState([]);
    const [tagValue, setTagValue] = useState("");
    const [editorData, setEditorData] = useState(location?.state?.editobject?.content);
    const [contents, setContents] = useState();
    const [coverImage, setCoverImage] = useState();
    const [coverImgageURL, setCoverImageURL] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();
    let result = editorJsParser(editorData?.blocks);
    const [drafthistory, setDraftHistory] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editorLoad, setEditorLoad] = useState(false);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('blogHistory')) || [];
        setDraftHistory(savedHistory);
        const index = JSON.parse(localStorage.getItem("idx"))
        setEditingIndex(index);
        if (editingIndex >= 0) {
            setEditorData(savedHistory[index]?.contents?.content)
            setTimeout(() => {
                setEditorLoad(!editorLoad);
            }, 500);
        } else {
            return 0
        }

    }, []);

    const handleEditBlogs = (index) => {
        localStorage.setItem("idx", JSON.stringify(index));
        setContents(drafthistory[index]?.contents);
        setCoverImageURL(drafthistory[index]?.contents?.coverImgageURL)
        setEditingIndex(index);
        setEditorData(drafthistory[index]?.contents?.content);
        setEditorLoad(!editorLoad);


    }
    // console.log(editorData);
    const handleChange = (e) => {
        setContents({ ...contents, [e.target.name]: e.target.value })
        localStorage.removeItem("idx");

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
            setContents({
                ...contents,
                content: editorData
            });

        }
    };

    const handlecategories = (e) => {
        setCategory(e.target.value);
        handleSaveCategory();

    }

    const handlesubcategories = (e) => {
        setSubLabel(e.target.value);
        handleSaveCategory();


    }
    const handleSaveCategory = () => {
        setContents({
            ...contents,
            category: {
                name: categories[category]?.name,
                cid: categories[category]?.cid,
                subcategory: {
                    scid: categories[category]?.subname[subLabel]?.scid,
                    name: categories[category]?.subname[subLabel]?.name,
                }
            }
        });
        handleClick("Updated", true)


    }


    const handleAddTags = (event) => {

        if (event.keyCode === 13) {

            if (tagValue) {
                setTags([...tags, tagValue])
                setTagValue("")
            }
        }
    }
    const handleAddClickTags = () => {
        if (tagValue) {
            setTags([...tags, tagValue])
            setTagValue("")
        }

    }
    const handleTagsSave = () => {
        if (tags?.length > 0) {
            setContents({
                ...contents,
                tags: tags
            })

        }
        handleSaveCategory();
        handleClick("Tags Save ", true)

    }
    const [open, setOpen] = useState({
        state: false,
        msg: ""
    });

    const handleClick = (msg, state) => {
        setOpen({ msg: msg, state: state });

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen({ ...open, state: false });
    };

    const publish = () => {
        let f = AddBlogBothDatabase(contents)
        if (f === 1) {
            localStorage.removeItem("idx");
            navigate("/blogs")
        }
    }
    useEffect(() => {
        setTimeout(() => {
            convertToJSON();
        }, 500);
    }, [editorData])


    useEffect(() => {
        if (isEditData) {
            setContents({
                ...contents,
                title: isEditData?.title
            })
        }
    }, [isEditData])


    useEffect(() => {
        // Define the interval function
        const intervalId = setInterval(() => {
            if (contents.title) {
                setAutoSave(true);
                const newHistory = [...drafthistory];

                if (editingIndex !== null) {
                    newHistory[editingIndex] = { contents, timestamp: new Date().toISOString() };
                } else {
                    if (!newHistory.some(draft => draft.contents.title === contents.title)) {
                        newHistory.push({ contents, timestamp: new Date().toISOString() });
                        setEditingIndex(newHistory.length - 1);
                    }
                }
                setDraftHistory(newHistory);
                localStorage.setItem('blogHistory', JSON.stringify(newHistory));


                setTimeout(() => {
                    setAutoSave(false);
                }, 1000);
            }


        }, 5000); // 1000 milliseconds = 1 second

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, [contents, drafthistory, editingIndex]);

    const handleDelete = (index) => {
        const newHistory = drafthistory.filter((_, i) => i !== index);
        setDraftHistory(newHistory);
        localStorage.setItem('blogHistory', JSON.stringify(newHistory));
        // If the currently edited draft is deleted, reset the editing state
        if (index === editingIndex) {
            setEditorData(null);
            setEditorLoad(!editorLoad)
        }
    };
    const handeBack = () => {
        localStorage.removeItem("idx");
        navigate('/blogs');
    }
    return (
        <Container>

            <Paper sx={{ p: 1, mt: 2 }}>

                <Snackbar open={open.state} autoHideDuration={5000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {open?.msg}
                    </Alert>
                </Snackbar>
                <Grid container spacing={2}  >

                    <Grid item xs={12}>
                        <Stack p={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Stack flexDirection={"row-reverse"} gap={2}>
                                <Avatar sizes='small' src={user ? user.profileUrl : ""} sx={{ width: 30, height: 30 }} />
                                <Button variant='text' size='small' color='inherit' onClick={() => handeBack()}>Back</Button>
                            </Stack>
                            <Typography textTransform={"uppercase"} fontWeight={600}>Blog Post</Typography>
                            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                                <Tooltip title="5s Auto Save">
                                    <IconButton disabled={!contents?.title} color='primary' variant='text' onClick={() => convertToJSON()} size='small' >
                                        {autoSave ? <CircularProgress size={18} disableShrink /> : <Save fontSize="30px" />
                                        }
                                    </IconButton>
                                </Tooltip>
                                <Button onClick={() => publish(contents)} variant='contained' size='small'
                                    disabled={
                                        (contents?.title
                                            && contents?.content

                                            && contents?.category?.cid
                                            && contents?.category?.subcategory?.scid)
                                            ?
                                            false
                                            :
                                            true
                                    }>Publish</Button>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8} >
                        <Paper elevation={0} sx={{ p: 2 }}>
                            <Typography variant="caption" textAlign={"center"} component={"p"} color="initial">Content</Typography>
                            <Typography mt={1} mb={1} variant='body2' color={"primary"}>Title <Typography variant='caption' fontSize={8} component={"span"} color={"gray"}>( Required For Auto Save )</Typography></Typography>
                            <TextField onChange={handleChange} fullWidth name='title' size='small' value={contents?.title} placeholder='Write title here...' />
                            <Typography mt={1} mb={1} variant='body2' color={"primary"}>Discription</Typography>
                            {/* <TextField onChange={handleChange} fullWidth name='content' size='small' placeholder='Write title here...' /> */}
                            {(userData?.role === "Author" || userData?.role === "Admin") && <MyTextEditor className="custom-editor" update={editorLoad} data={editorData} onChange={handleEditorChange} />}

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={2} md={4}>
                        <Paper elevation={0} sx={{ p: 2 }}>
                            <Typography variant="caption" textAlign={"center"} mb={2} component={"p"} color="initial">Features</Typography>

                            <Accordion elevation={1}>
                                <AccordionSummary expandIcon={<ExpandMore />}>Select Blog Cotegory *</AccordionSummary>
                                <AccordionDetails>
                                    <FormControl fullWidth >
                                        <InputLabel sx={{ fontSize: 10 }} size='small' id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            fullWidth
                                            sx={{ fontSize: 10 }}
                                            label="Category"

                                            onChange={handlecategories}
                                        >
                                            {categories?.map((item, index) => (<MenuItem sx={{ fontSize: 10 }} key={index} value={index}>{item?.name.toUpperCase()}</MenuItem>))}

                                        </Select>
                                    </FormControl>

                                    <Divider sx={{ m: "10px 0" }} />
                                    <FormControl fullWidth>
                                        <InputLabel sx={{ fontSize: 10 }} size='small' id="demo-simple-select-label">Sub Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            fullWidth
                                            sx={{ fontSize: 10 }}
                                            size='small'

                                            label="Sub Category"
                                            onChange={handlesubcategories}
                                        >
                                            {categories[category]?.subname?.map((item, index) => (<MenuItem sx={{ fontSize: 10 }} key={index} value={index}>{item?.name.toUpperCase()}</MenuItem>))}

                                        </Select>
                                    </FormControl>

                                </AccordionDetails>
                                <AccordionActions>

                                    {/* <Button disabled={(category === null) ? true : false} onClick={() => handleSaveCategory()} fullWidth variant='outlined' size='small' >Save</Button> */}
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
                                        <BlogsContainer> <Box dangerouslySetInnerHTML={{ __html: result }} /></BlogsContainer>

                                    </Box>

                                </AccordionDetails>
                                <AccordionActions>
                                    <Button fullWidth color='secondary' variant='outlined' size='small' onClick={() => navigate('/blogs/preview', { state: contents })}>Full Preview</Button>

                                </AccordionActions>
                            </Accordion>

                            <Accordion elevation={1}>
                                <AccordionSummary expandIcon={<ExpandMore />}>Add Tags *</AccordionSummary>
                                <AccordionDetails >
                                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={'space-between'} gap={1}>
                                        <TextField onKeyDown={handleAddTags} onChange={(e) => setTagValue(e.target.value)} value={tagValue} placeholder='Write tags...' fullWidth variant='standard' size='small' />
                                        <IconButton size='small' color='primary' onKeyDown={handleAddTags} onClick={handleAddClickTags}>
                                            <Add />
                                        </IconButton>
                                    </Stack>
                                    <Typography variant='caption' color={"gray"} mt={2} mb={2} component={"p"}>Your Tags</Typography>
                                    <Box maxHeight={150} overflow={"hidden"}>
                                        {tags?.map((item, index) => (<Chip size='small' variant='filled' sx={{ ml: 1, mb: 1 }} key={index} label={item} />))}

                                    </Box>

                                </AccordionDetails>
                                <AccordionActions>
                                    <Button fullWidth color='secondary' variant='outlined' size='small'>View Tags</Button>
                                    <Button fullWidth color='primary' variant='outlined' disabled={tags?.length < 1 || open.state ? true : false} size='small' onClick={() => handleTagsSave()}>Save</Button>

                                </AccordionActions>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    Draft Blogs
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1} >
                                        {drafthistory?.length > 0 ?
                                            drafthistory?.map((item, index) => {
                                                return <Grid key={index} item xs={6}>
                                                    <Card>
                                                        <CardActionArea onClick={() => navigate('/blogs/preview', { state: contents })} >
                                                            <CardMedia height={100} component={"img"} src={item?.contents?.coverImageUrl} />
                                                            <CardContent>
                                                                <Typography fontWeight={600} variant='caption' component={"p"} lineHeight={1} overflow={"hidden"} textOverflow={"ellipsis"} whiteSpace={"nowrap"}>{item?.contents?.title}</Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                        <CardActions>
                                                            <Stack flexDirection={"row"} alignItems={"center"} width={"100%"} justifyContent={"space-between"} gap={1}>
                                                                <IconButton size='small' onClick={() => handleDelete(index)}><Delete fontSize='8px' /></IconButton>
                                                                <Typography variant='caption' fontSize={8} component={"span"}>12-03-2024</Typography>
                                                                <IconButton size='small' onClick={() => handleEditBlogs(index)}><Edit fontSize='8px' /></IconButton>
                                                            </Stack>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
                                            }) : <Grid item xs={12}>
                                                <Typography component={"p"} variant='caption' textAlign={"center"}>
                                                    Empty
                                                </Typography>
                                            </Grid>
                                        }

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                        </Paper>
                    </Grid>
                </Grid>
            </Paper >
        </Container >
    );
};

export default MyEditor;






