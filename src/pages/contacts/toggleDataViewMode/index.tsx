import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import React, {useState} from 'react'
import { useCallback } from 'react';
import {DATA_VIEW_MODE, DataViewMode} from '../../contacts';

interface ToggleDataViewModeProps {
    dataViewMode: DataViewMode;
    setDataViewMode: (mode: DataViewMode) => void;
}



export const ToggleDataViewMode: React.FC<ToggleDataViewModeProps> = ({ dataViewMode, setDataViewMode }) => {
    
    const handleChengeViewMode = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>, nextView: DataViewMode) => {
            console.log(nextView)
            setDataViewMode(nextView);
        },
        [setDataViewMode]
    )
const [value, setValue] = useState([]);


function handl(event: any) {
    console.log(event)
} 

    return (
        <>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handl}>
                <ToggleButton id="tbg-btn-1" value={DATA_VIEW_MODE.GRID} >
                    Grid
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" value={DATA_VIEW_MODE.TABLE}>
                    Table
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
  };






