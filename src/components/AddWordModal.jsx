// src/components/AddWordModal.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../redux/slices/dictionarySlice';
import "../App.css"; 

const AddWordModal = ({ onClose }) => {
  const [es, setEs] = useState('');
  const [en, setEn] = useState('');
  const [pt, setPt] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addWord({ es, en, pt }));
    onClose();
  };

  return (
    <div className="modal">
      <h2 class="titulo">Agregar Palabra</h2>
      <form class="form">
        <div class="entrada">
          <label>Español</label>
          <input type="text" value={es} onChange={(e) => setEs(e.target.value)} />
        </div>
        <div class="entrada">
          <label>Inglés</label>
          <input type="text" value={en} onChange={(e) => setEn(e.target.value)} />
        </div>
        <div class="entrada">
          <label>Portugués</label>
          <input type="text" value={pt} onChange={(e) => setPt(e.target.value)} />
        </div>
        <div className="boton">
          <button type="button" onClick={handleAdd}>Agregar</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </div>
      </form>
    </div>
  );
};

export default AddWordModal;
