import profilepic from "../assets/profile_pic.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-heading">Braze architect</h1>
        <h2 className="hero-body">Play | Build | Engage</h2>
        <br></br>
        <h2 chassName="hero-body">Let's make something remarkable together.</h2>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={profilepic} />
      </div>
    </div>
  );
}

export default Hero;
