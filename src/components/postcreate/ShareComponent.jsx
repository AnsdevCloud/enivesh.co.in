import { Button, IconButton } from '@mui/material';
import React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Facebook, Instagram, OpenInNew, Share, WhatsApp, X } from '@mui/icons-material';

const ShareButton = ({ url, title, onlyIcon }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleShare = (network) => {
        let shareUrl;

        switch (network) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title}: ${url}`)}`;
                break;
            case 'instagram':
                shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };

    return (

        <>
            {onlyIcon ? <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='info'
                size='small'
            >
                <Share fontSize='10px' />
            </IconButton> : <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<Share />}
                color='info'
            >
                Share
            </Button>}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Button size='small' color='secondary' startIcon={<Facebook />} endIcon={<OpenInNew />} onClick={() => handleShare('facebook')}>Share on Facebook</Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>

                    <Button size='small' color='inherit' startIcon={<X />} endIcon={<OpenInNew />} onClick={() => handleShare('twitter')}>Share on Twitter</Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button color='success' size='small' startIcon={<WhatsApp />} endIcon={<OpenInNew />} onClick={() => handleShare('whatsapp')}>Share on WhatsApp</Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button size='small' color='error' startIcon={<Instagram />} endIcon={<OpenInNew />} onClick={() => handleShare('instagram')}>Share on Instagram</Button>

                </MenuItem>
            </Menu>
        </>

    );
};

export default ShareButton;
