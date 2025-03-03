
import React, { useState } from 'react';
import marc_shanker1 from '../images/marc_shanker/fullsizeoutput_1e5.jpeg';
import marc_shanker2 from '../images/marc_shanker/fullsizeoutput_69.jpeg'; 
import marc_shanker3 from '../images/marc_shanker/fullsizeoutput_922.jpeg';
import Header from './Header';
import Footer from './Footer';

const SaccoVanzettiLibrary = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const works = [
    {   
        title: "Gods of the Lightning",
        creator: "Maxwell Anderson and Harold Hickerson",
        year: 1928,
        type: "theater",
        description: "A play inspired by the Sacco-Vanzetti case that premiered on Broadway.",
        significance: "One of the earliest theatrical responses to the case.",
        access: [
          {
            label: "Find at WorldCat",
            url: "https://www.worldcat.org/title/gods-of-the-lightning/oclc/1413"
          }
        ]
      },
      {
        title: "Winterset",
        creator: "Maxwell Anderson",
        year: 1935,
        type: "theater",
        description: "A verse drama loosely based on the Sacco-Vanzetti case, following a son's quest to clear his executed father's name.",
        significance: "Won the New York Drama Critics Circle Award and was adapted into a film.",
        access: [
          {
            label: "Find at WorldCat",
            url: "https://www.worldcat.org/title/winterset/oclc/964261"
          }
        ]
      },
      {
        title: "The Male Animal",
        creator: "James Thurber and Elliott Nugent",
        year: 1940,
        type: "theater",
        description: "A play featuring a professor who wants to read Vanzetti's letter to his class, exploring academic freedom.",
        significance: "Connected the case to broader themes of academic freedom and civil liberties.",
        access: [
          {
            label: "Access through WorldCat",
            url: "https://www.worldcat.org/title/male-animal-a-comedy-in-three-acts/oclc/403457"
          }
        ]
      },
      {
        title: "The Red Wine of Youth",
        creator: "Robert H. Montgomery",
        year: 1948,
        type: "theater",
        description: "A play about the case focusing on the human drama.",
        significance: "Brought the story to post-war theater audiences.",
        access: [
          {
            label: "Find at WorldCat",
            url: "https://www.worldcat.org/title/red-wine-of-youth/oclc/1886419"
          }
        ]
      },
      {
        title: "Impromptu Sacco and Vanzetti",
        creator: "Luigi Barzini",
        year: 1960,
        type: "theater",
        description: "An Italian play exploring the case's impact on the Italian-American community.",
        significance: "Provided an Italian perspective on the case's cultural impact.",
        access: [
          {
            label: "Find Information",
            url: "https://www.worldcat.org/title/impromptu-sacco-and-vanzetti/oclc/78456899"
          }
        ]
      },
      {
        title: "America's Dreyfus Case",
        creator: "John Dos Passos",
        year: 1927,
        type: "literature",
        description: "Essay analyzing the parallels between the Sacco-Vanzetti case and the Dreyfus affair.",
        significance: "Connected the case to other historical miscarriages of justice.",
        access: [
          {
            label: "Access through WorldCat",
            url: "https://www.worldcat.org/title/facing-the-chair-story-of-the-americanization-of-two-foreignborn-workingmen/oclc/1514862"
          }
        ]
      },
      {
        title: "Protest",
        creator: "Edna St. Vincent Millay",
        year: 1927,
        type: "poetry",
        description: "A poem expressing outrage at the execution of Sacco and Vanzetti.",
        significance: "One of the most famous poetic responses to the case.",
        access: [
          {
            label: "Read Online",
            url: "https://www.poetryfoundation.org/poems/52772/protest-56d231549c4f8"
          }
        ]
      },
      {
        title: "Two",
        creator: "Carl Sandburg",
        year: 1927,
        type: "poetry",
        description: "A poem written in response to the executions.",
        significance: "Demonstrated the case's impact on American poetry.",
        access: [
          {
            label: "Find in Collections",
            url: "https://www.worldcat.org/title/complete-poems/oclc/1001907057"
          }
        ]
      },
      {
        title: "The Passion of Sacco and Vanzetti",
        creator: "Ben Shahn",
        year: 1931,
        type: "art",
        description: "A series of tempera paintings depicting key moments from the trial and execution.",
        significance: "Became iconic images of protest art and social justice.",
        access: [
          {
            label: "View at Whitney Museum",
            url: "https://whitney.org/collection/works/42846"
          }
        ]
      },
      {
        title: "Sacco and Vanzetti",
        creator: "Giuliano Montaldo",
        year: 1971,
        type: "film",
        description: "Italian film dramatizing the trial and execution, featuring music by Ennio Morricone and Joan Baez.",
        significance: "Brought the story to international audiences and inspired the famous protest song.",
        access: [
          {
            label: "Find Film Information",
            url: "https://www.imdb.com/title/tt0067698/"
          }
        ]
      },
      {
        title: "Here's to You",
        creator: "Ennio Morricone & Joan Baez",
        year: 1971,
        type: "music",
        description: "A memorial song written for the film 'Sacco e Vanzetti'.",
        significance: "Became an international protest anthem.",
        access: [
          {
            label: "Listen on Spotify",
            url: "https://open.spotify.com/track/7L2eFj0KFJDmHTPMUL4ZxR"
          }
        ]
      },
    {
      title: "Gods of the Lightning",
      creator: "Maxwell Anderson and Harold Hickerson",
      year: 1928,
      type: "theater",
      description: "A play inspired by the Sacco-Vanzetti case that premiered on Broadway.",
      significance: "One of the earliest theatrical responses to the case.",
      access: [
        {
          label: "Find at WorldCat",
          url: "https://www.worldcat.org/title/gods-of-the-lightning/oclc/1413"
        }
      ]
    }, 
    {
        title: "Remembering Sacco and Vanzetti", 
        creator: "Marc Shanker", 
        year: 2014, 
        type: 'art',
        description: 'drawing of Sacco and Vanzetti', 
        significance: 'shown with permission by the artist',
        image: marc_shanker3,
        access: [
            {
                label: "Find on Marc Shanker's website", 
                url: "http://www.marcshanker.com"
            }
        ]
    }, 
    {
        title: "Sacco and Vanzetti", 
        creator: "Marc Shanker", 
        year: 'unknown', 
        type: 'art',
        description: 'charcoal drawings of Sacco and Vanzetti in profile', 
        significance: 'shown with permission by the artist',
        image: marc_shanker2,
        access: [
            {
                label: "Find on Marc Shanker's website", 
                url: "http://www.marcshanker.com"
            }
        ]
    }, 
    {
        title: "Sacco and Vanzetti", 
        creator: "Marc Shanker", 
        year: 'unknown', 
        type: 'art',
        description: 'charcoal drawing of Sacco and Vanzetti close up', 
        significance: 'shown with permission by the artist',
        image: marc_shanker1,
        access: [
            {
                label: "Find on Marc Shanker's website", 
                url: "http://www.marcshanker.com"
            }
        ]
    }
    // ... rest of your works array ...
  ];

  const ICONS = {
    literature: '📖',
    music: '♪',
    art: '🖼',
    poetry: '✒️',
    theater: '🎭',
    film: '🎥',
    search: '🔍',
    external: '↗️'
  }; 

  const getIcon = (type) => {
    return ICONS[type] || ICONS.literature;
  };

  const filteredWorks = works.filter(work => {
    const matchesFilter = filter === 'all' || work.type === filter;
    const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         work.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         work.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return ( 
    <div>
    <Header/> 
    <div>
    <div className="sacco-vanzetti-library">
      <div className="library-header">
        <h1 className="library-title">Works Inspired by Sacco and Vanzetti</h1>
        <div className="decorative-line"></div>
        <p className="library-subtitle">
          A Not-So-Comprehensive List
        </p>
      </div>
      
      <div className="search-filter-container">
        <div className="search-container">
          <span className="search-icon">{ICONS.search}</span>
          <input
            type="text"
            placeholder="Search the archives..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> 
        
        <div className="filter-buttons">
          {['all', 'literature', 'poetry', 'theater', 'music', 'art', 'film'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-button ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card-grid">
        {filteredWorks.map((work, index) => (
          <div key={index} className="work-card">
            <div className="card-header">
              <h2 className="card-title">
                <span>{getIcon(work.type)}</span>
                {work.title}
              </h2>
            </div>
            <div className="card-content">
              <div className="work-metadata">
                <p>
                  <span className="font-semibold">Creator:</span> {work.creator}
                </p>
                <p>
                  <span className="font-semibold">Year:</span> {work.year}
                </p>
              </div> 
              <img className="library-img" alt='preview of work' src={work.image}/> 
              <p className="work-description">{work.description}</p>
              <p className="work-significance">{work.significance}</p>
              <div className="access-links">
                <p className="access-title">Access the Work:</p>
                <div>
                  {work.access.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="access-link"
                    >
                      {ICONS.external} {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
    <Footer />
    </div> 
    </div>
  );
};



export default SaccoVanzettiLibrary;
