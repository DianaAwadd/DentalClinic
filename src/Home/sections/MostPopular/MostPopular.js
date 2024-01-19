import './MostPopular.css'
import { Card, SectionHeader,SectionWrapper } from '../../components/index'
import popular_01 from '../../assets/images/doctor.png'
// import popular_02 from '../../assets/images/popular-02.jpg'
// import popular_03 from '../../assets/images/popular-03.jpg'
// import popular_04 from '../../assets/images/popular-04.jpg'

const MostPopular = () => {
  return (
    <>
    <SectionWrapper>
       <SectionHeader>Complaints</SectionHeader>
        <div className='most-popular-items'>
            <Card image={popular_01} title='نخور'  />
            <Card image={popular_01} title='تسوس'  />
            <Card image={popular_01} title='قولاع'/>
            <Card image={popular_01} title='سحب عصب'/>
            <Card image={popular_01} title='تقويم' />
            <Card image={popular_01} title='فينير'  />
            <Card image={popular_01} title='زرع أسنان' />
            <Card image={popular_01} title='جسور' />
      

        </div>

        </SectionWrapper>
    </>
  )
}

export default MostPopular