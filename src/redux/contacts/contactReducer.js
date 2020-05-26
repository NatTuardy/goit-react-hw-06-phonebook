import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './contactsActionTypes';
import contactsActions from './contactsActions';

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [contactsActions.localStorageContact]: (state, { payload }) =>
    JSON.parse(payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [...state, payload];

//     case contactsActions.deleteContact.type:
//       return state.filter(contact => contact.id !== payload);

//     case contactsActions.localStorageContact.type:
//       return JSON.parse(payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactsActions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload.getContact];

//     case actionTypes.DELETE:
//       return state.filter(contact => contact.id !== payload.id);

//     case actionTypes.LOCAL_STORAGE:
//       return JSON.parse(payload);

//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload.filter;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});

// state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

//     filter: '',
//     isOpen: false,
//   };

//   componentDidMount() {
//     this.setState({
//       isOpen: true,
//     });
//     const localStorageContacts = localStorage.getItem('contacts');
//     if (localStorageContacts) {
//       this.setState({ contacts: JSON.parse(localStorageContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   handleGetContact = contact => {
//     this.setState(prev => ({
//       contacts: [...prev.contacts, contact],
//     }));
//   };

//   deleteContact = id => {
//     this.setState(state => ({
//       contacts: state.contacts.filter(contact => contact.id !== id),
//     }));
//   };
