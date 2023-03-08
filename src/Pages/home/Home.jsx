import FQAs from '../../components/FAQs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FQAs/>
      <Testimonials/>
    </>
  )
}

export default Home
