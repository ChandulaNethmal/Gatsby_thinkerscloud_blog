module.exports = {
  siteMetadata: {
    title: `ThinkersCloud`,
    name: `ChandulaNethmal`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/ChandulaNethmal`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/chandulanethmal`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [
    { resolve: `gatsby-theme-document` },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path:  `${__dirname}/src/images`,
      },
    },
  ]
};
