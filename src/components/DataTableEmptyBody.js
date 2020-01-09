import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

const DataTableEmptyBody = (props) =>{

    return (
            <TableBody>
            {
                  <TableRow>
                    <TableCell colSpan={props.cellCount} align="left">No Items</TableCell>
                  </TableRow>
            }
          </TableBody>
    );
}

export default DataTableEmptyBody;