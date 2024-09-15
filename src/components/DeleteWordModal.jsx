import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord } from '../redux/slices/dictionarySlice';
import "../App.css"; 

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
      
      <form class="form">
      <p className='parrafo'>Que palabra desea eliminar del diccionario. Puede escribir su palabra en español, inglés o portugués.</p>
      <div class='entrada'>
        <label>Palabra</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Escribe la palabra a eliminar"
        />
      </div>
      <div className='boton'>
        <button class="" type="button" onClick={handleDelete}>Eliminar</button>
        <button class="" type="button" onClick={onClose}>Cerrar</button>
      </div>
      </form>
    </div>
  );
};

export default DeleteWordModal;
