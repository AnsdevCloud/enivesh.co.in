
import React, { useEffect } from 'react'
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const EditFunc = ({ data }) => {
    const navigate = useNavigate();
    const handleEdit = () => {
        if (data) {
            navigate(`/blogs/create`, {
                state: {
                    editobject: data
                }
            })

        } else {
            return 0;
        }
    }
    return (<IconButton size='small' onClick={handleEdit} ><Edit /></IconButton>)
}

export default EditFunc