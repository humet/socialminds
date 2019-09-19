import { useStaticQuery, graphql } from "gatsby"

export const AudioData = () => {
  const { allWordpressPost } = useStaticQuery(
    graphql`
      query AudioQuery {
        allWordpressPost(sort: {order: ASC, fields: date}) {
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
                    fluid(maxWidth: 600) {
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
    `
  )
  return allWordpressPost
}
