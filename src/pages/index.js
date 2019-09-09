import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../images/Social_minds_logo.svg'
import Social from "../components/social"
import Podcast from "../components/podcastimg"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const IndexPage = () => (
  <Layout className="homepage">
    <section className="home">
    <SEO title="Home" />
    <h1><img alt="logo" className="logo" src={Logo} width="512"/></h1>
    <p className="subtitle">a podcast by Social Chain</p>
      <div className="social-links">
      <Social/>
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
        <Slider {...settings}>
        {data.allWordpressPost.edges.map((episode) => {
          return (
            <div className="episodes__blocks">
              <div className="episodes__blocks-content" style={episode.node.featured_media ? {backgroundImage: `url( ${ episode.node.featured_media.localFile.url })`} : {}}  >
            <p className="episodes__number">Episode {episode.node.acf.episode_number}</p>
            <p className="episodes__feat">feat. {episode.node.acf.featuring}</p>
            <h2 className="episodes__title">{episode.node.title}</h2>
            </div>
            </div>
          )
        })}
        </Slider>
      </div>
    )}
  />

        <div className="podcast-img">
      <Podcast/>
    </div>
    </section>
  </Layout>
)
export default IndexPage
