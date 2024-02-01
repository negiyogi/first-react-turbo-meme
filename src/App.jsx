// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import KBC from './KBC';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<Layout component={<About />} />} />
        <Route path="/Dashboard" element={<Layout component={<Dashboard />} />} />
        <Route path="/KBC" element={<Layout component={<KBC />} />} />
        {/* <Route path="/KBC" element={<KBC />} /> */}
        <Route path="/" element={<Layout component={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;
