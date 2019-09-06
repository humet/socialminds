import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EpisodesPage = () => (
  <Layout className="episodespage">
    <section className="episodes">
    <SEO title="Episodes" />
    <h1>All Episodes</h1>

    <StaticQuery
    query={graphql`
      query EpisodesQuery {
        allWordpressPost {
          edges {
            node {
              title
              acf {
                episode_number
                featuring
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fixed(width: 400, height: 400, cropFocus: CENTER) {
                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="episodes__rows">
        {data.allWordpressPost.edges.map((episode) => {
          return (
            <div className="episodes__blocks">
              <div className="episodes__blocks-content">
            <p>Episode {episode.node.acf.episode_number}</p>
            <p>feat. {episode.node.acf.featuring}</p>
            <h2>{episode.node.title}</h2>
            <Img fixed={episode.node.featured_media.localFile.childImageSharp.fixed}/>
            </div>
            </div>
          )
        })}
      </div>
    )}
  />

    </section>
  </Layout>
)

export default EpisodesPage
