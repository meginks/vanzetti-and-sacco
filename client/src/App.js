import React from 'react';
import './App.css';
import {Header, Image, Segment, Container} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import LetterToReaders from './components/LetterToReaders';
import GalleryHome from './components/gallery/GalleryHome';
import BlogLandingPage from './components/Blog/BlogLandingPage'; 
import ResourcesHome from './components/ResourcesHome';
import LettersHome from './components/LettersHome';
import Nav from './components/Nav';

function App() {
  return (
      <div>
    <Route exact path="/aboutsite" component={LetterToReaders} /> 
    <Route exact path="/" component={Home} />
    <Route exact path="/gallery" component={GalleryHome} />
    <Route exact path="/letters" component={LettersHome} /> 
    <Route exact path="/blog" component={BlogLandingPage} /> 
    <Route exact path="/resources" component={ResourcesHome} />
    </div>
  );
}

export default App;
