import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const FooterNav = ({ className, ...props }) => {
  const classes = classNames('footer-nav', className)

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName)
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#contact" onClick={() => scrollToAnchor('contact')}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="#about" onClick={() => scrollToAnchor('about')}>
            About us
          </Link>
        </li>
        <li>
          <Link to="#team" onClick={() => scrollToAnchor('team')}>
            Team
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav
