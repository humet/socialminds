import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Play from '../images/play.png'


const EpisodesPage = ({ }) => (

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
                audio
              }
              featured_media {
                localFile {
                  url
                }
              }
              status
              fields {
                deploy
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="episodes__rows">
        {data.allWordpressPost.edges
        .filter((episode) => episode.node.fields.deploy)
        .map((episode) => {
          return (
            <div className="episodes__blocks">
              <div className="episodes__blocks-content" style={episode.node.featured_media ? {backgroundImage: `url( ${ episode.node.featured_media.localFile.url })`} : {}} >
              <button className="episodes__blocks-play" onClick={(event) => this.handlePlayClick(event, episode.node.acf.audio, episode.node.acf.episode_number, episode.node.title, episode.node.featured_media.localFile.url)}><img alt="Play Podcast" className="play-podcast" src={Play} width="14"/></button>
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

export default EpisodesPage;