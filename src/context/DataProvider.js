import React, { createContext, useState, useEffect } from 'react';

import fetchData from '../service/fetchData';

export const DataContext = createContext();

const DataProvider =(props)=> {
    let [ dataFile, setDataFile ] = useState({});
    let [ highlightFile, setHighlightFile ] = useState({});
    let [ isDataFetched, setIsDataFetched ] = useState(false);

    let getFetchData = ()=>{fetchData().then((data)=>{
        if(data.data){
          setDataFile(data.data);
        }
        if(data.highlight){
          setHighlightFile(data.highlight);
        }
      });
      setIsDataFetched(true);
    }

    useEffect(() => {
        if(!isDataFetched){
            getFetchData();
        }
        setIsDataFetched(true);
    }, [isDataFetched]);
    return (
      <DataContext.Provider value={{dataFile:dataFile, highlightFile: highlightFile}}>
        {props.children}
      </DataContext.Provider>
    )
  }
  
export default DataProvider;