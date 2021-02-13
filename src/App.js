import React from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <div className='container'>
      <Header />
      <AboutMe />
      <Footer />
      </div>
    </div>
  );
}

export default App;
