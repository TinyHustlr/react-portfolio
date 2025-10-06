export default function CTAButtons() {
    return (
        <>
      {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-contact btn-cta" onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth'})}>GET IN TOUCH</button>
          <a href="https://www.youtube.com/@minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-youtube btn-cta">YOUTUBE</button>
          </a>
          <a href="https://www.linkedin.com/in/davidworeilly/" target="_blank" rel="noreferrer noopener">
          <button className="btn-linkedin btn-cta">LINKEDIN</button>
          </a>
          <a href="https://www.twitch.tv/minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-twitch btn-cta">TWITCH</button>
          </a>
          <button className="btn-cta" onClick={() => {
            if (window.braze) {
              braze.logCustomEvent("add_to_cart")
              console.log("Braze event logged")
            } else {
              console.error("Event not logged")
            }
          }} >BRAZE</button>
        </div>
        </>
    )
};