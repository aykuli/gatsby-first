import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"
const BlogPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Head title="blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id} className={blogStyles.post}>
              <Link
                to={`/blog/${node.fields.slug}/`}
                className={blogStyles.blogTitle}
              >
                <h2>{node.frontmatter.title}</h2>
                <p className={blogStyles.blogDate}>{node.frontmatter.date}</p>
              </Link>
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
