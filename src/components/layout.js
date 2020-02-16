import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import layoutStyles from "./layout.module.scss"

import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
