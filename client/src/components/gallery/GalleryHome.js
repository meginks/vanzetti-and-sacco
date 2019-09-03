import React from 'react';
import {Container, Header, Image, Card, Segment} from 'semantic-ui-react';
import Nav from './../Nav';
import Footer from './../Footer';
import MarcShanker1 from './../images/marc_shanker/fullsizeoutput_1e5.jpeg';
import MarcShanker2 from './../images/marc_shanker/fullsizeoutput_69.jpeg';
import MarcShanker3 from './../images/marc_shanker/fullsizeoutput_922.jpeg';

function GalleryHome() {
  return (
      <div>
        <Nav />
      <Container className="letter">
          <Segment>
              <h1 className="welcome-message">Gallery</h1>
              <p className="main-text">
                If you have art or video you wish to submit, please email <a href="mailto:meganjones.dev@gmail.com">Megan.</a>
              </p>
          </Segment>
          <Card.Group>
              <Card>
                <Image src={MarcShanker1} alt="drawing of Sacco and Vanzetti" /> 
                <Card.Content>
                <Card.Header>
                <h2 className="gallery-header">Sacco and Vanzetti</h2>
                </Card.Header>
                <Card.Meta>
                <a className="gallery-artist" target="_blank" href="http://www.marcshanker.com">Marc Shanker</a>
                </Card.Meta>
                <Card.Description>

                </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src={MarcShanker2} alt="drawing of Sacco and Vanzetti" /> 
                <Card.Content>
                <Card.Header>
                <h2 className="gallery-header">Sacco and Vanzetti</h2>
                </Card.Header>
                <Card.Meta>
                <a className="gallery-artist" target="_blank" href="http://www.marcshanker.com">Marc Shanker</a>
                </Card.Meta>
                <Card.Description>

                </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src={MarcShanker3} alt="Remembering Sacco and Vanzetti" /> 
                <Card.Content>
                <Card.Header>
                <h2 className="gallery-header">Remembering Sacco and Vanzetti</h2>
                </Card.Header>
                <Card.Meta>
                <a className="gallery-artist" target="_blank" href="http://www.marcshanker.com">Marc Shanker (August 2014)</a> 
                </Card.Meta>
                <Card.Description>

                </Card.Description>
                </Card.Content>
              </Card>
          </Card.Group>
     </Container>
     <Footer />
     </div>
  );
}

export default GalleryHome;
