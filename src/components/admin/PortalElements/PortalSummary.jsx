import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import HeadingBox from '../../items/HeadingBox'
// import CollapsibleTable from './Table'

import Tables from './Table'

const PortalSummary = ({ xlxsData, postMsg, featureData, data, onPost }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(postMsg);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);






    return (
        <Box>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Have you checked all the data
                    </Typography>
                    <Typography id="keep-mounted-modal-description" component={"p"} variant='body2' sx={{ mt: 2 }}>
                        <Typography variant='caption' component={"span"} color={"#ff5c00"}>NOTE : </Typography> Only admin users can make changes after final post .
                    </Typography>
                    <Typography id="keep-mounted-modal-description" variant='caption' sx={{ mt: 2 }}>
                        Are you sure ?
                    </Typography>
                    <Stack m={2}><Button onClick={onPost}>Post</Button></Stack>
                </Box>
            </Modal>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <HeadingBox m={"10px 20px"} colorText={"Preview"} defaultText={"Details"} />
                <Box m={2}>
                    <Button size='small' variant='contained' color='secondary' onClick={handleOpen}>Post Data</Button>
                </Box>
            </Stack>

            <Box>
                <Tables data={data} sumAssured={xlxsData} Features={featureData} />
            </Box>
        </Box>
    )
}

export default PortalSummary