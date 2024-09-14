// src/components/DeleteWordModal.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord } from '../redux/slices/dictionarySlice';

const DeleteWordModal = ({ onClose }) => {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!word.trim()) {
      alert('Por favor, ingrese una palabra para eliminar.');
      return;
    }

    dispatch(deleteWord(word));
    setWord(''); // Limpia el campo de entrada
    onClose(); // Cierra la modal
  };

  return (
    <div className="modal">
      <h2>Traductor USIP</h2>
      <p>Que palabra desea eliminar del diccionario. Puede escribir su palabra en español, inglés o portugués.</p>
      <label>Palabra</label>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Escribe la palabra a eliminar"
      />
      <button type="button" onClick={handleDelete}>Eliminar</button>
      <button type="button" onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default DeleteWordModal;
