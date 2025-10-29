import { logCustomEvent } from "@braze/web-sdk";

export default function CTAButtons() {
  function contactClick() {
    document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth'})
    braze.logCustomEvent("contact_button")
  };

    return (
        <>
      {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-contact btn-cta" onClick={contactClick}>GET IN TOUCH</button>
          <a href="https://www.youtube.com/@minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-youtube btn-cta">YOUTUBE</button>
          </a>
          <a href="https://www.linkedin.com/in/davidworeilly/" target="_blank" rel="noreferrer noopener">
          <button className="btn-linkedin btn-cta">LINKEDIN</button>
          </a>
          <a href="https://www.twitch.tv/minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-twitch btn-cta">TWITCH</button>
          </a>
        </div>
        </>
    )
};