import React from 'react';
import './App.css';
import {Header, Image, Segment, Container} from 'semantic-ui-react';
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
      <footer className="page-footer">
        site created with great ❤️ by <a target="_blank" href="https://meganjones.dev">Megan Jones</a>
      </footer>
     </Container>
  );
}

export default App;
