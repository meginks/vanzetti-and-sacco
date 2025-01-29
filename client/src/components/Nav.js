import React from 'react';
import Button from './Button.js';
import {useNavigate } from 'react-router-dom';


const Nav = () => { 

  const navigate = useNavigate(); 
  const goToHome = () => { navigate('/')}; 
  const goToAbout = () => { navigate('/aboutsite')}; 
  const goToLibrary = () => { navigate('/library')}; 
  const goToResources = () => { navigate('/resources')}; 
  const goToLetters = () => {navigate('/letters')};
    return (
      <div>
          <nav class="navbar">
            <Button onClick={goToHome}>Home</Button>
            <Button onClick={goToAbout}>About</Button>
            <Button onClick={goToLibrary}>Library</Button> 
            <Button onClick={goToResources}>Resources</Button>
            <Button onClick={goToLetters}>Letters</Button>
          </nav>
        </div>
  
    )
}

export default Nav;