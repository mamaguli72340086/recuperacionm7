// src/redux/slices/dictionarySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [], // { es: 'hola', en: 'hello', pt: 'olá' }
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    deleteWord: (state, action) => {
      const wordToDelete = action.payload.toLowerCase();

      // Filtrar palabras, solo eliminar si coincide en alguno de los idiomas
      const initialLength = state.words.length;
      state.words = state.words.filter(word =>
        !(word.es.toLowerCase() === wordToDelete ||
          word.en.toLowerCase() === wordToDelete ||
          word.pt.toLowerCase() === wordToDelete)
      );

      // Si la longitud no cambia, significa que no se encontró la palabra
      if (state.words.length === initialLength) {
        alert('No existe esa palabra en mi Base de datos');
      }
    },
  },
});

export const { addWord, deleteWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
