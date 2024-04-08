import { useEffect, useState } from 'react';
import './headerStyle.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header-container">
      <nav className={`header-navigation ${isMenuOpen ? 'open-menu' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <GiHamburgerMenu className='hamburgerMenuIcon' onClick={toggleMenu} />
        <div className="header-left-side">
          <ScrollLink className='header-about'
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
          <span className='header-projects'>Projects</span>
          <ScrollLink className='header-contact'
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </ScrollLink>
        </div>
        <div className="header-middle-side">
          <ScrollLink className='header-home-button'
            to="first-background"
            spy={true}
            smooth={true}
            duration={500}
          >
            <AiFillHome className='header-home-button' />
          </ScrollLink>

        </div>
        <div className="header-right-side">
          <Link to={'https://github.com/sosobarishvili'} target='_blank'>
            <AiFillGithub className='header-social-icons' />
          </Link>

          <Link to={'https://www.linkedin.com/in/soso-barishvili-222438157/'} target='_blank'>
            <AiFillLinkedin className='header-social-icons' />
          </Link>

          <Link to={'https://www.youtube.com/channel/UCgtAEdEwkyFDovGQDRLqJpQ'} target='_blank'>
            <AiFillYoutube className='header-social-icons' />
          </Link>
        </div>
      </nav>
      <div className={`hamburger-options ${isMenuOpen ? 'hamburger-menu-reveal' : ''}`}>
        <ScrollLink className='header-about'
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </ScrollLink>
        <span className='header-projects'>Projects</span>
        <ScrollLink className='header-contact'
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </ScrollLink>
        <div className="hamburger-socials">
          <Link className='hamburger-socials-link' to={'https://github.com/sosobarishvili'} target='_blank'>
            <AiFillGithub className='header-social-icons' />
          </Link>

          <Link className='hamburger-socials-link' to={'https://www.linkedin.com/in/soso-barishvili-222438157/'} target='_blank'>
            <AiFillLinkedin className='header-social-icons' />
          </Link>

          <Link className='hamburger-socials-link' to={'https://www.youtube.com/channel/UCgtAEdEwkyFDovGQDRLqJpQ'} target='_blank'>
            <AiFillYoutube className='header-social-icons' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;