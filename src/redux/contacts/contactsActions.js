import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './contactsActionTypes';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');
const localStorageContact = createAction('contacts/localStorage');

// const addContact = getContact => ({
//   type: actionTypes.ADD,
//   payload: { getContact },
// });

// const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: {
//     id,
//   },
// });

// const changeFilter = filter => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });

// const localStorageContact = persistedContacts => ({
//   type: actionTypes.LOCAL_STORAGE,
//   payload: { persistedContacts },
// });

export default {
  addContact,
  deleteContact,
  changeFilter,
  localStorageContact,
};
