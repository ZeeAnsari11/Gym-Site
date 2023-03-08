import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'




const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      <p>Strength does not come from physical capacity. It comes from an indomitable will.” -Mahatma Gandhi. “Success usually comes to those who are too busy to be looking for it.</p>
    </Header>
    <div className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:zeeshan.bashir@phpstudios.com" target="_blank"><MdEmail/></a>
          <a href="http://m.me/ernest_achiver" target="_blank"><BsMessenger/></a>
          <a href="https://wa.me/+923224239054" target="_blank"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Contact