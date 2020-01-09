import React, { useContext } from 'react';


import { ThemeContext } from '../context/ThemeProvider';
import { DataContext } from '../context/DataProvider';

const CheckHightlight = ( Component, properties, value ) => {
    const themeContext = useContext(ThemeContext);
    const dataContext = useContext(DataContext);
    let classValue = '';
    if(dataContext.highlightFile.inclusion && dataContext.highlightFile.inclusion.includes(value)){
        classValue = themeContext.classes.bgRed;
    }
    if(dataContext.highlightFile.exclusion && dataContext.highlightFile.exclusion.includes(value)){
        classValue = themeContext.classes.bgGreen;
    }
    return <Component {...properties} className={classValue}>{value}</Component>;
};

export default CheckHightlight;