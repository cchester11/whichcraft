import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AdminLogin from './components/AdminLogin';
import AdminWorkshop from './components/AdminWorkshop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/workshop' element={<AdminWorkshop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
