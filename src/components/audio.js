import React, { Component } from "react"
import { AudioData } from "../hooks/use-audio-data.js"

export const Player = ({ number, title, image, file }) => {
  const { edges } = AudioData()
  return (
    <div className="audio-player">
      <div className="audio-player__timer-block">
        <div className="time-start">00:00</div>
        <div className="time-bar" />
        <div className="time-end">00:00</div>
      </div>
      <div className="audio-player-block">
        {/* <audio
        controls
        src={edges[0].node.acf.audio} >
    </audio> */}
        <div className="audio-player-block__controls">
          <div className="audio-player-block__controls-rewind" />
          <div className="audio-player-block__controls-back-30" />
          <div className="audio-player-block__controls-play" />
          <div className="audio-player-block__controls-forward-30" />
          <div className="audio-player-block__controls-fastforward" />
        </div>
        <div className="audio-player-block__block">
          <div className="audio-player-block__image">
            <img
              alt={edges[0].node.title}
              src={edges[0].node.featured_media.localFile.url}
            />
          </div>
          <div className="audio-player-block__content">
            <div className="audio-player-block__number">
              Episode: {edges[0].node.acf.episode_number}
            </div>
            <div className="audio-player-block__title">
              {edges[0].node.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class Audio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      episodesNumber: "",
      episodesTitle: "",
      episodesImage: "",
      episodeFileName: "",
    }
  }

  handlePlayClick(e, epAudio, epNumber, epTitle, epImage) {
    //this.player.audio.src=epAudio
    this.setState({
      episodesNumber: epNumber,
      episodesTitle: epTitle,
      episodesImage: epImage,
      episodeFileName: epAudio,
    })
  }

  render() {
    return (
      <Player
        episodesNumber=""
        episodesTitle=""
        episodesImage=""
        episodeFileName=""
      />
    )
  }
}

export default Audio
