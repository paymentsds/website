import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.css"

const Cards = ({ title, description, link, linkText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideDiv}></div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <Link to={`/${link}/`}>{linkText}</Link>
      </div>
    </div>
  )
}

export default Cards
