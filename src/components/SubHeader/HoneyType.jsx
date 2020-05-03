import React from "react"
import Img from "gatsby-image"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    item: {
      display: "block",
      width: 100,
      minWidth: 100,
      height: 120,
      margin: "0 auto",
      padding: 0,
      paddingTop: 8,
      backgroundColor: "transparent",
      border: "none",
      fontSize: 12,

      cursor: "pointer",
    },
    honeyName: {
      fontSize: 12,
      lineHeight: "16px",
      color: "#3C3B3B",
    },
    isNewHoney: {
      fontSize: 10,
      lineHeight: "14px",
      color: "#D30F0F",
    },
    currentHoney: {
      fontSize: 12,
      lineHeight: "16px",
      color: theme.palette.primary.main,
    },
    img: {
      height: "calc(100% - 40px)",
    },
    text: {
      height: 40,
    },
  })
)

const HoneyType = ({ honey, handleHoney, isCurrent, isNew, imgData }) => {
  const styles = useStyles()

  return (
    <button
      onClick={() => handleHoney(honey)}
      className={styles.item}
      type="button"
      tabIndex="0"
    >
      <Img
        className={styles.img}
        imgStyle={{
          width: "auto",
          height: "auto",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        fluid={imgData.fluid}
        alt={imgData.fluid.originalName}
        fadeIn
        loading="eager"
      />
      <div className={styles.text}>
        <Typography
          variant="body1"
          className={isCurrent ? styles.currentHoney : styles.honeyName}
        >
          {honey}
        </Typography>
        {isNew ? (
          <Typography variant="body1" className={styles.isNewHoney}>
            Novità
          </Typography>
        ) : null}
      </div>
    </button>
  )
}

export default HoneyType
