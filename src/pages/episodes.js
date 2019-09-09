import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"

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
                  url
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
              <div className="episodes__blocks-content" style={episode.node.featured_media ? {backgroundImage: `url( ${ episode.node.featured_media.localFile.url })`} : {}} >
              <div className="episodes__play">Play</div>
            <div className="episodes__blocks-text">
            <p className="episodes__number">Episode {episode.node.acf.episode_number}</p>
            <p className="episodes__feat">feat. {episode.node.acf.featuring}</p>
            <h2 className="episodes__title">{episode.node.title}</h2>
            </div>
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
