import Header from '../components/Header'
import Hero from '../components/Hero'
import TrackInput from '../components/TrackInput'
import About from '../components/About'
import Count from '../components/Count'
import Services from '../components/Services'
import Solution from '../components/Solution'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import ScrollButton from '../components/ScrollButton'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Hero />
            <Header />
            <TrackInput />
            <About />
            <Count />
            <Services />
            <Solution />
            <Testimonials />
            <Newsletter />
            <ScrollButton />
            <Footer />
        </div>
    )
}

export default Home