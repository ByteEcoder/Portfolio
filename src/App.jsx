import React from 'react'
import "./App.css"; 
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Quali from '../pages/Quali';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp';


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
    <Footer />
    <ScrollUp />
    </>
  );
};

export default App;