import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
      <>
      <div>
          <nav class="navbar">
            <Button as={Link} to="/">Home</Button>
            <Button as={Link} to="/aboutsite">About</Button>
            <Button as={Link} to="/gallery">Gallery</Button>
            <Button as={Link} to="/blog">Blog</Button>
            <Button as={Link} to="/resources">Resources</Button> 
            <Button as={Link} to="/letters">Letters</Button>
          </nav>
        </div>
        <h1 class="heading-name">Vanzetti and Sacco</h1> 
    </>
    )
}

export default Nav;