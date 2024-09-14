// src/routes/MainPage.jsx
import React, { useState } from 'react';
import AddWordModal from '../components/AddWordModal';
import DeleteWordModal from '../components/DeleteWordModal';
import TranslateWordModal from '../components/TranslateWordModal';

const MainPage = () => {
  // Usar un solo estado para manejar la ventana modal activa
  const [activeModal, setActiveModal] = useState(null);

  // Función para cerrar cualquier modal activo
  const closeModal = () => setActiveModal(null);

  return (
    <div className="main-page">
      <h1>Traductor USIP</h1>
      <button onClick={() => setActiveModal('add')}>Agregar Palabra</button>
      <button onClick={() => setActiveModal('delete')}>Eliminar Palabra</button>
      <button onClick={() => setActiveModal('translate')}>Traducir</button>

      {activeModal === 'add' && <AddWordModal onClose={closeModal} />}
      {activeModal === 'delete' && <DeleteWordModal onClose={closeModal} />}
      {activeModal === 'translate' && <TranslateWordModal onClose={closeModal} />}
    </div>
  );
};

export default MainPage;
