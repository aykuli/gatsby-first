import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "infinite-react-carousel"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { HONEY_TYPES } from "../../../static/constantas"
import arrow from "../../../static/imgs/icons/arrow.svg"

import HoneyType from "./HoneyType"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      height: 120,
      backgroundColor: theme.palette.background.secondary,
      "& div  ": {
        width: "100%",
        margin: "auto",
        maxWidth: 1140,
      },
    },
    honeyList: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 1140,
      width: "100%",
      height: 120,
      margin: 0,
      padding: 0,
      "& .carousel-prev": {
        display: "none",
      },
      "& .carousel-arrow": {
        backgroundColor: theme.palette.background.secondary,
        borderRadius: 0,
        "&::before": {
          backgroundImage: `url(${arrow})`,
        },
        "@media (max-width: 400px)": {
          display: "none",
        },
      },
    },
    next: {
      width: 50,
      height: "100%",
      padding: 5,
      backgroundColor: "transparent",
      backgroundImage: `url(${require("./assets/arrow.svg")})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top 50% left 50%",
      border: "none",
      cursor: "pointer",
    },
    hidden: {
      display: "none",
    },
  })
)

const SubHeader = ({ currentHoney, handleHoney }) => {
  const styles = useStyles()

  const dataQl = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(fit: CONTAIN) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const imgNodes = dataQl.allImageSharp.edges

  // filtering needed images for SubHeader
  const images = []
  imgNodes.forEach(el => {
    const honeyType = el.node.fluid.originalName.slice(0, -4)
    let isExist = false
    HONEY_TYPES.forEach(({ honey }) => {
      if (honey === honeyType) {
        isExist = true
      }
    })
    if (isExist) {
      images.push(el)
    }
  })
  const ___gatsby = document.body.querySelector("#___gatsby")
  const width = ___gatsby.clientWidth
  const slidesToShowCount = Math.floor(width / 100)
  const slidesToShow =
    slidesToShowCount >= HONEY_TYPES.length
      ? HONEY_TYPES.length
      : slidesToShowCount

  const sliderSettings = {
    slidesToShow,
    wheel: true,
  }

  return (
    <div className={styles.container}>
      <div className={styles.honeyList}>
        <Slider {...sliderSettings}>
          {HONEY_TYPES.map(({ honey, isNew }) => {
            const isCurrent = honey === currentHoney
            let imgNode

            images.forEach(item => {
              if (item.node.fluid.originalName === `${honey}.png`) {
                imgNode = item.node
              }
            })

            return (
              <HoneyType
                key={honey}
                honey={honey}
                handleHoney={handleHoney}
                isCurrent={isCurrent}
                isNew={isNew}
                imgData={imgNode}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default memo(SubHeader)
