// App.js
import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/sobre" element={Sobre} />
          <Route path="/contato" element={Contato} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
