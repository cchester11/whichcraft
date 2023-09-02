import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AdminEntry from './components/AdminEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<AdminEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
