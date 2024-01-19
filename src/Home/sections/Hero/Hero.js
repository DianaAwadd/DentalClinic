import './Hero.css'
import {PrimaryButton} from '../../components/index'
 const Hero = () => {
  return (
    <div className='hero-main'>
    <div className='hero-text'>
      <h6 className='hero-subtitle'>Welcome to Dental Care</h6>
      <h4 className='hero-title'><em>Browse</em> Our Popular clinics here</h4>
      <PrimaryButton>Browse now</PrimaryButton>
      {/* <div className='main-button'>
        <a href='browse-html'> Browse now</a>
      </div> */}
    </div>
    </div>
  )
}

export default Hero
