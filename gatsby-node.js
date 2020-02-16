const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log("-----------------------------------------------")
    console.log("\n\n", slug)
    console.log("-----------------------------------------------")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(res)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    console.log("edge: ", edge)
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}/`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
