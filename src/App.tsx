import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
} from "react-router-dom";
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';


const App: React.FC = () => {

    return (
    <div className="App">
      <Routes>
        <Route path='' element={<div>Home</div>}/>
        <Route path='login' element={<Login />}/>
        <Route path='reg' element={<Registration />}/>
      </Routes>
    </div>
  );
}

export default App;
