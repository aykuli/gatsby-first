import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"
const BlogPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id}>
              <Link
                to={`/blog/${node.fields.slug}/`}
                className={blogStyles.blogTitle}
              >
                {node.frontmatter.title}
              </Link>
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
          fields {
            slug
          }
        }
      }
    }
  }
`
