import { DATA_VIEW_MODE, DataViewMode } from './contacts';
import { useState, useEffect } from 'react';

//   localStorage.getItem("dataViewMode")?.toLowerCase() as DataViewMode:
// localStorage.getItem("dataViewMode") - Получает значение из localStorage по ключу "dataViewMode".
// ?.toLowerCase() - Если значение существует (?. это опциональный оператор), то приводит его к нижнему регистру с помощью метода .toLowerCase(). Это делается, чтобы убедиться, что сравнение будет регистронезависимым.

// as DataViewMode - Приводит результат к типу DataViewMode.
// return storedDataViewMode || DATA_VIEW_MODE.TABLE;:

// Если storedDataViewMode не существует (например, если в localStorage нет значения для "dataViewMode"), тогда возвращается значение DATA_VIEW_MODE.TABLE.
// getInitialDataViewMode = (): DataViewMode:

// (): DataViewMode - Это объявление типа возвращаемого значения функции, которая должна быть типа DataViewMode.
// Таким образом, функция getInitialDataViewMode возвращает начальное значение для dataViewMode. Если в localStorage есть значение для "dataViewMode", то оно будет приведено к нижнему регистру, а если нет, то вернется значение по умолчанию, которое равно DATA_VIEW_MODE.TABLE.

//getInitialDataViewMode - Это функция, которая устанавливает начальное значение для dataViewMode (возвращаемое из localStorage или DATA_VIEW_MODE.TABLE).

const getInitialDataViewMode = (): DataViewMode => {
    const storedDataViewMode = localStorage.getItem("dataViewMode")?.toLowerCase() as DataViewMode;
    return storedDataViewMode || DATA_VIEW_MODE.TABLE;
};


  export const useDataViewMode = (): 
  [DataViewMode, React.Dispatch<React.SetStateAction<DataViewMode>>] => {

    const [dataViewMode, setDataViewMode] = useState<DataViewMode>(getInitialDataViewMode);
  
    //охранения dataViewMode в localStorage.
    useEffect(() => {
      localStorage.setItem("dataViewMode", dataViewMode);
    }, [dataViewMode]);
    //Это массив зависимостей, который указывает, что эффект должен быть выполнен только при изменении dataViewMode.
  
    return [dataViewMode, setDataViewMode];
  };

// DataViewMode - Это тип состояния, который указывает, что dataViewMode в стейте может быть только одним из значений из DATA_VIEW_MODE.

