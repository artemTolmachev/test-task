import React from 'react'
import { FilterValues } from '../../type/data';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { NATIONALITIES_HUMAN_NAME } from '../contacts/Nationalitios';




interface FiltersUpdateProps {
    (name: string, value: string): void;
  }


interface ContactsFilterProps {
    filters: FilterValues;
    setFiltersUpdate: FiltersUpdateProps;
}




 const ContactsFilter: React.FC<ContactsFilterProps> = ({filters, setFiltersUpdate}) => {

    const hendlChangeFilter = (event: any) => {
        if('target' in event){
            const inputEvent = event as ChangeEvent<HTMLInputElement>;
            setFiltersUpdate(inputEvent.target.name, inputEvent.target.value)
        }else {
            // Событие от компонента Select
            const selectEvent = event as SelectChangeEvent<string>;
            setFiltersUpdate(selectEvent.target.name, selectEvent.target.value)
          }
    }

  return (
    <div>
       <TextField 
                id='select'
                name="fullname"
                label="Fullname"
                variant="outlined"
                value={filters.fullname}
                onChange={hendlChangeFilter}
                />
           <FormControl
                    sx={{minWidth: 120 }}
                >
                        <InputLabel id="demo-simple-select-label">Gende</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    
                        label="Gender"
                        variant="outlined"
                        name='gender'

                        value={filters.gender}
                        onChange={hendlChangeFilter}
                        >
                            <MenuItem value={'all'}>All</MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                        </Select>
                </FormControl>
                <FormControl
                    sx={{minWidth: 120 }}
                >
                        <InputLabel id="nationality">Nationality</InputLabel>
                        <Select
                    
                        labelId="nationality"
                        id="demo-simple-select"
                    
                        label="Nationality"
                        variant="outlined"
                        name='nationality'

                        value={filters.nationality}
                        onChange={hendlChangeFilter}
                        >
                            <MenuItem value={'all'}>All</MenuItem>
                            {Object.entries(NATIONALITIES_HUMAN_NAME).map(([key, name]) => {
                            return <MenuItem value={key} key={key}>{name}</MenuItem>
                            })}
                        </Select>
                </FormControl>
    </div>
  )
}

export default ContactsFilter;