import './Card.css'
import popular_01 from '../../assets/images/popular-01.jpg'


const Card = (props) => {
  return (
    <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img  className='most-popular-item-image' src={props.image} />
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>{props.title}
                        <br/>
                        <span>{props.category}</span>
                        </h4>
                        
                    </div>
                </div>

            </div>
  )
}

export default Card