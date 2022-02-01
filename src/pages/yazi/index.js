import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"

const YaziPage = ({ data }) => {
  return (
    <Layout pageTitle="Yazılarım">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/yazi/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>{node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM YYYY", locale: "tr")
          title
        }
        id
        slug
      }
    }
  }
`
export default YaziPage
