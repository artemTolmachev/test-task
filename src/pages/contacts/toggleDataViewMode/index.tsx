import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useCallback } from 'react';
import {DATA_VIEW_MODE, DataViewMode} from '../../contacts';
import Grid from '@mui/material/Grid';
import '../../contactsFilter/ContactsFilter.scss';



interface ToggleDataViewModeProps {
    dataViewMode: DataViewMode;
    setDataViewMode: (mode: DataViewMode) => void;
}

export const ToggleDataViewMode: React.FC<ToggleDataViewModeProps> = ({ dataViewMode, setDataViewMode }) => {
    const handleChengeViewMode = useCallback (
        (event: React.MouseEvent<HTMLElement, MouseEvent>, nextView: DataViewMode) => {
          if (nextView !== null) {
            setDataViewMode(nextView);
          }
        },
        [setDataViewMode]
    )

    return (
      <Grid container>
  <Grid desktop={12} laptop={8} tablet={8} mobile={12}>
        <ToggleButtonGroup
                  fullWidth={true}
                  value={dataViewMode}
                  exclusive
                  onChange={handleChengeViewMode}
                  >
            
                  <ToggleButton value={DATA_VIEW_MODE.GRID} aria-label={DATA_VIEW_MODE.GRID} style={{ backgroundColor: 'white' }}>
                    <ViewListIcon />
                  </ToggleButton>
              
                  
                    <ToggleButton value={DATA_VIEW_MODE.TABLE} aria-label={DATA_VIEW_MODE.TABLE} style={{ backgroundColor: '#89dca1' }}>
                      <ViewModuleIcon />
                    </ToggleButton>
            
                </ToggleButtonGroup>
      </Grid>
      </Grid>
    
    )
  };






