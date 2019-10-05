import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { navigate } from "gatsby"
import Navbar from '../Navbar/index'
import ParticlesWrapper from '../Particles/index'
import { StaticQuery, graphql } from "gatsby"
const Layout: React.FC = ({ children }) => (
  <div>
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = data.site.siteMetadata.description
        const keywords = ["starter"]

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
                      'react-dom': '@hot-loader/react-dom'
                    }
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
                        font-family: "Open Sans Extrabold";
                        src: url("fonts/Open_Sans/OpenSans-ExtraBold.ttf") format("truetype");
                      }
                      @font-face {
                        font-family: "Open Sans Semibold";
                        src: url("fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
                      }
                      @font-face {
                        font-family: "Open Sans Regular";
                        src: url("fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
                      }
                      @font-face {
                        font-family: "Open Sans Semibold Italic";
                        src: url("fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf") format("truetype");
                      }
                      body {
                          height:100%;
                          margin:0;
                          padding:0;
                          background-color:black;
                      }
                  `,
                },
              ]}
            />
            <ParticlesWrapper size={2} lineOpacity={0.5} />
            <ParticlesWrapper size={1.6} lineOpacity={0.02} />
            <ParticlesWrapper size={1} lineOpacity={0.02} />
            <div id="main-block" style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}>
              <Navbar />
              {children}
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
