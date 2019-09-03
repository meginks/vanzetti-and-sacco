import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <div className="menu-container">
            <Menu stackable>
            <Menu.Item as={Link} to="/">
         <h1 className="heading-name">Vanzetti and Sacco</h1>      
            </Menu.Item>
            <Menu.Item as={Link} to="/aboutsite">
              <h4 className="menu-button">about this site</h4>
            </Menu.Item>
            <Menu.Item as={Link} to="/gallery" >
                <h4 className="menu-button">gallery</h4>
            </Menu.Item>
            </Menu>
        </div>
    )
}

export default Nav;