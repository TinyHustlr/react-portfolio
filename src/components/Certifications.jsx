import brazeArchitect from '../assets/braze-certified-technical-architect.png'
import brazeDeveloper from '../assets/braze-certified-developer.png'
import brazeAI from '../assets/braze-certification-brazeai-skills-badge.png'
// import brazeSDK from '../assets/braze-certification-brazeWebSDK-skills-badge.png'
import brazePrac from '../assets/braze-certified-practitioner.png'
import brazeEmail from '../assets/braze-certification-email-deliverability-skills-bad.png'
import torchieAward from '../assets/braze-torchie-award.png'
import hackWinner from '../assets/microsoft-global-hackathon-2024-executive-challenge.png'
import hackathon from '../assets/microsoft-global-hackathon-2023.png'
import AIRecord from '../assets/ai_guiness_ 1.png'


function Certifications() {
    return (
    <div className='certifications-container'>
        <div className='cert-image-section'>
        <img className='cert-image' src={brazeArchitect} />
        <img className='cert-image' src={brazeDeveloper} />
        <img className='cert-image' src={brazePrac} />
        <img className='cert-image' src={brazeAI} />
        <img className='cert-image' src={brazeEmail} />
        </div>
        <div className='cert-image-section'>
        <img className='cert-image round-corners' src={torchieAward} />
        <img className='cert-image round-corners' src={hackWinner} />
        <img className='cert-image round-corners' src={hackathon} />
        <img className='cert-image' src={AIRecord} />
        </div>
    </div>
    )
}

export default Certifications