
import React from 'react';
import Nav from './Nav';
import LetterToReaders from './LetterToReaders';

function About() {
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
              <div className="context-text">
                <p>This project really began in 2014 when I was a student at Indiana University Bloomington. I wrote my undergraduate thesis on Vanzetti's letters, then went on to write my Master's thesis on them as well. I spent years trying to compile an edition of the letters, but life got a bit in the way for a while. Now I'm actually building out this website. It is important to me to put everything I've compiled over the years in one place, so that future generations may be inspired by these two great men as I and countless others have been. This is a labor of love, so if you feel something is missing, please let me know.<br></br>   
                Signed, 
                <br></br>
                <a className="megan" target="_blank" rel="noopener noreferrer" href="https://meganjones.dev">Megan Jones</a>
                </p>
              </div>
              <div className="documents-panel">
                <p>Special thanks to the <a target="_blank" rel="noopener noreferrer" href="https://libraries.indiana.edu/lilly-library">Lilly Library</a>, which not only housed the collection that introduced me to Sacco and Vanzetti, but also awarded me with the Everett Helm Visiting Fellowship to pursue my research on the Sacco Vanzetti case. Without them, this project would not have been possible.</p>
              </div>
            </section>
    
            {/* Timeline Preview */}
            <section className="timeline-section">  


            
            </section>
    
            {/* Legacy Section */}
            <section className="legacy-section">
              <div className="legacy-content">
            
                <blockquote className="legacy-quote">
                  "I am not allowed to use paper or write. This intellectual compelled idleness is crucial to me, now that so many ideas whirling in my brain and sentiments into my being, give me a yearning for expression -- most all because of my understanding of the nature and needs of our time."
                </blockquote>
                <cite>- Bartolomeo Vanzetti, February 17, 1925</cite>
              </div>
            </section>
    
            {/* Call to Action */}
            <section className="cta-section">
                <LetterToReaders/>
            </section>
          </main>
    
          {/* Footer */}
          <footer className="site-footer">
            <div className="footer-content">
              <p>
              <footer className="page-footer">
        site curated with great <span role="img" aria-label="heart">❤️</span> by <a className="megan" target="_blank" rel="noopener noreferrer" href="https://meganjones.dev">Megan Jones</a> in memory of Nicola Sacco (1891-1927) and Bartolomeo Vanzetti (1888-1927)
      </footer>
              </p>
            </div>
          </footer>
        </div>
      );
    };
    
  
  export default About 


