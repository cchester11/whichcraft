import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AdminLogin from './components/admin/AdminLogin';
import AdminWorkshop from './components/admin/AdminWorkshop';
import PrivateRoutes from './utilities/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/workshop' element={<AdminWorkshop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
