import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'contactValue',
  storage,
  whitelist: ["items"]
}

const persistedContactReducer = persistReducer(persistConfig, contactsReducer)

const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filtersReducer,
  },
});

export default store;

export const persistor = persistStore(store)