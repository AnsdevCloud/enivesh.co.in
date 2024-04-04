import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fab, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import FilterTable from '../admin/PortalElements/FilterTable';
import HeadingBox from '../items/HeadingBox';
import { Download, Navigation } from '@mui/icons-material';
import Uploading from '../loading/Uploading';
import Wrapper from '../loading/Wrapper';


const style = {
    position: 'absolute',
    top: "70px",
    width: "90%",
    borderRadius: 1,
    height: "90%",
    left: "5%",
    bgcolor: 'background.paper',
    overflowY: "auto",
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal({ funcs, data, onPost }) {
    const [open, setOpen] = useState();
    const handleClose = () => {
        setOpen(false)
    };
    useEffect(() => {
        if (open === false) {
            setOpen(true)

        } else {
            setOpen(false);
        }

    }, [funcs])




    return (
        <div>
            {/* <Wrapper />  */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Paper elevation={0} sx={{ width: "100%", height: "80vh" }}>
                            <HeadingBox colorText={"Plan"} defaultText={"Deatils"} />
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Label</TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell >Category</TableCell>
                                        <TableCell >{data?.category?.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Company</TableCell>
                                        <TableCell >{data?.company?.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Plan</TableCell>
                                        <TableCell >{data?.ExcelCaverage[0]?.planNam}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <HeadingBox colorText={"Plan"} defaultText={`Coverage (${data?.ExcelCaverage?.length})`} />

                            <FilterTable data={data?.ExcelCaverage} />
                            <HeadingBox colorText={"Plan"} defaultText={`Feature (${data?.ExcelFeature?.length})`} />
                            {/* <FilterTable data={data?.ExcelFeature} /> */}
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 600, maxWidth: 50, color: "orangered" }}>S.No.</TableCell>
                                            <TableCell sx={{ fontWeight: 600, maxWidth: 150, color: "orangered" }}>Feature Name</TableCell>
                                            <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Feature Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data?.ExcelFeature?.map((item, index) => {
                                                return <TableRow key={index}>
                                                    <TableCell sx={{ maxWidth: 50, color: "orangered" }}>{item?.sid}</TableCell>
                                                    <TableCell sx={{ maxWidth: 150 }} >{item?.featureNam}</TableCell>
                                                    <TableCell >{item?.featureDetail}</TableCell>
                                                </TableRow>
                                            })
                                        }

                                    </TableBody>
                                </Table>

                            </TableContainer>

                            <HeadingBox colorText={"Plan"} defaultText={` PDF Docs (${data?.docsUrls?.length ? data?.docsUrls?.length : 0})`} />
                            <Grid container mb={2} p={1} spacing={2}>
                                {
                                    data?.docsUrls?.map((item, index) => {
                                        return <Grid key={item} item xs={12} md={6} lg={4}>
                                            <Paper elevation={1} sx={{ p: 1 }}>
                                                <Typography target='_blank' variant='button' href={item?.url} download={item?.name} component={"a"}>
                                                    <Fab variant="extended" size='small' color='info' sx={{ width: "100%" }} >
                                                        <Download sx={{ mr: 1 }} />
                                                        Download PDF {index + 1}
                                                    </Fab>
                                                </Typography>

                                                <Typography mt={1} variant='caption' component={"p"}> <Typography color={"primary"} variant='caption' component={"span"}>File Name :</Typography> {item?.name}</Typography>
                                                <Typography mt={1} variant='caption' component={"p"}>  <Typography color={"primary"} variant='caption' component={"span"}>File Language : </Typography>{item?.language}</Typography>
                                                <Typography mt={1} variant='caption' component={"a"} href={item?.url}>  <Typography color={"primary"} variant='caption' component={"span"}>File Url :</Typography> {item?.url}</Typography>
                                            </Paper>
                                        </Grid>
                                    })
                                }

                            </Grid>
                            <Grid container mb={2} height={50} p={1}>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Fab variant="extended" size='small' color='primary' onClick={onPost}>
                                        <Navigation sx={{ mr: 1 }} />
                                        Post
                                    </Fab>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
