import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"
import logo from "../../images/payments.png"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className={styles.menu}>
        <h1>
          <img src={logo} alt={siteTitle} />
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                to="/page-2"
                activeClassName={styles.active}
                className={styles.links}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                activeClassName={styles.links.active}
                className={styles.links}
              >
                Documentação
              </Link>
            </li>
            <li>
              <Link
                to="/page-2"
                activeClassName={styles.links.active}
                className={styles.links}
              >
                Fórum
              </Link>
            </li>
            <li>
              <Link
                to="/page-2"
                activeClassName={styles.links.active}
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
