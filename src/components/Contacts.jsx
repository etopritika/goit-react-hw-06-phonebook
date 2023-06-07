import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { deleteFilteredContact } from '../redux/actions';
import { getContacts } from '../redux/selectors';
import { getFilters } from '../redux/selectors';
import css from '../css-modules/Contacts.module.css';
const STORAGE_KEY = 'contacts';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteButton = id => {
    dispatch(deleteContact(id));
    if(filteredContacts.length === 0){
      return;
    }
    dispatch(deleteFilteredContact(id));
  };

  const renderContacts = contactsArray => {
    return contactsArray.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={css.delete__button}
          onClick={() => handleDeleteButton(contact.id)}
          type="button"
        >
          Delete
        </button>
      </li>
    ));
  };

  return (
    <>
      <ul className={css.contacts__list}>
        {filteredContacts.length === 0
          ? renderContacts(contacts)
          : renderContacts(filteredContacts)}
      </ul>
    </>
  );
}
