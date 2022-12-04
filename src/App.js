import { useState } from "react";
import './App.css';
import DaoForm from "./components/DaoForm";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Welcome from "./pages/welcome/Welcome";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/token" element={<DaoForm/>}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
