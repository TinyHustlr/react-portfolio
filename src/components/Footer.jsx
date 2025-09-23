import reactLogo from "../assets/react-logo.png";
import viteLogo from "../assets/vite-logo.png";
import pixelHeart from "../assets/pixel-heart.png";

export default function Footer() {
    return (
        <footer className="footer">
            <p>Built with:</p>
            <span>
                <a href="'https://react.dev/" target="_blank" rel="noreferrer noopener">
                    <img className="footer-logo" src={ reactLogo } />
                </a>
                <a href="'https://vite.dev/" target="_blank" rel="noreferrer noopener">
                    <img className="footer-logo" src={ viteLogo } />
                </a>
                <a href="'https://vite.dev/" target="_blank" rel="noreferrer noopener">
                    <img className="footer-logo" src={ pixelHeart } />
                </a>
            </span>
        </footer>
    )
};