import React, { useState, useEffect } from 'react';
import { followUser, unfollowUser } from '../../function/firebasecustumfunc/FollowFuncs';
import { Button } from '@mui/material';
import { getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
// Import follow/unfollow functions

const FollowButton = ({ currentUserId, targetUserId, isFollowing }) => {
    const navigate = useNavigate();
    const [following, setFollowing] = useState(isFollowing);

    const handleFollow = () => {
        if (following) {
            unfollowUser(currentUserId, targetUserId);
        } else {
            followUser(currentUserId, targetUserId);
        }
        setFollowing(!following);
    };

    return (
        <Button size='small' sx={{ fontSize: 8, fontWeight: 600 }} variant='outlined' color={"info"} onClick={currentUserId ? handleFollow : () => navigate('/profile/login')}>
            {following ? 'Unfollow' : 'Follow'}
        </Button>
    );
};

export default FollowButton;
