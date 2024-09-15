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
          <button class="" type="button" onClick={handleAdd}>Agregar</button>
          <button class="" type="button" onClick={onClose}>Cerrar</button>
        </div>
      </form>
    </div>
  );
};

export default AddWordModal;
