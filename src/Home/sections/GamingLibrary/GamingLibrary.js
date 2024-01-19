import './GamingLibrary.css'
import { GLcard,SectionHeader,SectionWrapper } from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

const cards=GamingLibraryData.map(card => {
    return<GLcard key={card.id} image={card.image} title={card.title} category={card.category} dateadded={card.dateadded} hoursplayed={card.hoursplayed} downloaded={card.downloaded} >

    </GLcard>
})


  return (
    <>
    <SectionWrapper>
       <SectionHeader> Clinics</SectionHeader>
        <div className='gaming-library-cards'>
            {cards}
        </div>

        </SectionWrapper>
    </>
  )
}

export default GamingLibrary