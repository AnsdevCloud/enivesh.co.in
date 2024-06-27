import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import fb from '../../../Firebase/FireConfig';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import { Container, Paper, Typography } from '@mui/material';
import { deleteComment } from '../../../function/firebasecustumfunc/CommentPost';


const CommentContainer = ({ postId, currentUserId, ref, refId }) => {
    const [post, setPost] = useState(null);


    const handleDeleteComment = async (comment) => {
        await deleteComment(postId, comment);
        setPost((prevPost) => ({
            ...prevPost,
            comments: prevPost.comments.filter(c => c.timestamp !== comment.timestamp || c.userId !== comment.userId || c.text !== comment.text)
        }));
    };
    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = await getDoc(doc(fb.firestore(), "blogs", postId));
            if (postDoc.exists()) {
                setPost(postDoc.data());

            }
        };

        fetchPost();
    }, [postId, currentUserId]);

    if (!post) return <div>Loading...</div>;

    return (
        <Container id={refId} ref={ref} component={Paper} elevation={0} sx={{ p: 1, mt: 2 }}>
            <Typography mt={2} variant='h6' fontWeight={600}>Comments : </Typography>
            {post?.comments?.map((comment, index) => (


                <CommentCard key={index} comment={comment} onDelete={handleDeleteComment} uid={comment?.userId} />

            ))}

            <CommentForm postId={postId} userId={currentUserId} />
        </Container>
    );
};

export default CommentContainer;
