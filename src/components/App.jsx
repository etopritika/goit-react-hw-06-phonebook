import React from 'react';
import { ContactForm } from './ContactForm';
import Filter from './Filter';
import Contacts from './Contacts';

export const App = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm button="Add contact" />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </section>
  );
};
