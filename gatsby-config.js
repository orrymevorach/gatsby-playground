module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Playground",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "oiylgdxnvK6fsZWbMkQWjxBQgIRRGzhsssXoHjtC4ms",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
