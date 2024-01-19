import './GLcard.css'
import { SecondaryButton } from '../../components/index'

const GLcard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li><img src={props.image} alt=''/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date Added</h4><span>{props.dateadded}</span></li>
            <li><h4>Hours Played</h4><span>{props.hoursplayed}</span></li>
            <li><h4>Currently</h4><span>{props.downloaded}</span></li>

            <SecondaryButton>Download</SecondaryButton>
           
        </ul>
    </div>
  )
}

export default GLcard