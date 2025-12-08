import profilepic from "../assets/profile_pic.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-heading">Play | Build | Engage</h1>
        {/* <h2 className="hero-body">Braze Architect</h2> */}
        <br></br>
        <h2 className="hero-body">Let's make something remarkable together.</h2>
        
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={profilepic} />
      </div>        
    </div>
  );

  console.log("Hero running")
}
