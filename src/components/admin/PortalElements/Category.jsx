import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import HeadingBox from '../../items/HeadingBox';
import { query } from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import { useLocation } from 'react-router-dom';


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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];





function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function Category({ data, onChange, value }) {

    const theme = useTheme();

    return (
        <>
            <HeadingBox m={"10px 0"} colorText={"Select"} defaultText={"Category"} />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Select Category</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={value}
                        onChange={onChange}
                        input={<OutlinedInput label="Select Category" />}
                        MenuProps={MenuProps}
                    >
                        {data?.map((item) => (
                            <MenuItem
                                key={item.id}
                                value={item.id}
                                style={getStyles(item.category, value, theme)}
                            >
                                {item.category.toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}