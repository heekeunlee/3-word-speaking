import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import MyDeck from './pages/MyDeck';
import Guide from './pages/Guide';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chapter/:id" element={<Chapter />} />
          <Route path="/my-deck" element={<MyDeck />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
