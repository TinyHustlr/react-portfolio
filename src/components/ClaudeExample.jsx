import React, { useState, useEffect } from 'react';

const RetroPortfolio = () => {
  const [glitchText, setGlitchText] = useState(false);

  // Glitch effect for title
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Sample brand names - replace with your actual clients
  const brands = [
    'MICROSOFT', 'CLIPCHAMP', 'MYDNA', 'LIFE-SPACE PROBIOTICS', 'JAYCAR', 'MONASH UNIVERSITY'
  ];

  return (
    <div className="retro-portfolio">
      {/* Animated background grid */}
      <div className="bg-grid"></div>
    <div className="description-text">
      Trusted by:
    </div>
    {/* Scrolling Brand Ticker */}
      <div className="brand-ticker">
        <div className="ticker-content">
          <div className="ticker-scroll">
            {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <span key={index} className="brand-name">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Main Title with glitch effect */}
          <h1 className={`main-title ${glitchText ? 'glitch' : ''}`}>
            職人
          </h1>
          
          <div className="title-divider"></div>
        </div>

        {/* Description */}
        <div className="description">
          <p className="description-text">
            Let me help pave a new future for your brand without forgetting where you came from.
            <span className="text-pink"> Gaming culture meets modern creativity.</span>
            <br />
            <span className="text-cyan">Let's build something legendary together.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-primary">START QUEST</button>
          <button className="btn-secondary">VIEW PORTFOLIO</button>
        </div>
      </div>

      {/* YouTube Section */}
      <div className="youtube-section">
        <div className="youtube-container">
          <h3 className="section-title">
            YOUTUBE
          </h3>
          <p className="section-subtitle">
            Check out highlights from my channel
          </p>
          
          <div className="video-grid">
            {/* YouTube Video Placeholders */}
            <div className="video-card">
              <div className="video-placeholder">
                <div className="video-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NOxASIHl1Us?si=b0o_82Q7as-zkJVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-placeholder">
                <div className="video-content">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/n9cpXlBmo_c?si=Yt4tXOtMmrDfW-mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Minimum Viable Pizza
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RetroPortfolio;