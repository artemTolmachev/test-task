import React from 'react'
import { useContacts } from './useContacts';
import Container from 'react-bootstrap/Container';
import { useDataViewMode } from '../useDataViewMode';
import {DATA_VIEW_MODE} from '../../pages/contacts';
import ContactsTable from './ContactsTable';
import Loader from '../../loader/Loader';
import {ToggleDataViewMode} from './toggleDataViewMode/index';


function Contacts() {
    const contacts = useContacts()
    const[dataViewMode, setDataViewMode] = useDataViewMode();
 
  return (
    <Container>
    <ToggleDataViewMode 
    dataViewMode={dataViewMode}
    setDataViewMode={setDataViewMode}
    />
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
                if (dataViewMode === DATA_VIEW_MODE.GRID.toLowerCase()) {
                    return (
                        <>
                        GRID
                        </>
                    )
                }
                if (dataViewMode === DATA_VIEW_MODE.TABLE.toLowerCase()) {
                    return (
                        <>
                            <ContactsTable data={contacts.data}/>
                        </>
                    )
                }
                return null
                })()}
    </Container>
  );
}

export default Contacts;