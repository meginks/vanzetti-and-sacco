import React from 'react';
import Nav from './Nav';

const LandingPage = () => {
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
                <h1>Coming soon.</h1>
          
          <section className="legacy-section">
              <div className="legacy-content">
            
                <blockquote className="legacy-quote">
               "I am so eager to send my best friends a word, that I made four notes out of a folio of letter paper, confident that the warden will be kind enough to accede to my natural and honest wish, and you may receive these few words as symbols of my affection and gratitude."
                </blockquote>
                <cite>- Bartolomeo Vanzetti, July 14, 1927</cite>
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
    

export default LandingPage;