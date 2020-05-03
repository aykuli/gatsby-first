import React, { useState, useEffect, useCallback } from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import Skeleton from "@material-ui/lab/Skeleton"

import theme from "../themes/theme-light"
import {
  HONEY_TYPES,
  MAIN_API,
  BEEKEPERS,
  BEEKEPER_DESCRIPTION,
} from "../../static/constantas"

import Layout from "../components/Layout"
import BeeKeepers from "../components/Beekepers"
import SubHeader from "../components/SubHeader/SubHeader"
import BeeKeeper from "../components/Beekeeper/Beekeper"

const Index = () => {
  const [currentHoney, setCurrentHoney] = useState(HONEY_TYPES[0].honey)
  const [honeyFullName, setHoneyFullName] = useState(HONEY_TYPES[0].fullName)
  const [allBeekepers, setAllBeekepers] = useState(null)
  const [currentBeekeper, setCurrentBeekeper] = useState(null)

  const handleHoney = honey => {
    setCurrentHoney(honey)
    HONEY_TYPES.forEach(item => {
      if (item.honey === honey) {
        setHoneyFullName(item.fullName)
      }
    })
  }

  const beekeepersFetching = useCallback(
    honey => {
      const url = `${MAIN_API}${BEEKEPERS}?honey=${honey}`
      fetch(url)
        .then(data => data.json())
        .then(res => {
          setAllBeekepers(res)
          setCurrentBeekeper(res[0])
        })
        .catch(e => {
          console.error(
            `All beekeepers of honey=${honey} fetching failed. \n`,
            e
          )
        })
    },
    [currentHoney]
  )

  useEffect(() => {
    beekeepersFetching(currentHoney)
  }, [currentHoney])

  const oneBeekeeperFetching = useCallback(
    id => {
      if (id) {
        const url = `${MAIN_API}${BEEKEPER_DESCRIPTION}${id}`
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setCurrentBeekeper(data)
          })
          .catch(e => {
            console.error(
              `One beekeeper with id=${currentBeekeper.id} fetching failed. \n`,
              e
            )
          })
      }
    },
    [currentBeekeper]
  )

  useEffect(() => {
    if (![undefined, null].includes(currentBeekeper)) {
      oneBeekeeperFetching(currentBeekeper.id)
    }
  }, [currentBeekeper])

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <SubHeader currentHoney={currentHoney} handleHoney={handleHoney} />
        {allBeekepers && currentBeekeper ? (
          <>
            <BeeKeepers
              honeyFullName={honeyFullName}
              beekeeperDesc={currentBeekeper.beekeeper_description}
              companyDesc={currentBeekeper.company_description}
              beekeepers={allBeekepers}
            />
            <BeeKeeper beekeeperName="beekeeperName" />
          </>
        ) : (
          <div style={{ maxWidth: 1440, margin: "20px auto" }}>
            <Skeleton variant="rect" width={"100%"} height={40} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <Skeleton variant="rect" width={"35%"} height={100} />
              <Skeleton variant="rect" width={"64%"} height={100} />
            </div>
          </div>
        )}
      </Layout>
    </MuiThemeProvider>
  )
}

export default Index
