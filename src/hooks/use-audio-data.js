import { useStaticQuery, graphql } from "gatsby"

export const AudioData = () => {
  const { allWordpressPost } = useStaticQuery(
    graphql`
    query AudioQuery {
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
    `
  )
  return allWordpressPost
}