import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const EpisodeContext = React.createContext()

export function EpisodeProvider(props) {
  const data = useStaticQuery(graphql`
    {
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
                  fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
  `)
  const [currentPlaying, setCurrentPlaying] = React.useState(
    data.allWordpressPost.edges[0].node
  )

  return (
    <EpisodeContext.Provider
      value={{
        state: currentPlaying,
        setCurrentPlaying,
      }}
      {...props}
    />
  )
}

export class EpisodeConsumer extends Component {
  render() {
    return (
      <EpisodeContext.Consumer>{this.props.children}</EpisodeContext.Consumer>
    )
  }
}
