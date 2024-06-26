import React, { useState, useEffect } from 'react';
import { likePost, unlikePost } from '../../../function/firebasecustumfunc/LikesPost';
import { Button, IconButton, Tooltip } from '@mui/material';
import { Add, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import { likePost, unlikePost } from './likeFunctions'; // Import like/unlike functions

const LikePost = ({ postId, userId, isLiked }) => {
    const [liked, setLiked] = useState(isLiked);
    const user = JSON.parse(localStorage.getItem('loginUser'));
    const navigate = useNavigate();

    const handleLike = () => {
        if (liked) {
            unlikePost(postId, userId);
        } else {
            likePost(postId, userId);
        }
        setLiked(!liked);
    };

    return (
        <Tooltip title={liked ? "Liked" : "Unliked"}>
            <IconButton size='small' color="error" onClick={user ? handleLike : () => navigate('/profile/login')}>
                {liked ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
        </Tooltip>
    );
};

export default LikePost;
