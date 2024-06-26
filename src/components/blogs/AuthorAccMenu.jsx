import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import fb from '../../Firebase/FireConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function AuthorAccMenu({ imageSrc, aid }) {
    const [user, setUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        const getUser = async () => {
            const userDoc = await getDoc(doc(fb.firestore(), "users", aid));
            setUser(userDoc?.data());
        }
        if (aid) {
            getUser();

        }
    }, [aid])

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account Details">
                    <IconButton
                        onClick={handleClick}
                        size="small"

                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 25, height: 25 }} src={imageSrc}>V</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(40, 22, 0, 0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar src={imageSrc} />

                    <Typography variant="subtitle1" color="initial" textAlign={"center"} fontWeight={600} component={"p"}>{user?.name}</Typography>
                </MenuItem>
                <Divider />

                <MenuItem >
                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} minWidth={150} padding={1} width={"100%"}>
                        <Box>
                            <Typography variant="caption" color="initial" textAlign={"center"} component={"p"} fontWeight={600}>Follower </Typography>
                            <Typography variant="caption" color="initial" textAlign={"center"} component={"p"} fontWeight={600}>{user?.followers?.length} </Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" color="initial" textAlign={"center"} component={"p"} fontWeight={600}>Following </Typography>
                            <Typography variant="caption" color="initial" textAlign={"center"} component={"p"} fontWeight={600}>{user?.following?.length} </Typography>
                        </Box>
                    </Stack>
                </MenuItem>


            </Menu>
        </React.Fragment>
    );
}
