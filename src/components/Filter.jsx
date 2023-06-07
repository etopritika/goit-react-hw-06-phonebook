import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../redux/actions';
import { getContacts } from '../redux/selectors';
import css from '../css-modules/Filter.module.css';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filterInputChange = e => {
    const filterValue = e.currentTarget.value;
    setFilter(filterValue);
    const filteredItems = contacts.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    dispatch(filterContact(filteredItems));
  };

  return (
    <div className={css.filter__container}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterInputChange}
        />
      </label>
    </div>
  );
}
