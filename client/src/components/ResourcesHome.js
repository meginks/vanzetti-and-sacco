import React from 'react';
import Nav from './Nav';

const Resources = () => {
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
              </div>
            </div>
          </div>
    
          {/* Navigation Bar */}
          <nav className="main-nav">
            <div className="nav-container">
              <div className="nav-links"> 
                <Nav/> 
              </div>
            </div>
          </nav>
    
          {/* Main Content */}
          <main className="main-content">
            {/* Historical Context Section */}
            <section className="context-section">
              <h1>Coming soon.</h1>
            </section>
    
            {/* Timeline Preview */}
            <section className="timeline-section">
         
             
            </section>
    
            {/* Legacy Section */}
            <section className="legacy-section">
              <div className="legacy-content">
            
                <blockquote className="legacy-quote">
               "Meanwhile, be brave, steady, and have all the little care of yourself, as possible. We are beaten, yes; but not yet lost-- we may still win...""
                </blockquote>
                <cite>- Bartolomeo Vanzetti, May 3, 1927</cite>
              </div>
            </section>
    
           
        
          </main>
    
          {/* Footer */}
          <footer className="site-footer">
            <div className="footer-content">
              <p>
        site created with great <span role="img" aria-label="heart">❤️</span> by <a className="megan" target="_blank" rel="noopener noreferrer" href="https://meganjones.dev">Megan Jones</a> in memory of Nicola Sacco (1891-1927) and Bartolomeo Vanzetti (1888-1927)
              </p>
            </div>
          </footer>
        </div>
      );
    };
    

export default Resources;