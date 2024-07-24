import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Assets/Logo.png'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();

  const [show, setShow] = useState(false)

  const handleHamburger = () => {
    setShow(!show);
  }

  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.logo}`}>
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <div className={`${styles.menu} ${show === true ? styles.openmenu : styles.closemenu}`}>
      <ul>
          <li>
            <Link
              className={`${location.pathname === '/' ? 'active' : ''}`}
              to='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${location.pathname === '/skills' ? 'active' : ''}`}
              to='/skills'
            >
              Skills
            </Link>
          </li>
          <li>
            <a
              className={`${location.hash === '#education' ? 'active' : ''}`}
              href='/#education'
            >
              Education
            </a>
          </li>
          <li>
            <a
              className={`${location.hash === '#projects' ? 'active' : ''}`}
              href='/#projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`${location.hash === '#recommendations' ? 'active' : ''}`}
              href='#recommendations'
            >
              Recommendations
            </a>
          </li>
          <li>
            <a
              className={`${location.hash === '#contact' ? 'active' : ''}`}
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className={`${show === true ? styles.closehamburger:styles.openhamburger} `} onClick={handleHamburger}>
        <ul>
          <li className={`${styles.list}`}></li>
          <li className={`${styles.list}`}></li>
          <li className={`${styles.list}`}></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar