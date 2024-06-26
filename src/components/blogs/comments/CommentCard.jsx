import { Delete } from '@mui/icons-material';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'

const CommentCard = ({ comment, uid, onDelete }) => {

    const convertTimestampToDate = (timestamp) => {
        // Create a new Date object using the 13-digit timestamp (milliseconds)
        const date = new Date(timestamp);

        // Format the date in Indian format (DD-MM-YYYY HH:MM:SS)
        const formattedDate = date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        const formattedTime = date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // 24-hour format
        });

        return `${formattedDate} ${formattedTime}`
    }


    return (
        <Card elevation={0}>
            <CardHeader
                avatar={<Avatar sx={{ width: 30, height: 30 }} />}
                title="First"
                subheader={convertTimestampToDate(comment?.timestamp)}
                action={
                    <IconButton onClick={() => onDelete(comment)} size='small' color='error' aria-label="delete">
                        <Delete fontSize='10px' />
                    </IconButton>
                }

            />
            <CardContent>

                <Typography variant='body2' >
                    {comment?.text}
                </Typography>
            </CardContent>
            <Divider />
        </Card>
    )
}

export default CommentCard