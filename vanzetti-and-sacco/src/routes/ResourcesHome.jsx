import React from 'react';
import Header from './Header'; 
import Footer from './Footer';

const Resources = () => {
    return (
        <div className="memorial-site">
         <Header />
    
          {/* Main Content */}
          <main className="main-content">
            {/* Historical Context Section */}
            <section className="context-section">
              <h1>Bibilography of academic sources coming soon.</h1>
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
    
      <Footer/>
        </div>
      );
    };
    

export default Resources;