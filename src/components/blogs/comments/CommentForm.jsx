import React, { useState } from 'react';
import { addComment } from '../../../function/firebasecustumfunc/CommentPost';
import { Button, Divider, FormControl, Stack, TextField } from '@mui/material';
import { Comment, PostAdd } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import { addComment } from './commentFunctions'; // Import add comment function

const CommentForm = ({ postId, userId }) => {
    const user = JSON.parse(localStorage.getItem('loginUser'));

    const navigate = useNavigate();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(postId, userId, text);
        setText('');
        console.log("click");
    };

    return (
        <>

            <FormControl sx={{ mt: 2 }} fullWidth >
                <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                    <TextField
                        fullWidth
                        type="text"
                        size='small'
                        value={text}
                        variant='standard'
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write a comment..."
                    />
                    <Button variant='contained' onClick={user ? handleSubmit : () => navigate('/profile/login')} fullWidth startIcon={<Comment fontSize='10px' />} sx={{ maxWidth: 200 }} size='small'>Comment</Button>
                </Stack>
            </FormControl>
        </>
    );
};

export default CommentForm;
