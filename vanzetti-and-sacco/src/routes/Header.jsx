import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <div className="memorial-site">
          {/* Hero Section */}
          <div className="hero">
            <div className="hero__background"></div>
            <div className="hero__gradient"></div>
            <div className="hero__content"> 
              <div className="hero__text">
                <h1>VANZETTI & SACCO</h1>
                <div className="divider"></div>
                <p className="hero__date">
                  "What I wish more than all in this last hour of agony is that our case and our fate may be understood in their real being and serve as a tremendous lesson to the forces of freedom -- so that our suffering and death will not have been in vain." 
                </p> 
                <p className="hero__quote">
                - Sacco and Vanzetti to H.W.L. Dana, August 22, 1927
                </p>
                <Nav/> 
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Header; 