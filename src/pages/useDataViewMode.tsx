import { DATA_VIEW_MODE, DataViewMode } from './contacts';
import { useState, useEffect } from 'react';


const getInitialDataViewMode = (): DataViewMode => {
    const storedDataViewMode = localStorage.getItem("dataViewMode") as DataViewMode;
  
    return storedDataViewMode || DATA_VIEW_MODE.TABLE;
};

  export const useDataViewMode = (): 
  [DataViewMode, React.Dispatch<React.SetStateAction<DataViewMode>>] => {

    const [dataViewMode, setDataViewMode] = useState<DataViewMode>(getInitialDataViewMode);

    //cохранения dataViewMode в localStorage.
    useEffect(() => {
      localStorage.setItem("dataViewMode", dataViewMode);
    }, [dataViewMode]);
    //Это массив зависимостей, который указывает, что эффект должен быть выполнен только при изменении dataViewMode.
  
    return [dataViewMode, setDataViewMode];
  };

// DataViewMode - Это тип состояния, который указывает, что dataViewMode в стейте может быть только одним из значений из DATA_VIEW_MODE.

