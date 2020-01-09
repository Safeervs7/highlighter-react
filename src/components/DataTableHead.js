import React, { useContext } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {ThemeContext} from '../context/ThemeProvider';

const DataTableHead = (props) =>{
    const themeContext = useContext(ThemeContext);
    console.log(themeContext);
    return (
            <TableHead>
               <TableRow>
                  {props.value.head.map((name, i) => {     
                    return (<TableCell className={themeContext.classes.customBg} align="center" key={i} >{name}</TableCell>) 
                  })}
                </TableRow>
            </TableHead>
    );
}

export default DataTableHead;