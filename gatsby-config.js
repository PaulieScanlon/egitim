module.exports = {
  siteMetadata: {
    title: `Öğrenmek yaparak olur`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/things/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yazi`,
        path: `${__dirname}/src/things/yazi/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/things/images/`,
      },
    },

    "gatsby-plugin-mdx",
    //  "gatsby-plugin-image",
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
  ],
}
