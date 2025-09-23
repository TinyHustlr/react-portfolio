import youtubeIcon from '../assets/youtube-icon.png'

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
        </div>
        </>
    )
};