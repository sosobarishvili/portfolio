import './Aboutstyles.css'

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-left-side-image">
        <img className='about-react-image' src="https://miro.medium.com/v2/resize:fit:1200/1*eT3XLf-nCipO4AoComKZDQ.jpeg" alt="react image" />
      </div>
      <div className="about-me-right-side">
        <h2>About</h2>
        <h3>React Developer</h3>
        <p className='typing-animation'>Hello, I'm Soso from Tbilisi, Georgia. a passionate front-end developer with one year of experience specializing in React. My journey into web development started with a strong curiosity and has evolved into a rewarding career. I thrive on challenges and enjoy creating dynamic, user-friendly interfaces that bring ideas to life.</p>
      </div>
    </div>
  )
}

export default About;