import * as React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    height: '100%',
    width: '100%',
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  
export default function CustomizedButtons({filtersDelit}) {
    return (
        <ColorButton  onClick={filtersDelit} variant="contained" >Сбросить</ColorButton>
    );
  }