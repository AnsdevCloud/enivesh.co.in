import * as React from 'react';
// import { firebase } from 'firebase/app';
// import 'firebase/firestore';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, Paper } from '@mui/material';
import HeadingBox from '../../items/HeadingBox';


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

// const dbd = firebase.firestore();

export default function Category({ data, onChange, value }) {
    const catData = localStorage.getItem("categories");
    const catlocal = JSON.parse(catData)
    const [categories, setCategories] = React.useState([])
    const theme = useTheme();
    React.useEffect(() => {
        setCategories(catlocal);
    }, [data])
    return (
        <Paper elevation={1} sx={{ maxWidth: "60%", m: "0 auto", p: 2 }}>
            <HeadingBox m={"10px 0"} titleTag={"Step - 1"} colorText={"Select"} defaultText={"Category"} />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel size='small' id="demo-multiple-name-label">Select Category</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={value}
                        size='small'
                        onChange={onChange}
                        input={<OutlinedInput label="Select Category" />}
                        MenuProps={MenuProps}
                    >
                        {categories?.map((item, index) => (
                            <MenuItem
                                key={index}
                                value={item.name}
                                style={getStyles(item.name, value, theme)}
                            >
                                {item.name.toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Box>
        </Paper>
    );
}