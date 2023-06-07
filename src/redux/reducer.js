import {
  addContac,
  deleteContact,
  filterContact,
  deleteFilteredContact,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';
const STORAGE_KEY = 'contacts';

const contactsDefaultState =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

export const contactsReducer = createReducer(contactsDefaultState, {
  [addContac]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterDefaultState = [];

//Працюючий редюсер 
// export const filtersReducer = (state = filterDefaultState, action = {}) => {
//   switch (action.type) {
//     case filterContact.type:
//       return [...action.payload];
//     case deleteFilteredContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// }

//Редюсур після рефакторингу
export const filtersReducer = createReducer(filterDefaultState, {
  [filterContact]: (action) => {
    console.log(action);
    // return [...action.payload];
  },
  [deleteFilteredContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});


