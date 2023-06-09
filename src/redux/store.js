import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer },
});

export const persistor = persistStore(store);
