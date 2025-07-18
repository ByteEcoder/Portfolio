import React from 'react'
import "./App.css"; 
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';

const App = () => {
  return (
    <>  
    <Header />
    <main className="main">
      <Home />
       <About /> 
    </main>
    </>
  );
};

export default App;