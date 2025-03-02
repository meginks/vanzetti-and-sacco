import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="memorial-site">
         <Header />
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
        <Footer />
        </div>
      );
    };
    

export default LandingPage;