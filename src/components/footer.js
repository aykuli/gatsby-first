import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>
        Creater by {data.site.siteMetadata.author}
        {` ${new Date().getFullYear()}`}
      </p>
    </footer>
  )
}
export default Footer
