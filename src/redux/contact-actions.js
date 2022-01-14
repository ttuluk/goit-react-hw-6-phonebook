import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', (text, phoneNumber) => {
  return {
    payload: {
      id: shortid.generate(),
      name: text,
      number: phoneNumber,
    }
  };
});

const deleteContact = createAction('contacts/removeContact'); 
const changeFilter = createAction('contacts/filterName');
export default { addContact, deleteContact, changeFilter };
