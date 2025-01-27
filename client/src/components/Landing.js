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
            {/* Historical Context Section */}
            <section className="context-section">
              <div className="context-text">
                <h2>The Case</h2>
                <p>
                  On April 15, 1920, two men were murdered during a payroll robbery in 
                  South Braintree, Massachusetts. Nicola Sacco and Bartolomeo Vanzetti 
                  were arrested, tried, and convicted in an atmosphere of fear and prejudice.
                </p>
                <p>
                  Their case became a global symbol of injustice and the dangers of 
                  political persecution, inspiring generations of activists, artists, 
                  and scholars.
                </p>
              </div>
              <div className="documents-panel">
                <h3>La traduzione italiana di questo sito è in corso.</h3>
              </div>
            </section>
    
            {/* Timeline Preview */}
            <section className="timeline-section">
              <div className="timeline-container">
                <div className="timeline-header">
                  <h2>Chronology</h2>
                
                </div>
                <div className="timeline-grid">
                  {[
                    {
                        year: 'June 11, 1888',
                        event: 'Bartolomeo Vanzetti was born in Villafalleto, Cuneo, Italy'
                      },
                     {
                        year: 'April 22, 1891',
                        event: 'Nicola Sacco was born in Torremaggiore, Puglia in Italy'
                      }, 
                      {
                        year: '1908', 
                        event: 'Both men separately left Italy for the United States'
                      }, 
                      {
                        year: '1917', 
                        event: 'Sacco and Vanzetti met each other for the first time'
                      }, 
                    {
                      year: 'April 15, 1920',
                      event: 'Frederick Parmenter and Alessandro Berardelli murdered during payroll robbery in South Braintree, Massachusetts'
                    },
                    {
                      year: 'May 5, 1920',
                      event: 'Sacco and Vanzetti arrested in Brockton, Massachusetts'
                    },
                    {
                        year: 'May 5, 1920',
                        event: 'Sacco and Vanzetti were indicted'
                      }, 
                      {
                        year: "June 22, 1920", 
                        event: "Bridgewater trial started"
                      },
                      {
                        year: "July 1, 1920", 
                        event: "Jury deliberated for 5 hours and returned guilty on counts of armed robbery and first-degree murder"
                      },
                      {year: 'August 16, 1920', 
                        event: 'Vanzetti sentenced to 12-15 years in prison for armed robbery'
                      },
                    {
                      year: 'May 31, 1921',
                      event: 'Trial begins in Dedham, Massachusetts under Judge Webster Thayer'
                    },
                    {
                      year: 'July 14, 1921',
                      event: 'Sacco and Vanzetti convicted of first-degree murder and sentenced to death'
                    },
                    {
                      year: '1924',
                      event: 'Celestino Madeiros confesses to the crime, implicating the Morelli gang'
                    },
                    {
                      year: '1925-1926',
                      event: 'Multiple appeals filed and denied; global protests begin'
                    },
                    {
                      year: 'April 9, 1927',
                      event: 'Final appeal denied by Massachusetts Supreme Court'
                    },
                    {
                      year: 'midnight, August 23, 1927',
                      event: 'Sacco and Vanzetti executed by electric chair at Charlestown State Prison'
                    },
                    {
                      year: 'August 23, 1977',
                      event: 'Massachusetts Governor Michael Dukakis issued a proclamation declaring that Sacco and Vanzetti had been unfairly tried and convicted'
                    }
                  ].map((item) => (
                    <div key={item.year} className="timeline-item">
                      <p className="timeline-year">{item.year}</p>
                      <p className="timeline-event">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Legacy Section */}
            <section className="legacy-section">
              <div className="legacy-content">
            
                <blockquote className="legacy-quote">
                "The more I live, the more I suffer, the more I learn, the more I am inclined to forgive, to be generous, and that the violence as such does not resolve the problem of life"
                </blockquote>
                <cite>- Bartolomeo Vanzetti, February 27, 1927</cite>
              </div>
            </section>
    
            {/* Call to Action */}
            <section className="cta-section">
              <h3>Read their own words.</h3>
              <p>
              </p>
              <button className="cta-button">
                Explore the Letters
              </button>
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