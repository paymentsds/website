import React from "react"

import rightArrow from "../../images/chevron-right 2.svg"
import styles from "./styles.module.css"

const Button = ({text, image}) => {
    return (
        <>
            <button className={styles.button}>
                {text} 
                {image ? (
                    <img src={rightArrow} alt="Right Arrow" />
                ) : ("")}
                
            </button>
        </>

    )
}

export default Button
