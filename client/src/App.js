import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ResourcesHome from './components/ResourcesHome';
import LettersHome from './components/LettersHome'; 
import Landing from './components/Landing';
import About from './components/About';
import SaccoVanzettiLibrary from './components/SaccoVanzettiLibrary';

function App() {
  return (
      <div>
      <Routes>
        <Route path="/" component={Landing} />
        <Route exact path="/aboutsite" component={About} /> 
        <Route exact path="/letters" component={LettersHome} /> 
        <Route exact path="/resources" component={ResourcesHome} /> 
        <Route exact path="/library" component={SaccoVanzettiLibrary} /> 
      </Routes>
      </div>
  );
}

export default App;
