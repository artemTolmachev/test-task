import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, {useState} from 'react'
import { useCallback } from 'react';
import {DATA_VIEW_MODE, DataViewMode} from '../../contacts';

interface ToggleDataViewModeProps {
    dataViewMode: DataViewMode;
    setDataViewMode: (mode: DataViewMode) => void;
}



export const ToggleDataViewMode: React.FC<ToggleDataViewModeProps> = ({ dataViewMode, setDataViewMode }) => {
    
    const handleChengeViewMode = useCallback (
        (event: React.MouseEvent<HTMLElement, MouseEvent>, nextView: DataViewMode) => {
          
            setDataViewMode(nextView);
        },
        [setDataViewMode]
    )
   
    return (
        <>
            <ToggleButtonGroup
            orientation="vertical"
            value={dataViewMode}
            exclusive
            onChange={handleChengeViewMode}
>
  <ToggleButton value={DATA_VIEW_MODE.GRID} aria-label={DATA_VIEW_MODE.GRID}>
    <ViewListIcon />
  </ToggleButton>
  <ToggleButton value={DATA_VIEW_MODE.TABLE} aria-label={DATA_VIEW_MODE.TABLE}>
    <ViewModuleIcon />
  </ToggleButton>
</ToggleButtonGroup>
        </>
    )
  };






