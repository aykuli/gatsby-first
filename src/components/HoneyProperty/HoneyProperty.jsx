import React, { memo } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import { HONEY_PROPERTIES } from "../../../static/constantas"

import PropertyCard from "./PropertyCard"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      margin: 0,
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
    },
  })
)

const HoneyProperty = ({ title, description }) => {
  const styles = useStyles()

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
            />
          )
        })}
      </div>
    </div>
  )
}

export default memo(HoneyProperty)
