import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./styles.module.css"
import AboutCards from "../About Card"

const Team = () => {
  const teamQuery = graphql`
    query {
      allTeamYaml {
        edges {
          name
          role
          image {
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    }
  `

  const {
    allTeamYaml: { edges },
  } = useStaticQuery(teamQuery)

  return (
    <div className={styles.cardsHolder}>
      {edges.map((teamMember, key) => {
        return <AboutCards key={key} teamMember={teamMember.node} />
      })}
      {/* <AboutCards
          imageSrc={image}
          name="Anisio Mandlate"
          role="Software developer"
        /> */}
    </div>
  )
}
