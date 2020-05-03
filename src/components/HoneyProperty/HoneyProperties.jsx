import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"

import { HONEY_PROPERTIES } from "../../../static/constantas"

import PropertyCard from "./PropertyCard"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      margin: 0,
      marginBottom: 100,
      textAlign: "center",
    },
    title: {
      lineHeight: 1,
    },
    desc: {
      marginBottom: 60,
      fontWeight: "normal",
    },
    cards: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "0 auto 100px",
    },
    btn: {
      width: 420,
      fontSize: 28,
      lineHeight: 3,
      color: theme.palette.primary.main,

      backgroundColor: theme.palette.text.secondary,
      border: `1px solid ${theme.palette.primary.main}`,
      boxSizing: "border-box",
      borderRadius: 40,
    },
  })
)

const HoneyProperties = ({ title, description }) => {
  const styles = useStyles()

  const dataQl = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(fit: CONTAIN, srcSetBreakpoints: [580, 370]) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const imgNodes = dataQl.allImageSharp.edges
  console.log("imgNodes: ", imgNodes)
  const images = []
  imgNodes.forEach(item => {
    if (item.node.fluid.originalName.includes("card")) {
      images.push(item.node)
    }
  })

  console.log("images: ", images)

  return (
    <div className={styles.container}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h3" className={styles.desc}>
        {description}
      </Typography>
      <div className={styles.cards}>
        {HONEY_PROPERTIES.map(({ title, description }, index) => {
          return (
            <PropertyCard
              key={title}
              title={title}
              description={description}
              isOdd={index % 2}
              image={images[index]}
            />
          )
        })}
      </div>
      <Button
        variant="contained"
        className={styles.btn}
        onClick={() => {
          console.log("you clicked on button in HoneyProperties component")
        }}
      >
        Scegli il suo miele
      </Button>
    </div>
  )
}

export default memo(HoneyProperties)
