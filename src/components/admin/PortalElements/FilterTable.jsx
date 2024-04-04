import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import CoverageConvert from '../../../function/CoverageConvert';






export default function FilterTable({ data }) {


    return (
        <Paper elevation={0} sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Members</TableCell>
                            <TableCell sx={{ fontWeight: 600, color: "orangered" }}>Age Band</TableCell>
                            {
                                data && data[0]?.coverages?.map((item, index) => {
                                    return <TableCell key={index} sx={{ fontWeight: 600, color: "orangered" }}>&#8377; <CoverageConvert value={item?.coverage} /> </TableCell>
                                })
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell >{item.member}</TableCell>
                                    <TableCell >{`${item.minAge} - ${item.maxAge}`}</TableCell>
                                    {
                                        item?.coverages?.map((ite, index) => {
                                            return <TableCell key={index} >&#8377; {parseFloat(ite?.premium).toFixed(2)}</TableCell>
                                        })
                                    }


                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}
