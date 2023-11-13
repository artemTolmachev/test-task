import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import React from 'react'
import { useCallback } from 'react';
import {DATA_VIEW_MODE, DataViewMode} from '../../contacts';

interface ToggleDataViewModeProps {
    dataViewMode: DataViewMode;
    setDataViewMode: React.Dispatch<React.SetStateAction<DataViewMode>>;
}



export const ToggleDataViewMode: React.FC<ToggleDataViewModeProps> = ({ dataViewMode, setDataViewMode }) => {
    
    const handleChengeViewMode = useCallback(
        (_: any, nextView: DataViewMode) => {
            console.log(nextView)
            setDataViewMode(nextView);
        },
        [setDataViewMode]
    )
    return (
        <>
            <ToggleButtonGroup type="radio"
             name="options" 
             value={dataViewMode} 
             onChange={handleChengeViewMode}
             >
                <ToggleButton id="tbg-radio-2" value={DATA_VIEW_MODE.GRID} >
                    Grid
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={DATA_VIEW_MODE.TABLE} >
                    Table
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
  };
