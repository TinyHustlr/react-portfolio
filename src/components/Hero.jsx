import profilepic from '../assets/profile_pic.png'

function Hero() {
    return (
    <div className='hero-container'>    
        <div className='hero-text' >
            <h1 className='hero-heading'>Braze architect</h1>
            <h2 className='hero-body'>inspired by the spirit of <i>Shokunin</i> 職人, balancing mastery, dedication, and play.</h2>
        </div>
        <div className='hero-image-container'>
            <img className='hero-image' src={profilepic} />
        </div>
    </div>
    )
}

export default Hero