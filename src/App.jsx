import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AllProjects from './components/allProjects/AllProjects';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allProjects" element={<AllProjects />} />
    </Routes>
  </BrowserRouter>
);

export default App;