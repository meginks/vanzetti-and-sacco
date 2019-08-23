import React from 'react';
import './App.css';
import {Header, Image, Segment, Container} from 'semantic-ui-react';
import SV1 from './components/images/SV1.jpg'
import LetterToReaders from './components/LetterToReaders'

function App() {
  return (
      <Container>
        <div className="heading-name">
        <Header>
         <h1 className="heading-name">Vanzetti and Sacco</h1>      
        </Header>
        </div>
     <LetterToReaders />

     </Container>
  );
}

export default App;
