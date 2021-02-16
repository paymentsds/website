import React from "react"

import styles from "./styles.module.css"

const AboutCards = ({ imageSrc, name, role }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={`Foto do ${name}`} className={styles.image} />
      <h3 className={styles["card-title"]}>{name}</h3>
      <p className={styles["card-subtitle"]}>{role}</p>
    </div>
  )
}

export default AboutCards
