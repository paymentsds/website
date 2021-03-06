import React from "react"
import Img from "gatsby-image"

import styles from "./styles.module.css"

const AboutCards = ({ teamMember }) => {
  return (
    <div className={styles.card}>
      <Img
        fixed={teamMember.image.childImageSharp.fixed}
        className={styles.image}
      />
      <h3 className={styles.cardTitle}>{teamMember.name}</h3>
      <p className={styles.cardSubtitle}>{teamMember.role}</p>
    </div>
  )
}

export default AboutCards
