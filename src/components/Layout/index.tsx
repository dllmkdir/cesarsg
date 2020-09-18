import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../Navbar/index"
// @ts-ignore
import favicon from "../../../static/favicon.ico"
import ParticlesWrapper from "../Particles/index"
import { StaticQuery, graphql } from "gatsby"
import ScrollControl from "../Springs/ScrollControl"
const Layout: React.FC = ({ children }) => (
  <div>
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = data.site.siteMetadata.description
        const keywords = [
          "cesarsg",
          "César Salazar",
          "Audio Engineer",
          "Music",
          "Inmersive Experience",
        ]

        return (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: data.site.siteMetadata.title,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  resolve: {
                    alias: {
                      "react-dom": "@hot-loader/react-dom",
                    },
                  },
                  name: `twitter:title`,
                  content: data.site.siteMetadata.title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ].concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )}
              style={[
                {
                  cssText: `
                      @font-face {
                        font-family: "Open Sans Semibold";
                        src: url("fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
                      }
                  `,
                },
              ]}
            >
              <link rel="icon" href={favicon} />
              <title>Cesar Salazar | Audio Engineer</title>
            </Helmet>
            <ParticlesWrapper size={2} lineOpacity={0.5} />
            <ParticlesWrapper size={1.6} lineOpacity={0.02} />
            <ParticlesWrapper size={1} lineOpacity={0.02} />
            <div
              id="main-block"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Navbar />
              {children}
              <ScrollControl />
            </div>
          </>
        )
      }}
    />
  </div>
)

export default Layout

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
