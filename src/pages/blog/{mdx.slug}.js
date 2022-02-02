import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "//blog//" } }) {
      nodes {
        fileAbsolutePath
      }
      frontmatter {
        title
        date(formatString: "D MMMM YYYY", locale: "tr")
      }
      body
    }
  }
`
export default BlogPost
