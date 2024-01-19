import "./Home.css"
// import Hero from "./components/Hero/Hero"
// import Header from './components/Header/Header'
// import Footer from'./components/Footer/Footer'
// import Container from'./components/Container/Container'
import {Container} from './components/index'
import {Header,Footer,Hero,MostPopular,GamingLibrary} from './sections/index'


export const Home = () => {
return(
    <div>
        <Header />
        <Container>
            <Hero/>
            <MostPopular/>
            <GamingLibrary/>
        </Container>
        <Footer />
    </div>

)

}

