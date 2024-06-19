import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Card from './pages/Card';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [details, setDetails] = useState({ from: '', to: '', message: '' });

  return (
    <BrowserRouter>
      <Header />
      <div className="">
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedTemplate={setSelectedTemplate} />}
          />
          <Route
            path="/details"
            element={<Details setDetails={setDetails} />}
          />
          <Route
            path="/card"
            element={<Card selectedTemplate={selectedTemplate} details={details} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
