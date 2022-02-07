import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';

const BlogTemplate = ({
  data: {
    mdx: {
      frontmatter: { title, variant },
      body
    }
  }
}) => {
  return (
    <Layout>
      <h1>{`title - ${title}`}</h1>
      <h2>{`variant - ${variant}`}</h2>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default BlogTemplate;
