import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import styles from "./styles.module.css"
import logo from "../../images/payments.png"

const Header = ({ siteTitle }) => {
  const [className, setClassName] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll, true)
    }
  }, [])

  const handleScroll = () => {
    window.pageYOffset > 135 ? setClassName("scroll") : setClassName("")
  }

  return (
    <header className={styles[className]}>
      <div className={styles.menu}>
        <Link to="/">
          <h1>
            <img src={logo} alt={siteTitle} />
          </h1>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                to="/about-us"
                activeClassName={styles.active}
                className={styles.links}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                activeClassName={styles.active}
                className={styles.links}
              >
                Documentação
              </Link>
            </li>
            <li>
              <Link
                to="/page-2"
                activeClassName={styles.active}
                className={styles.links}
              >
                Fórum
              </Link>
            </li>
            <li>
              <Link
                to="/page-2"
                activeClassName={styles.active}
                className={styles.links}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
