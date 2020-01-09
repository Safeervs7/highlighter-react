import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

const DataTableBody = (props) =>{

    return (
            <TableBody>
            {
                props.value.data.map(row => (
                  <TableRow key={row.date}>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.code}</TableCell>
                    <TableCell align="left">{row.code_system}</TableCell>
                    <TableCell align="left">{row.code_system_name}</TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
    );
}

export default DataTableBody;