import React from 'react';
import './App.css';
import {Header, Image, Segment, Container} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import LetterToReaders from './components/LetterToReaders';
import BlogLandingPage from './components/Blog/BlogLandingPage'; 
import ResourcesHome from './components/ResourcesHome';
import LettersHome from './components/LettersHome'; 
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import SaccoVanzettiLibrary from './components/SaccoVanzettiLibrary';

function App() {
  return (
      <div>
    <Route exact path="/aboutsite" component={About} /> 
    <Route path="/" component={Landing} />
    <Route exact path="/letters" component={LettersHome} /> 
    <Route exact path="/resources" component={ResourcesHome} /> 
    <Route exact path="/library" component={SaccoVanzettiLibrary} /> 
    </div>
  );
}

export default App;
