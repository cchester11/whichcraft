import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AdminLogin from './components/admin/AdminLogin';
import AdminWorkshop from './components/admin/AdminWorkshop';
import PrivateRoutes from './utilities/PrivateRoutes';
import Createtap from './components/admin/workshopComponents/Createtap';
import Deletetap from './components/admin/workshopComponents/Deletetap';
import CreateNewsletter from './components/admin/workshopComponents/CreateNewsletter';
import DeleteNewsletter from './components/admin/workshopComponents/DeleteNewsletter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/workshop' element={<AdminWorkshop />} />
          <Route path='/workshop/createtap' element={<Createtap />} />
          <Route path='/workshop/deletetap' element={<Deletetap/>} />
          <Route path='/workshop/createnewsletter' element={<CreateNewsletter />} />
          <Route path='/workshop/deletenewsletter' element={<DeleteNewsletter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
