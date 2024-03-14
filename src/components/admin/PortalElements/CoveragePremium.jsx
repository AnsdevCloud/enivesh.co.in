import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import HeadingBox from '../../items/HeadingBox'

const CoveragePremium = ({ onChange, value, onGet, onAdd, data, onDelete, onPost }) => {

    return (
        <Box>
            <HeadingBox m={"10px 0"} colorText={"Coverage"} titleTag={"Coverage and Premium with Age Range"} defaultText={"Premiums"} />
            <Stack flexDirection={'row'} gap={3} p={2}>
                <TextField size='small' onChange={onChange} name='minAge' value={value?.minAge} type='number' fullWidth id="outlined-basic" label="Min Age" variant="outlined" />
                <TextField size='small' onChange={onChange} name='maxAge' value={value?.maxAge} type='number' fullWidth id="outlined-basic" label="Max Age" variant="outlined" />
            </Stack>
            <HeadingBox m={"10px 0"} defaultText={"Coverage & Premiums"} />

            {data.map((dat, index) => (



                <Stack flexDirection={'row'} gap={3} p={2} key={index}>


                    <TextField size='small' onChange={(e) => onGet(e, index)} name='coverage' value={dat.coverage} type='number' fullWidth id="outlined-basic" label="Coverage" variant="outlined" />
                    <TextField size='small' onChange={(e) => onGet(e, index)} name='premium' value={dat.premium} type='number' fullWidth id="outlined-basic" label="Premium" variant="outlined" />
                    <Button size='small' color='secondary' onClick={() => onDelete(index)}>Re</Button>
                </Stack>
            ))}

            <Stack flexDirection={'row'} gap={2} justifyContent={"flex-end"} p={2}>
                <Button size='small' color='secondary' onClick={onAdd}>Add Field</Button>
            </Stack>

        </Box>
    )
}

export default CoveragePremium