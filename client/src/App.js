import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
// import ResourcesHome from './components/ResourcesHome';
// import LettersHome from './components/LettersHome'; 
// import Landing from './components/Landing';
// import About from './components/About';
// import SaccoVanzettiLibrary from './components/SaccoVanzettiLibrary';

function App() {
  return (
      <div>
      <Routes>
        <Route  index component={<div>Test Landing</div>} />
        {/* <Route path="/aboutsite" component={<About/>} /> 
        <Route path="/letters" component={<LettersHome/>} /> 
        <Route path="/resources" component={<ResourcesHome/>} /> 
        <Route path="/library" component={<SaccoVanzettiLibrary/>} />  */}
      </Routes>
      </div>
  );
}

export default App;
