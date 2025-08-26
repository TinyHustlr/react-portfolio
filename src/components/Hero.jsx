import profilepic from "../assets/profile_pic.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-heading">Play | Build | Engage</h1>
        {/* <h2 className="hero-body">Braze Architect</h2> */}
        <br></br>
        <h2 chassName="hero-body">Let's make something remarkable together.</h2>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={profilepic} />
      </div>
          {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-primary">GET IN TOUCH</button>
          <button className="btn-secondary">VIEW PORTFOLIO</button>
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
        <div className="title-divider"></div>
    </div>
  );
}

export default Hero;
