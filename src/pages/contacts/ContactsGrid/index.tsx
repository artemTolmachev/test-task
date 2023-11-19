import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import {ContactsProps} from '../../../type/data';
import Image from 'react-bootstrap/Image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ToCopyText from '../ToCopyText/index';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  textAlign: 'center',
}));



const ContactsGrid: React.FC<ContactsProps> = ({data}) => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    
    <Grid container spacing={2}>
      {data.map(contact => 
        <Grid   key={contact.login.uuid}>
            <DemoPaper variant="elevation" >
                  <Image src={contact.picture.medium} rounded/>    
            </DemoPaper>
            <List >
              <ListItem disablePadding>
                <ListItemText primary={`${contact.name.first} ${contact.name.last}`}/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={`${contact.dob.age} years`}/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary={contact.location.city} />
              </ListItem>
              <ListItem disablePadding>
                <ToCopyText text={contact.phone}/>
              </ListItem>
              <ListItem disablePadding>
                <ToCopyText text={contact.email}/>
              </ListItem>
            </List>
        </Grid>
      )} 
      </Grid>
  </Box>
  )
}
export default ContactsGrid

