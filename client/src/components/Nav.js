import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
      <div>
          <nav class="navbar">
            <Button as={Link} to="/">Home</Button>
            <Button as={Link} to="/aboutsite">About</Button>
            <Button as={Link} to="/library">Library</Button> 
            <Button as={Link} to="/resources">Resources</Button>
            <Button as={Link} to="/letters">Letters</Button>
          </nav>
        </div>
  
    )
}

export default Nav;