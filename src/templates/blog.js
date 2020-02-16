import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Blog = ({ data }) => {
  console.log("data: ", data)
  return <Layout>Template page</Layout>
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
