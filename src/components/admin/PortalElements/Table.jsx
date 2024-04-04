import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import HeadingBox from '../../items/HeadingBox'
import { CurrencyRupee } from '@mui/icons-material'

const Tables = ({ Features, sumAssuredFloat }) => {
    const [open, setOpen] = useState()
    console.log(Features);
    console.log(sumAssuredFloat);
    return (
        <TableContainer sx={{ mt: 2, p: 2 }} elevation={0} component={Paper}>

            <HeadingBox colorText={"Floater"} defaultText={"Sum Assured"} titleTag={`Total Plans ${sumAssuredFloat?.length}`} m={"25px 0"} />


            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {<TableCell align="left" sx={{ maxWidth: 30, fontWeight: 600, color: "orangered" }}>S.No.</TableCell>}
                        <TableCell sx={{ fontWeight: 600 }} align="center">Persons</TableCell>
                        {<TableCell sx={{ fontWeight: 600 }} align="center">Min Age</TableCell>}
                        {<TableCell sx={{ fontWeight: 600 }} align="center">Max Age</TableCell>}
                        {
                            sumAssuredFloat[0]?.coverages?.map((item, index) => {
                                return <TableCell key={index} sx={{ fontWeight: 600 }} align="center"> &#8377; {item?.coverage}</TableCell>

                            })
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                    {sumAssuredFloat && sumAssuredFloat?.map((item, index) => (<TableRow key={index}>
                        <TableCell align="left" sx={{ maxWidth: 30, fontWeight: 600, color: "orangered" }}>{item?.sid}</TableCell>
                        <TableCell align="center">{item?.member}</TableCell>
                        <TableCell align="center">{item?.minAge}</TableCell>
                        <TableCell align="center">{item?.maxAge}</TableCell>
                        {
                            item?.coverages?.map((ite, index) => {
                                return <TableCell key={index} align="center">&#8377; {ite?.premium}</TableCell>

                            })
                        }

                    </TableRow>))}

                </TableBody>




            </Table>
            {/* 
            <Table>
                <TableBody>

                    <TableRow>
                        <TableCell>
                            <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </IconButton>
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 600 }}>Coverage</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 600 }}>Premium</TableCell>


                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Table>
                                        <TableBody>
                                            {
                                                data?.sumAssured?.map((item, index) => {
                                                    return <TableRow key={index}>

                                                        <TableCell />
                                                        <TableCell align="center" ><CurrencyRupee sx={{ fontSize: "14px" }} /> {item.coverage}</TableCell>
                                                        <TableCell align="center" > <CurrencyRupee sx={{ fontSize: "14px" }} />{item.premium}</TableCell>

                                                    </TableRow>
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableCell>

                    </TableRow>

                </TableBody>
            </Table> */}
            <HeadingBox colorText={"Company"} defaultText={"Features"} titleTag={`Total Features ${Features?.length}`} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{ maxWidth: 50, fontWeight: 600, color: "orangered" }}>S.No.</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="left">Feature Name</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">Feature Value</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {Features?.map((item, index) => {
                        return <TableRow key={index}>
                            <TableCell align="left" sx={{ maxWidth: 50, fontWeight: 600, color: "orangered" }}>{item?.sid}</TableCell>
                            <TableCell align="left">{item?.featureName}</TableCell>
                            <TableCell align="left">{item?.featureValue}</TableCell>
                        </TableRow>
                    })} */}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tables