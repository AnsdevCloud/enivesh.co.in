import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeadingBox from '../../items/HeadingBox'
import { Add, CloudUpload, Upload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const PremiumType = ({ data, postMsg, SheetVal, SheetValInd, SheetValFloat, SelectedOption, onChange, IsSelectedVal, onSelected, onFile, onFileInd, onFileFloat, onSheetValFloat, onSheetValInd, isLoading, onSheetVal, onAdd, boolean, value, addFieldVal, onActive }) => {


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });


    const [addField, setField] = useState(false);
    const [uploadExcel, setUploadExcel] = useState(false);
    const [plans, setPlans] = useState(false);
    const [indUpload, setIndUpload] = useState(false);
    const [floatUpload, setFloatUpload] = useState(false);




    useEffect(() => {
        setField(boolean)

    }, [boolean])
    return (
        <>
            <HeadingBox m={"10px 0"} colorText={"Select"} defaultText={"Premium Type"} />

            <Stack justifyContent={"center"} gap={2} p={2} maxWidth={"60%"} margin={"20px auto"} component={Paper} elevation={1}>
                <Button onClick={() => setPlans(!plans)} variant={plans ? "outlined" : "contained"} color={plans ? "primary" : "primary"}>Select Plans</Button>
                {
                    plans && <>
                        <Stack flexDirection={"row"} alignItems={"center"} gap={2} justifyContent={"space-evenly"}>
                            <FormControl size='small' fullWidth sx={{ maxWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Plans</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={IsSelectedVal}
                                    label="Plans"
                                    onChange={onSelected}
                                >
                                    {SelectedOption && SelectedOption.map((item) => {
                                        return <MenuItem key={item.id} value={item.id}>{item.name.toLocaleUpperCase()}</MenuItem>
                                    })}

                                </Select>
                            </FormControl>
                            <Button size='small' onClick={() => setField(onActive)} variant={addField ? "outlined" : "contained"} color={addField ? "success" : "success"}>{addField ? "Cancel" : "Create"}  Plans</Button>

                        </Stack>
                        {
                            IsSelectedVal && <Stack flexDirection={"row"} alignItems={"center"} gap={2} justifyContent={"space-evenly"}>
                                <Button size='small' onClick={() => setIndUpload(!indUpload)} variant={indUpload ? "outlined" : "contained"} color={indUpload ? "primary" : "primary"}>{indUpload ? "Cancel" : "Upload"}  Individual Excel</Button>
                                <Button size='small' onClick={() => setFloatUpload(!floatUpload)} variant={floatUpload ? "outlined" : "contained"} color={floatUpload ? "secondary" : "secondary"}>{floatUpload ? "Cancel" : "Upload"}  Floater Excel</Button>
                            </Stack>
                        }


                        {
                            indUpload && <>
                                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"} gap={2}>
                                    <Button
                                        fullWidth
                                        component="label"
                                        role={'button'}
                                        variant="outlined"
                                        tabIndex={-1}

                                        startIcon={<Add />}
                                        disabled={SheetValInd ? false : true}
                                    >
                                        Individual Excel File
                                        <VisuallyHiddenInput type="file" onChange={onFileInd} />
                                    </Button>
                                    <Box>
                                        <TextField size='small' value={SheetValInd} type='number' onChange={onSheetValInd} name='sheet' id="outlined-basic" label="Sheet No." variant="outlined" />
                                    </Box>
                                </Stack>


                            </>

                        }
                        {
                            floatUpload && <>
                                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"} gap={2}>
                                    <Button
                                        color='secondary'
                                        fullWidth
                                        component="label"
                                        role={'button'}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<Add />}
                                        disabled={SheetValFloat ? false : true}
                                    >
                                        Floater Excel File
                                        <VisuallyHiddenInput type="file" onChange={onFileFloat} />
                                    </Button>
                                    <Box>
                                        <TextField value={SheetValFloat} size='small' type='number' onChange={onSheetValFloat} name='sheet' id="outlined-basic" label="Sheet No." variant="outlined" />
                                    </Box>
                                </Stack>


                            </>

                        }
                        {
                            addField && <Stack mt={5} justifyContent={"center"} alignItems={"center"}>
                                <Stack flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"} gap={2}>
                                    {addField && <Button size='small' color='secondary' onClick={() => setField(!addField)}>Close</Button>}
                                    {addField && <TextField size='small' onChange={onChange} value={addFieldVal} name='newitem' fullWidth id="outlined-basic" label="Enter Name" variant="outlined" />}
                                    <Box sx={{ width: "200px" }}>
                                        {addField && <Button size='small' onClick={onAdd} variant='outlined' fullWidth>Add</Button>}
                                    </Box>
                                </Stack>


                            </Stack>

                        }
                    </>

                }

                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', gap: 2 }}>
                    {/* <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"

                        row

                    >
                        {
                            data?.map((item) => {
                                return <FormControlLabel onChange={onChange} key={item?.id} checked={item?.id === (value ? value[0] : "")} value={item.id} control={<Radio />} label={item.name} />
                            })

                        }

                    </RadioGroup> */}
                    {/* <Stack flexDirection={'row'} justifyContent={"space-between"} alignItems={"center"} gap={2}>
                        {addField && <Button size='small' color='secondary' onClick={() => setField(!addField)}>Close</Button>}{addField && <TextField size='small' onChange={onChange} value={addFieldVal} name='newitem' fullWidth id="outlined-basic" label="Enter Name" variant="outlined" />}
                        <Box sx={{ width: "200px" }}>{addField ? <Button size='small' onClick={onAdd} variant='outlined' fullWidth>Push Option</Button> : <Button size='small' onClick={() => setField(onActive)} variant='outlined' fullWidth>Create Option</Button>}</Box>
                    </Stack> */}

                </Box>

            </Stack>


        </>

    )
}

export default PremiumType