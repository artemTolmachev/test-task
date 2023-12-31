import React from 'react';
import { UserData } from '../../../type/data';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import {NATIONALITIES_HUMAN_NAME } from '../Nationalitios';
import {ContactsProps } from '../../../type/data'
import ToCopyText from '../ToCopyText/index';


const ContactsTable: React.FC<ContactsProps> = ({ data }) => {
  return (
      <Table responsive>
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
              <td><Image src={contact.picture.medium} rounded /></td>
              <td>{contact.gender}</td>
              <td>{contact.name.first} {contact.name.last}</td>
              <td>{contact.dob.age} years</td>
              <td>
                <ToCopyText text={contact.email}/>
              </td>
              <td>
                <ToCopyText text={contact.phone}/>
              </td>
              <td>{contact.location.city}</td>
              <td>{NATIONALITIES_HUMAN_NAME[contact.nat]}</td>
            </tr>
              )}
          </tbody>
      </Table>
  );
};

export default ContactsTable;
