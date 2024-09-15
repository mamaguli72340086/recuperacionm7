// src/components/TranslateWordModal.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "../App.css"; 

const TranslateWordModal = ({ onClose }) => {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('en');
  const [translation, setTranslation] = useState('');
  const words = useSelector((state) => state.dictionary.words);

  const handleTranslate = () => {
    const foundWord = words.find(w =>
      w.es.toLowerCase() === word.toLowerCase() ||
      w.en.toLowerCase() === word.toLowerCase() ||
      w.pt.toLowerCase() === word.toLowerCase()
    );

    if (foundWord) {
      setTranslation(foundWord[language]);
    } else {
      setTranslation('No existe en mi base de datos la palabra a traducir');
    }
  };

  return (
    <div className="modal">
      <h2 className='titulo'>Traducir Palabra</h2>
      <form action="" class="form">
      <p>Que palabra desea traducir en el diccionario. Agregue su palabra y después el idioma de traducción.</p>
      <div class="entrada">
        <label>Palabra a traducir</label>
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      </div>
      <div class="entrada">
        <label>Idioma de traduccion</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="pt">Portugués</option>
        </select>
      </div>
      <div class="entrada">
        <label htmlFor="">Traduccion</label>
        <textarea readOnly value={translation}></textarea>
      </div>
      <div class="boton">
        <button type="button" onClick={handleTranslate}>Traducir</button>
        <button type="button" onClick={onClose}>Cerrar</button>
      </div>
      </form>
    </div>
  );
};

export default TranslateWordModal;
