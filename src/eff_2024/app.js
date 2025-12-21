import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Formulaire from './formulaire';
import Experts1 from './expert1';
import Experts2 from './expert2';
function App() {
  return (
    <Router>
      <div >
        <nav >
          <Link to="/formulaire" >Formulaire</Link>
          <Link to="/experts1" >Experts1</Link>
          <Link to="/experts2">Experts2</Link>
        </nav>

        <Routes>
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/experts1" element={<Experts1 />} />
          <Route path="/experts2" element={<Experts2 />} />
          <Route path="/" element={<div>Bienvenue - Choisissez un menu</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



