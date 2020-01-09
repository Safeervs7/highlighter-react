import React, { useContext } from 'react';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { DataContext } from '../context/DataProvider';
import { ThemeContext } from '../context/ThemeProvider';

import DataTableHead from '../components/DataTableHead';
import DataTableBody from '../components/DataTableBody';
import DataTableEmptyBody from '../components/DataTableEmptyBody';
import CircularProgress from '@material-ui/core/CircularProgress';

const DataTable = () =>{
    const dataContext = useContext(DataContext);
    const themeContext = useContext(ThemeContext);

    let tableData = [];
    if(dataContext.dataFile && dataContext.dataFile.deIdentifiedFile && dataContext.dataFile.deIdentifiedFile.file && dataContext.dataFile.deIdentifiedFile.file.encounters){
      tableData = dataContext.dataFile.deIdentifiedFile.file.encounters.parser;
    }
    let tableHeadArray = ['Date', 'Name', 'Code', 'Code System', 'Code System Name'];

    return (
        dataContext.isDataFetched ? (
          <TableContainer component={Paper} className={`${themeContext.classes.customMarginTop} ${themeContext.classes.tableMinHeight}`}>
          <Table aria-label="simple table">
            <DataTableHead value={{head:tableHeadArray}}></DataTableHead>
            {tableData.length > 0 ? (
              <DataTableBody value={{data:tableData}}></DataTableBody>
            ) : (
               <DataTableEmptyBody cellCount={tableHeadArray.length}></DataTableEmptyBody>
            )}
          </Table>
        </TableContainer>
        ):(
          <Grid container justify = "center" className={`${themeContext.classes.customMarginTop}`} >
            <CircularProgress disableShrink />
          </Grid>
        )
    );
}

export default DataTable;