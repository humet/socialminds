import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import { EpisodeConsumer } from "../components/context"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Play from "../images/play.png"

const EpisodesPage = () => (
<EpisodeConsumer>
  {context=> (
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
                      childImageSharp {
                        fluid(maxWidth: 350) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
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
              .filter(episode => episode.node.fields.deploy)
              .map(episode => {
                return (
                  <div className="episodes__blocks">
                    <BackgroundImage
                            Tag="div"
                            className="episodes__blocks-content"
                            fluid={episode.node.featured_media.localFile.childImageSharp.fluid}
                            backgroundColor={`#000`}
                          >
                    
                      {episode.node.acf.audio &&
                      <button
                        className="episodes__blocks-play"
                        onClick={() => context.setCurrentPlaying(episode.node)}
                      >
                        <img
                          alt="Play Podcast"
                          className="play-podcast"
                          src={Play}
                          width="14"
                        />
                      </button>
                      }
                      <div className="episodes__blocks-text">
                        <p className="episodes__number">
                          Episode {episode.node.acf.episode_number}
                        </p>
                        <p className="episodes__feat">
                          feat. {episode.node.acf.featuring}
                        </p>
                        <h2 className="episodes__title">
                          {episode.node.title}
                        </h2>
                      </div>

                    </BackgroundImage>
                  </div>
                  
                )
              })}
          </div>
        )}
      />
    </section>
  </Layout>)}
  </EpisodeConsumer>
)

export default EpisodesPage
