import React, { memo } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, AppBar } from "@material-ui/core"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import { WHAT_IS_3BEE } from "../../../static/constantas"

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

const a11yProps = str => {
  return {
    id: `tab-${str}`,
    "aria-controls": `tabpanel-${str}`,
  }
}

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto 100px",
  },
  title: {
    marginBottom: 60,
    lineHeight: 1,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    marginBottom: 60,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    "& div div": {
      justifyContent: "space-between",
      "& span.MuiTabs-indicator": {
        width: "33%",
        height: 4,
        backgroundColor: theme.palette.text.primary,
      },
    },
  },
  tap: {
    maxWidth: "33%",
    width: "33%",
    fontSize: 30,
    lineHeight: 1.9,
    color: "#3C3B3B",
  },
  bar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 4,
    width: "100%",
    backgroundColor: "#c4c4c4",
    zIndex: -1,
  },
  desc: {
    fontSize: 25,
    lineHeight: 1.3,
    textAlign: "center",
  },
  imgTab: {
    margin: "auto",
  },
}))

const imgStyle = {
  // height: 670,
  objectFit: "contain",
}

const WhatIs3Bee = () => {
  const styles = useStyles()
  const [value, setValue] = React.useState(0)

  const dataQl = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(
              fit: COVER
              srcSetBreakpoints: [560, 420, 370]
              maxHeight: 630
              maxWidth: 800
            ) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const imgNodes = dataQl.allImageSharp.edges

  const images = new Map()
  imgNodes.forEach(item => {
    if (item.node.fluid.originalName.includes("3bee")) {
      images.set(item.node.fluid.originalName, item.node)
    }
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const title = "Cos’è un’adozione 3Bee?"

  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>
      {WHAT_IS_3BEE.map(({ title, imgName }, index) => {
        const image = images.get(imgName)
        console.log("image: ", image)
        return (
          <TabPanel
            key={imgName}
            value={value}
            index={index}
            className={styles.imgTab}
          >
            <Img
              className={styles.img}
              fluid={image.fluid}
              alt={image.fluid.originalName}
              imgStyle={imgStyle}
              fadeIn
              loading="eager"
            />
          </TabPanel>
        )
      })}
      <AppBar position="static" className={styles.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label={title}>
          {WHAT_IS_3BEE.map(({ title }) => (
            <Tab
              key={title}
              label={title}
              {...a11yProps(title)}
              className={styles.tap}
            />
          ))}
        </Tabs>
        <div className={styles.bar} />
      </AppBar>
      {WHAT_IS_3BEE.map(({ description }, index) => (
        <TabPanel
          key={description.slice(0, 15)}
          value={value}
          index={index}
          className={styles.desc}
        >
          <Typography variant="body1">{description}</Typography>
        </TabPanel>
      ))}
    </div>
  )
}

export default memo(WhatIs3Bee)
