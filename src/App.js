import './App.css';

import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './redux/traductor/MainPage';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      
    </>
  );
}

export default App;
