import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"
import logo from "../../images/payments.png"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className={styles.menu}>
        <img src={logo} alt={siteTitle} />
        <nav className={styles.nav}>
          <h4>Sobre nós</h4>
          <h4>
            <Link to="/docs" className={styles.links}>
              Documentação
            </Link>
          </h4>
          <h4>Fórum</h4>
          <h4>Team</h4>
          <h4>Contacto</h4>
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
