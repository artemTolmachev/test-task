import React, {useState} from 'react'
import { useContacts } from './useContacts';
import Container from 'react-bootstrap/Container';
import { useDataViewMode } from '../useDataViewMode';
import {DATA_VIEW_MODE} from '../../pages/contacts';
import ContactsTable from './ContactsTable';
import Loader from '../../loader/Loader';
import {ToggleDataViewMode} from './toggleDataViewMode/index';
import ContactsGrid from './ContactsGrid/index'
import ContactsFilter from '../contactsFilter';
import { FilterValues } from '../../type/data';
import Grid from '@mui/material/Grid';


interface FiltersUpdateProps {
    (name: string, value: string): void;
}


const FilterDefaultValue: FilterValues = {
    fullname: "",
    gender: "all",
    nationality: "all",
}

const FilterContactsByGender = (value: string, gender: string) => {
    if(gender === 'all') return true;
    return value === gender;
} 

const FilterContactsByNationaliety = (value: string, name: string) => {
    if(name === 'all') return true;
    return value === name;
} 


const FilterContactsByName = ({ first, last }: {first: string, last: string}, fullname: string): any => 
    first.toLowerCase().includes(fullname.toLowerCase()) ||
    last.toLowerCase().includes(fullname.toLowerCase())



function Contacts() {
    const contacts = useContacts()
    const[dataViewMode, setDataViewMode] = useDataViewMode();
    const [filters, setFilters] = useState<FilterValues>(FilterDefaultValue);

    const setFiltersUpdate: FiltersUpdateProps = (name: any, value: any) => {
       
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const contaxtFIlter = contacts.data
        .filter(c => FilterContactsByName(c.name, filters.fullname))
        .filter(i => FilterContactsByGender(i.gender, filters.gender))
        .filter(n => FilterContactsByNationaliety(n.nat, filters.nationality))

       
        
  return (
    <Container>
    <ToggleDataViewMode 
    dataViewMode={dataViewMode}
    setDataViewMode={setDataViewMode}
    />
      <Grid item xs={12} >
            <ContactsFilter filters={filters} setFiltersUpdate={setFiltersUpdate}/>
        </Grid>
       {(() => {
                if(contacts.isload){
                    return (
                        <>
                        <div>load...</div>
                            <Loader/>
                        </>
                    )
                }
                if(contacts.iserror){
                    return (
                        <>
                            <div>...err</div>
                        </>
                    )
                }
                if (dataViewMode === DATA_VIEW_MODE.GRID) {
                    return (
                        <>
                            <ContactsGrid data={contaxtFIlter}/>
                        </>
                    )
                }
                if (dataViewMode === DATA_VIEW_MODE.TABLE) {
                    return (
                        <>
                            <ContactsTable data={contaxtFIlter}/>
                        </>
                    )
                }
                return null
                })()}
    </Container>
  );
}

export default Contacts;