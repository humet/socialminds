import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/Social_minds_logo.svg"
import Social from "../components/social"
import Podcast from "../components/podcastimg"
import { EpisodeConsumer } from "../components/context"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Playbtn from "../images/playbtn.svg"

import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl: true,
}

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { showDescription: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      showDescription: !this.state.showDescription,
    })
  }

  render() {
    return (
      <EpisodeConsumer>
        {context=> (
          <Layout className="homepage">
        <section className="home">
          <SEO title="Home" />
          <h1>
            <img alt="logo" className="logo" src={Logo} width="512" />
          </h1>
          <p className="subtitle">a podcast by Social Chain</p>
          <div className="social-links">
            <Social />
          </div>

          <StaticQuery
            query={graphql`
              query HomeQuery {
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
                      excerpt
                      content
                    }
                  }
                }
              }
            `}
            render={data => (
              <div className="episodes__rows">
                <Slider {...settings}>
                  {data.allWordpressPost.edges
                    .filter(episode => episode.node.fields.deploy)
                    .map(episode => {
                      return (
                        <div className="episodes__blocks" key={episode.node.acf.episode_number}>
                          <div
                            className="episodes__blocks-image"
                            style={
                              episode.node.featured_media
                                ? {
                                    backgroundImage: `url( ${episode.node.featured_media.localFile.url})`,
                                  }
                                : {}
                            }
                          >
                            {episode.node.acf.audio &&
                            <img
                              alt="Play Podcast"
                              className="Play Podcast"
                              src={Playbtn}
                              width="30"
                              onClick={() => context.setCurrentPlaying(episode.node)}
                            />
                            }
                          </div>
                          <div className="episodes__blocks-content">
                            <p className="episodes__number">
                              <span className="desktop">Episode:</span>
                              <span className="mobile">Ep:</span>{" "}
                              {episode.node.acf.episode_number}
                            </p>
                            <p className="episodes__feat">
                              <span className="desktop">feat. </span>
                              <span className="mobile">ft.</span>{" "}
                              {episode.node.acf.featuring}
                            </p>
                            <p className="episodes__title">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: episode.node.title,
                                }}
                              />
                            </p>
                            <div
                              className={
                                this.state.showDescription
                                  ? "show-description"
                                  : "hide-description"
                              }
                            >
                              <div className="episodes__content-excerpt">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: episode.node.excerpt,
                                  }}
                                />
                                <div
                                  className="read-more-toggle"
                                  onClick={this.handleClick}
                                >
                                  read more
                                </div>
                              </div>
                              <div className="episodes__content-full">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: episode.node.content,
                                  }}
                                />
                                <div
                                  className="read-less-toggle"
                                  onClick={this.handleClick}
                                >
                                  read less
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </Slider>
              </div>
            )}
          />

          <div className="podcast-img">
            <Podcast />
          </div>
        </section>
      </Layout>
        )}
      </EpisodeConsumer>
    )
  }
}
export default IndexPage
