import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import CheckHightlight from '../hoc/CheckHightlight';

const DataTableBody = (props) =>{

    return (
            <TableBody>
            {
                props.value.data.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.code}</TableCell>
                    {CheckHightlight(TableCell, {align:"left"}, row.code_system)}
                    {CheckHightlight(TableCell, {align:"left"}, row.code_system_name)}
                  </TableRow>
                ))
            }
          </TableBody>
    );
}

export default DataTableBody;