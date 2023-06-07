import { createAction } from "@reduxjs/toolkit";

const ADD_CONTACT = 'ADD_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const FILTER_CONTACT = 'FILTER_CONTACT';
const DELETE_FILTER = 'DELETE_FILTER';

// export const addContac = name => {
//   return { type: ADD_CONTACT, payload: name };
// };

export const addContac = createAction(ADD_CONTACT);

// export const deleteContact = id => {
//   return { type: DELETE_CONTACT, payload: id };
// };

export const deleteContact = createAction(DELETE_CONTACT);

// export const filterContact = contacts => {
//   return { type: FILTER_CONTACT, payload: contacts };
// };

export const filterContact = createAction(FILTER_CONTACT);

// export const deleteFilteredContact = id => {
//   return { type: DELETE_FILTER, payload: id };
// };

export const deleteFilteredContact = createAction(DELETE_FILTER);

