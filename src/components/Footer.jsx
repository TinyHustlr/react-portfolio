import reactLogo from "../assets/react-logo.png";
import viteLogo from "../assets/vite-logo.png";
import pixelHeart from "../assets/pixel-heart.png";

export default function Footer() {
    return (
        <footer className="footer">
            <p>Built with:</p>
            <span>
                <a href="https://www.react.dev/" target="_blank" rel="noreferrer noopener">
                    <img className="footer-logo" src={ reactLogo } />
                </a>
                <a href="https://www.vite.dev/" target="_blank" rel="noreferrer noopener">
                    <img className="footer-logo" src={ viteLogo } />
                </a>
                    <img className="footer-logo" src={ pixelHeart } />
            </span>
        </footer>
    )
};