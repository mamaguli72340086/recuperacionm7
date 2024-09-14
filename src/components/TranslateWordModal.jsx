// src/components/TranslateWordModal.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
      <h2>Traductor USIP</h2>
      <p>Que palabra desea traducir en el diccionario. Agregue su palabra y después el idioma de traducción.</p>
      <label>Palabra a traducir</label>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      <label>Idioma de traduccion</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="pt">Portugués</option>
      </select>
      <textarea readOnly value={translation}></textarea>
      <button type="button" onClick={handleTranslate}>Traducir</button>
      <button type="button" onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default TranslateWordModal;
