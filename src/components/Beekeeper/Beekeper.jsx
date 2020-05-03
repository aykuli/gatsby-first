import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import Impact from "./Impact"
import HoneyProperties from "../HoneyProperty/HoneyProperties"
import WhatIs3Bee from "../WhatIs3Bee/WhatIs3Bee"

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: 1440,
      margin: "auto",
      padding: "40px 130px 40px",
    },
    slogan: {
      fontWeight: "normal",
      marginBottom: 70,
    },
    photosAndVideos: {
      maxWidth: 1174,
      width: "100%",
      height: 810,
      margin: "0 auto 89px",
      backgroundColor: "#bbffbb",
    },
    impactForPlanet: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 100,
    },
    impactTxt: {
      marginBottom: 40,
    },
    impactRight: {
      display: "flex",
    },
  })
)

const BeeKeeper = ({ beekeeperName }) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Typography variant="h2" color="primary" className={styles.title}>
        {beekeeperName}
      </Typography>
      <Typography variant="h3" className={styles.slogan}>
        Conosci il tuo apicoltore
      </Typography>
      <div className={styles.photosAndVideos}></div>
      <div className={styles.impactForPlanet}>
        <Impact />
      </div>
      <HoneyProperties
        title="Il Millefiori di Fabio"
        description="Proprietà e benefici"
      />
      <WhatIs3Bee />
    </div>
  )
}

export default BeeKeeper
