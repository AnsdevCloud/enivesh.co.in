import React, { useEffect, useState } from 'react';

import { doc, getDoc } from "firebase/firestore";

import FollowButton from './FollowButton';
import fb from '../../Firebase/FireConfig';
import { CircularProgress } from '@mui/material';
const db = fb.firestore();
const FollowingCheck = ({ aid, currentUserId }) => {

    const [user, setUser] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const userDoc = await getDoc(doc(db, "users", aid));
            if (userDoc.exists()) {
                setUser(userDoc.data());
                setIsFollowing(userDoc.data().followers.includes(currentUserId));
            }
        };

        fetchUser();
    }, [aid, currentUserId]);

    if (!user) return <p>...</p>;

    return (<FollowButton currentUserId={currentUserId} targetUserId={aid} isFollowing={isFollowing} />);
};

export default FollowingCheck;
