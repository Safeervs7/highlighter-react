import React, { useContext } from 'react';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { DataContext } from '../context/DataProvider';
import { ThemeContext } from '../context/ThemeProvider';

import DataTableHead from '../components/DataTableHead';
import DataTableBody from '../components/DataTableBody';

const DataTable = () =>{
    const dataContext = useContext(DataContext);
    const themeContext = useContext(ThemeContext);

    let tableData = [];
    if(dataContext.dataFile && dataContext.dataFile.deIdentifiedFile && dataContext.dataFile.deIdentifiedFile.file && dataContext.dataFile.deIdentifiedFile.file.encounters){
      tableData = dataContext.dataFile.deIdentifiedFile.file.encounters.parser;
    }
    let tableHeadArray = ['Date', 'Name', 'Code', 'Code System', 'Code System Name'];

    return (
        <TableContainer component={Paper} className={themeContext.classes.customPaddingTop}>
          <Table aria-label="simple table">
            <DataTableHead value={{head:tableHeadArray}}></DataTableHead>
            <DataTableBody value={{data:tableData}}></DataTableBody>
          </Table>
        </TableContainer>
    );
}

export default DataTable;