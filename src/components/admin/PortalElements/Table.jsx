import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import HeadingBox from '../../items/HeadingBox'
import { CurrencyRupee } from '@mui/icons-material'

const Tables = ({ data, Features, sumAssured }) => {
    const [open, setOpen] = useState()

    // const data = {
    //     Category: "Low",
    //     Company: "SBI",
    //     PremiumType: "1A+2C",
    //     MinAge: 24,
    //     MaxAge: 30,
    //     sumAssured:
    //         [
    //             {
    //                 covValue: 100000,
    //                 preValue: 6173,
    //             }, {
    //                 covValue: 200000,
    //                 preValue: 10023,
    //             }
    //         ]

    // }

    return (
        <TableContainer sx={{ mt: 2, p: 2 }} elevation={0} component={Paper}>
            <HeadingBox colorText={"Sum"} defaultText={" Assured"} m={"5px 0"} />


            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 600 }} align="center">Members</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">Min Age</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">Max Age</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">25 L</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">50 L</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">1 Cr</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {sumAssured && sumAssured?.map((item, index) => (<TableRow key={index}>
                        <TableCell align="center">{item?.member}</TableCell>
                        <TableCell align="center">{item?.minAge}</TableCell>
                        <TableCell align="center">{item?.maxAge}</TableCell>
                        <TableCell align="center">{item?.covrage25}</TableCell>
                        <TableCell align="center">{item?.covrage50}</TableCell>
                        <TableCell align="center">{item?.covrage1cr}</TableCell>

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
            <HeadingBox colorText={"Company"} defaultText={"Features"} />
            <Table>
                <TableHead>
                    <TableRow>

                        <TableCell sx={{ fontWeight: 600 }} align="left">Feature Name</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">Feature Value</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {Features?.map((item, index) => {
                        return <TableRow key={index}>
                            <TableCell align="left">{item?.featureName}</TableCell>
                            <TableCell align="left">{item?.featureValue}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tables