import React from "react"
import PodcastBar from "./src/components/podcastbar"
import { EpisodeProvider } from "./src/components/context"

export const wrapPageElement = ({ element, props }) => {
  return (
    <EpisodeProvider>
      {element}
      <PodcastBar {...props} />
    </EpisodeProvider>
  )
}
