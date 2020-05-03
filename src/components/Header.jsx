import React, { useState, useEffect } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { IconButton } from "@material-ui/core"

import logo from "../../static/imgs/icons/logo.png"
import search from "../../static/imgs/icons/search.svg"
import hexagon from "../../static/imgs/icons/hexagon.svg"
import menuMobile from "../../static/imgs/icons/menu-mobile.svg"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#000000",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 1000,
      margin: "0 auto",
    },
    iconButton: {
      padding: 3,
      margin: "0 75px 0 14px",
      "&:last-child": {
        margin: "0 14px",
      },
    },
    right: {
      display: "flex",
      alignItems: "center",
    },
  })
)

const Header = () => {
  const styles = useStyles()

  const [width, setWidth] = useState(document.body.clientWidth)
  const [isMobile, setIsMobile] = useState(width <= 500)

  const windowSizeWatcher = e => {
    const newWidth = document.body.clientWidth
    setWidth(newWidth)
    setIsMobile(newWidth <= 400)
  }
  document.body.addEventListener("resize", windowSizeWatcher)

  useEffect(() => {
    document.body.addEventListener("resize", windowSizeWatcher)
    return () => {
      document.body.removeEventListener("resize", windowSizeWatcher)
    }
  }, [width])

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {isMobile ? (
          <IconButton
            color="primary"
            aria-label="menu"
            component="div"
            disableRipple={false}
            disableFocusRipple={false}
            className={styles.iconButton}
          >
            <img src={menuMobile} alt="logo" />
          </IconButton>
        ) : null}
        <IconButton
          color="primary"
          aria-label="3Bee"
          component="div"
          className={styles.iconButton}
        >
          <img src={logo} alt="logo" />
        </IconButton>
        <div className={styles.right}>
          {!isMobile ? (
            <IconButton
              color="primary"
              aria-label="search"
              component="div"
              className={styles.iconButton}
            >
              <img src={search} alt="search" />
            </IconButton>
          ) : null}
          <IconButton
            color="primary"
            aria-label="hexagon"
            component="div"
            className={styles.iconButton}
          >
            <img src={hexagon} alt="hexagon" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header
