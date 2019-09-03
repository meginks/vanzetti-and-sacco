import React from 'react';
import {Container, Image, Segment} from 'semantic-ui-react';
import SV2 from './images/SV2.jpg';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  return (
      <div>
        <Nav />
      <Container className="letter">
        <div className="flex-container">
        <h1 className="welcome-message">Vanzetti and Sacco</h1>
        <h2 className="subheader">. . . for all things Sacco and Vanzetti</h2>
        </div>
        <div className="flex-container">
        <Image className="photo" src={SV2} alt="Vanzetti and Sacco" />
        </div>
     </Container>
     <Footer />
     </div>
  );
}

export default Home;
