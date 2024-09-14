import { createStore } from 'redux';

// aca importamos nuestro reducer
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './slices/dictionarySlice';
//const store = createStore(rootReducer);
const store = configureStore({
    reducer: {
      dictionary: dictionaryReducer,
    },
  });
export default store;