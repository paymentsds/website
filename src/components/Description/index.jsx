import React from "react"

import styles from "./styles.module.css"
import Developers from "./Developers"
import Entrepreuners from "./Entrepreuners"

const Description = () => {
  return (
    <div className={styles.main}>
      <Developers />
      <Entrepreuners />
    </div>
  )
}

export default Description
