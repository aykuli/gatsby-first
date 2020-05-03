import React from "react"
import Img from "gatsby-image"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, Card } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: 576,
      maxHeight: 740,
      marginBottom: 20,

      paddingTop: 35,
      backgroundColor: theme.palette.background.secondary,
      boxShadow: "none",
      border: "none",
      borderRadius: 0,
    },
    text: {
      padding: "35px 60px 0",
    },
    title: {
      marginBottom: 60,
      lineHeight: 1,
    },
    desc: {
      marginBottom: 60,
      fontWeight: "normal",
      textAlign: "center",
    },
    img: {
      position: "absolute",
      bottom: 0,
      left: 0,
      mixBlendMode: "darken",
    },
  })
)

const PropertyCard = ({ title, description, image, isOdd }) => {
  const styles = useStyles()
  const marginLeft = isOdd ? { marginLeft: 20 } : { marginLeft: 0 }

  return (
    <Card className={styles.container} style={marginLeft}>
      <div className={styles.text}>
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.desc}>
          {description}
        </Typography>
      </div>
      <Img
        className={styles.img}
        fluid={image.fluid}
        alt={image.fluid.originalName}
        fadeIn
        loading="eager"
      />
    </Card>
  )
}

export default PropertyCard
