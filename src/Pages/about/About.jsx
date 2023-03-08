import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        <p>
          The only person you are destined to become is the person you decide to be
        </p>
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              According to the NHS, adults over 65 should aim to be physically active every day. You can find the official guidance for adults between 19 and 64 here, but we’ll be focusing on older adults for now.
            </p>
            <p> The NHS recommends a combination of activities for optimum health and fitness. At least 2 days a week, older people should focus on activities that improve strength, balance, and flexibility. Throughout the rest of the week, you should do at least 150 minutes of moderate intensity activity. If you already lead an active lifestyle, you can do 75 minutes of vigorous intensity exercise instead, or a combination of moderate and vigorous exercise.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
            According to the NHS, a good way to tell whether an activity counts as ‘moderate intensity’ is if you can carry on holding a conversation, but not sing. In contrast to light activity, moderate intensity exercise will usually raise your heart rate somewhat. You might also feel warmer and find that your breathing gets faster            </p>
            <p>
            You can easily increase the intensity of some moderate exercises to make them vigorous. For example, cycling is generally a moderate intensity activity, but cycling fast or cycling uphill would count as vigorous.            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              According to the NHS, adults over 65 should aim to be physically active every day. You can find the official guidance for adults between 19 and 64 here, but we’ll be focusing on older adults for now.
            </p>
            <p> The NHS recommends a combination of activities for optimum health and fitness. At least 2 days a week, older people should focus on activities that improve strength, balance, and flexibility. Throughout the rest of the week, you should do at least 150 minutes of moderate intensity activity. If you already lead an active lifestyle, you can do 75 minutes of vigorous intensity exercise instead, or a combination of moderate and vigorous exercise.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

