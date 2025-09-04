import youtubeIcon from '../assets/youtube-icon.png'

export default function CTAButtons() {
    return (
        <>
      {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-contact" onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth'})}>GET IN TOUCH</button>
          <a href="https://www.youtube.com/@minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-youtube">YOUTUBE</button>
          </a>
          <a href="https://www.linkedin.com/in/davidworeilly/" target="_blank" rel="noreferrer noopener">
          <button className="btn-linkedin">LINKEDIN</button>
          </a>
          <a href="https://www.twitch.tv/minimumviablepizza" target="_blank" rel="noreferrer noopener">
          <button className="btn-twitch">TWITCH</button>
          </a>
        </div>
        </>
    )
};