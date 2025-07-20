import React from 'react'
import "./App.css"; 
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Quali from '../pages/Quali';
import Contact from '../pages/Contact';

const App = () => {
  return (
    <>  
    <Header />
    <main className="main">
        <Home />
        <About /> 
        <Skills />
        <Quali />
        
        <Contact />
    </main>
    </>
  );
};

export default App;