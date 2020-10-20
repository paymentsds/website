import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.menu}>
      <h1>
        <Link to="/" className={styles.links}>
          {siteTitle}
        </Link>
      </h1>
      <h1>
        <Link to="/" className={styles.links}>
          Documentacao
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
