import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./styles.module.css"
import AboutCards from "../About Card"

const Team = () => {
  const teamQuery = graphql`
    query {
      allTeamYaml {
        edges {
          node {
            name
            role
            image {
              childImageSharp {
                fixed(width: 175) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
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
    </div>
  )
}

export default Team
