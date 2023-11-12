import React from 'react';
import { UserData } from '../../../type/data';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import {NATIONALITIES_HUMAN_NAME } from '../Nationalitios';

interface ContactsTableProps {
  data: UserData[];
}

const ContactsTable: React.FC<ContactsTableProps> = ({ data }) => {
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Ava</th>
        <th>Gender</th>
        <th>Full name</th>
        <th>Birsday</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Location</th>
        <th>Nationality</th>
      </tr>
    </thead>
    <tbody>
        {data.map((contact) => 
      <tr key={contact.login.uuid}>
      <td><Image src={contact.picture.medium} rounded  /></td>
      <td>{contact.gender}</td>
      <td>{contact.name.first} {contact.name.last}</td>
      <td>{contact.dob.age} years</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.location.city}</td>
      <td>{NATIONALITIES_HUMAN_NAME[contact.nat]}</td>
    </tr>
        )}
    </tbody>
  </Table>
  );
};

export default ContactsTable;
