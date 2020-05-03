import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import { IMPACTS } from "../../../static/constantas"

import ImpactAtom from "./ImpactAtom"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      maxWidth: 1440,
      margin: "auto",
      padding: "40px 0 40px 57px",
    },
    title: {
      textAlign: "left",
      marginBottom: 50,
    },
    slogan: {
      fontWeight: "normal",
      marginBottom: 70,
    },
    photosAndVideos: {
      backgroundColor: "#bbffbb",
      width: 1174,
      height: 810,
      margin: "0 auto 89px",
    },
    impactForPlanet: {
      display: "flex",
      justifyContent: "space-between",
    },
    impactTxt: {
      marginBottom: 40,
    },
    impactLeft: {
      maxWidth: 590,
    },
    impactRight: {
      position: "relative",
      display: "flex",
    },
    middleLine: {
      position: "absolute",
      top: 35,
      left: "40%",
      width: 1,
      height: "calc(100% - 58px)",
      backgroundColor: theme.palette.text.primary,
    },
  })
)

const Impact = () => {
  const styles = useStyles()

  return (
    <>
      <div className={styles.impactLeft}>
        <Typography variant="h3" className={styles.title}>
          Esplora l’impatto per il pianeta di Apicoltura Galati{" "}
        </Typography>
        <Typography variant="body1" className={styles.impactTxt}>
          L’Azienda Agricola Apistica di Galati Fabio nasce nel 2014,
          dall’esperienza trentennale ereditata dal padre Francesco.
        </Typography>
        <Typography variant="body1" className={styles.impactTxt}>
          Con sede a Curinga nella provincia di Catanzaro in Calabria, Fabio
          produce miele vergine integrale con lavorazione a freddo.{" "}
        </Typography>
        <Typography variant="body1" className={styles.impactTxt}>
          Non solo apicoltore, ma anche allevatore di regine, nel 2020 Fabio
          entra nell’Albo Nazionale degli Allevatori di Api Italiane.
        </Typography>
      </div>
      <div className={styles.impactRight}>
        <div className={styles.left}>
          {IMPACTS.map(({ title, quantity, description }, index) => {
            return index < 3 ? (
              <ImpactAtom
                key={`${title}-${quantity}`}
                title={title}
                quantity={quantity}
                description={description}
              />
            ) : null
          })}
        </div>
        <div className={styles.middleLine} />
        <div className={styles.right}>
          {IMPACTS.map(({ title, quantity, description }, index) => {
            return index >= 3 ? (
              <ImpactAtom
                key={`${title}-${quantity}`}
                title={title}
                quantity={quantity}
                description={description}
              />
            ) : null
          })}
        </div>
      </div>
    </>
  )
}

export default Impact
