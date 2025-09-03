export default function YouTube() {
  return (
    <>
      {/* YouTube Section */}
      <div className="youtube-section">
        <div className="youtube-container">
          <h2 className="section-title">
            YOUTUBE
          </h2>
          <p className="section-subtitle">
            Check out highlights from my channel
          </p>
          
          <div className="video-grid">
            {/* YouTube Video Placeholders */}
            <div className="video-card">
              <div className="video-placeholder">
                <div className="video-content">
                    <iframe src="https://www.youtube.com/embed/NOxASIHl1Us?si=b0o_82Q7as-zkJVY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            
            <div className="video-card">
              <div className="video-placeholder">
                <div className="video-content">
                  <iframe src="https://www.youtube.com/embed/n9cpXlBmo_c?si=Yt4tXOtMmrDfW-mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};