import React, { useEffect,useState } from 'react';
import { HashRouter,BrowserRouter, Routes, Route ,useNavigate,redirect} from "react-router-dom";

import Login from './components/login';
import Home from './container/Home';

  

const App = () => {
  const [User,setUser] = useState(localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear());
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
    
        <Route path="/*" element={User ?(<Home />):(<Login replace to={"/login"} />)} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
