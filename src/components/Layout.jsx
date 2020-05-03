import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import Header from "./Header"

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    content: {},
    main: {
      position: "relative",
      background: "white",
      margin: "0 auto",
      overflow: "hidden",
    },
  })
)

const Layout = ({ children }) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <CssBaseline />
      <Header />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
