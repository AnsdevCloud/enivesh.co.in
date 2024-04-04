import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { query } from 'firebase/database';
import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import HeadingBox from '../../items/HeadingBox';
import ChechUser from '../ChechUser';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};







function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function Company({ data, onChange, value, onAdd, boolean, onActive }) {
    console.log(data.comapanys.name);

    const theme = useTheme();
    const [addField, setField] = React.useState(false);
    React.useEffect(() => {
        setField(boolean)
    }, [boolean])


    return (
        <Paper elevation={1} sx={{ maxWidth: "60%", m: "10px auto", p: 2 }}>
            <HeadingBox m={"10px 0"} titleTag={"Step - 2"} colorText={"Select"} defaultText={"Company"} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel size='small' id="demo-multiple-name-label">Select Company</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={value}
                        size='small'
                        onChange={onChange}
                        input={<OutlinedInput label="Select Company" />}
                        MenuProps={MenuProps}
                    >
                        {/* {data?.comapanys?.map((item, index) => (
                            <MenuItem
                                key={index}
                                value={item?.name}
                                style={getStyles(item?.name, value, theme)}
                            >
                                {item?.name.toUpperCase()}
                            </MenuItem>
                        ))} */}
                    </Select>

                </FormControl>


            </Box>
            <Stack flexDirection={'row'} mt={2} justifyContent={"space-evenly"} alignItems={"center"} gap={2}>
                {addField && <Button size='small' color='secondary' onClick={() => setField(!addField)}>Close</Button>}{addField && <TextField size='small' onChange={onChange} name='newitem' id="outlined-basic" label="Enter Name" variant="outlined" />}
                <Box sx={{ width: "200px" }}>{addField ? <Button size='small' onClick={onAdd} variant='outlined' fullWidth>Push Option</Button> : <Button size='small' onClick={onActive} variant='outlined' fullWidth>Create Option</Button>}</Box>
            </Stack>


        </Paper>
    );
}