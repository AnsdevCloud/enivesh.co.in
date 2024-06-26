import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import LikeBlog from './LikesPost';
import fb from '../../../Firebase/FireConfig';



const LikeButton = ({ postId, currentUserId }) => {
    const [post, setPost] = useState(null);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = await getDoc(doc(fb.firestore(), "blogs", postId));
            if (postDoc.exists()) {
                setPost(postDoc.data());
                setIsLiked(postDoc.data()?.likes?.includes(currentUserId));
            }
        };

        fetchPost();
    }, [postId, currentUserId]);

    if (!post) return <div>Loading...</div>;

    return (

        <LikeBlog postId={postId} userId={currentUserId} isLiked={isLiked} />


    );
};

export default LikeButton;
