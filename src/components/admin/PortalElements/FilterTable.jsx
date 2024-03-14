import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Members' },
    { id: 'code', label: 'Age Band' },
    {
        id: 'population',
        label: '25 L',

        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: '50 L',

        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: '1 Cr',

        align: 'left',
        format: (value) => value.toFixed(2),
    },
];




export default function FilterTable({ data }) {

    return (
        <Paper elevation={0} sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell >{item.member}</TableCell>
                                    <TableCell >{`${item.minAge} - ${item.maxAge}`}</TableCell>
                                    <TableCell >&#8377; {item.covrage25}</TableCell>
                                    <TableCell >&#8377; {item.covrage50}</TableCell>
                                    <TableCell >&#8377; {item.covrage1cr}</TableCell>

                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}
