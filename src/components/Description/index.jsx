import React from "react"
import Developers from "./Developers"

import styles from "./styles.module.css"

const Description = () => {
    return (
        <div className={styles.main}>
            <Developers/>
            <Developers/>
        </div>
    )
}

export default Description