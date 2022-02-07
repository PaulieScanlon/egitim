import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({
  data: {
    allMdx: { nodes }
  }
}) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Yazi</h1>
      <ul>
        {nodes.map((post, index) => {
          const {
            slug,
            frontmatter: { title }
          } = post;
          return (
            <li key={index}>
              <Link to={`/yazi/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { variant: { eq: "yazi" } } }) {
      nodes {
        slug
        frontmatter {
          date
          title
          variant
        }
      }
    }
  }
`;

export default Page;
