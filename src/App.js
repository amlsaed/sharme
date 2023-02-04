import React, { useEffect } from 'react';
import { HashRouter,BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";

import Login from './components/login';
import Home from './container/Home';

const App = () => {
  

  // useEffect(() => {
  //   const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  //   if (!User){ window.location.href='/login';}
  // }, []);
  return (
    <HashRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*/login" element={<Login/>}/>
        <Route path="/*" element={<Home />} />
    </Routes>
    </HashRouter>
    
  );
};

export default App;
