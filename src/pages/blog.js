import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"
const BlogPage = ({ data }) => {
  console.log(data)

  console.log("blogStyles: ", blogStyles)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id}>
              <span className={blogStyles.blogTitle}>
                {node.frontmatter.title}
              </span>
              <span className={blogStyles.blogDate}>
                {node.frontmatter.date}
              </span>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

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
        }
      }
    }
  }
`
