import React, { ChangeEvent } from 'react';
import { FilterValues } from '../../type/data';
import { SelectChangeEvent } from '@mui/material/Select';
import { NATIONALITIES_HUMAN_NAME } from '../contacts/Nationalitios';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import CustomizedButtons from '../../ButtonButstrap/index';
import Grid from '@mui/material/Grid';
import '../contactsFilter/ContactsFilter.scss'
import Box from '@mui/material/Box';

interface FiltersUpdateProps {
  (name: string, value: string): void;
}

interface FiltersDelitFunction {
  (): void;
}

interface ContactsFilterProps {
  filtersDelit: FiltersDelitFunction;
  filters: FilterValues;
  setFiltersUpdate: FiltersUpdateProps;
}

const ContactsFilter: React.FC<ContactsFilterProps> = ({ filters, setFiltersUpdate, filtersDelit}) => {

  const handleChangeFilter = (event: any) => {
    if ('target' in event) {
      const inputEvent = event as ChangeEvent<HTMLInputElement>;
      setFiltersUpdate(inputEvent.target.name, inputEvent.target.value);
    } else {
      // Событие от компонента Select
      const selectEvent = event as SelectChangeEvent<string>;
      setFiltersUpdate(selectEvent.target.name, selectEvent.target.value);
    }
  };

  return (
    <Grid container spacing={2} >
        <Grid item desktop={3} laptop={2} tablet={8} mobile={12}>
        <Form.Control
          placeholder=" Fullname"
          aria-label="Fullname"
          aria-describedby="basic-addon2"
          id="fullname"
          name="fullname"
          value={filters.fullname}
          onChange={handleChangeFilter}
          style={{ lineHeight: '2.7' }}
        />
        </Grid>
        <Grid item desktop={3} laptop={2} tablet={8} mobile={12}>
        <FloatingLabel controlId="floatingSelect" label="Gender">
          <Form.Select 
          id="gender"
          name="gender"
          value={filters.gender}
          onChange={handleChangeFilter}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
        </FloatingLabel>
        </Grid>
        <Grid item desktop={3} laptop={2} tablet={8} mobile={12}>
        <FloatingLabel controlId="floatingSelect" label="nationality">
          <Form.Select 
            aria-label="nationality"
            id="nationality"
            name="nationality"
            value={filters.nationality}
            onChange={handleChangeFilter}
          >
            <option value="all">All</option>
            {Object.entries(NATIONALITIES_HUMAN_NAME).map(([key, name]) => (
              <option value={key} key={key}>
                {name}
              </option>
            ))}
          </Form.Select>
      </FloatingLabel>
        </Grid>
        <Grid item desktop={3} laptop={2} tablet={8} mobile={12}>
          <CustomizedButtons filtersDelit={filtersDelit}/>
        </Grid>
      </Grid>
  );
};

export default ContactsFilter;


