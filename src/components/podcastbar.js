import React, { Component } from "react"
import PropTypes from "prop-types"
import { EpisodeConsumer } from "./context"
import { AudioData } from "../hooks/use-audio-data"
import NProgress from "nprogress"
import Img from "gatsby-image"

import "./podcastbar.scss"

class AudioPlayer extends Component {
  static propTypes = {
    episode: PropTypes.object.isRequired,
    allEpisodes: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.player = React.createRef()
    this.handlePlayerClick = this.handlePlayerClick.bind(this)

    this.state = {
      player: "paused",
      currentTime: "0:00",
      duration: "",
      progressTime: 0,
      totalEpisodes: this.props.allEpisodes.length,
      playerExpand: false,
      firstPlay: true,
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    this.player.current.removeEventListener("timeupdate", () => {})
  }

  componentDidUpdate(prevProps, prevState) {
    const { episode } = this.props
    if (episode.acf.episode_number !== prevProps.episode.acf.episode_number || this.state.firstPlay) {
      this.player.current.removeEventListener("timeupdate", () => {})
      this.player.current.removeEventListener("loadstart", () => {})
      this.player.current.removeEventListener("canplaythrough", () => {})
      this.player.current.play()
      this.setState({
        player: "playing",
        firstPlay: false,
      })
      this.player.current.addEventListener("timeupdate", e => {
        this.setState({
          currentTime: this.getTime(e.target.currentTime),
          duration: this.getTime(e.target.duration),
          progressTime: (e.target.currentTime / e.target.duration) * 100,
        })
      })
      this.player.current.addEventListener("loadstart", e => {
        NProgress.start()
      })
      this.player.current.addEventListener("canplaythrough", e => {
        NProgress.done()
      })
    }
  }

  getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      )
    }
  }

  handlePlayerClick(e) {
    const currentTime = this.player.current.currentTime
    switch (e.currentTarget.id) {
      case "back-30":
        this.player.current.currentTime = currentTime - 30
        break
      case "forward-30":
        this.player.current.currentTime = currentTime + 30
        break
      default:
        break
    }
  }

  togglePlay = () => {
    if (this.state.player === "paused") {
      this.player.current.play()
      this.setState({
        player: "playing",
      })
    } else if (this.state.player === "playing") {
      this.player.current.pause()
      this.setState({
        player: "paused",
      })
    }
  }

  togglePlayerExpand = () => {
    this.setState({
      playerExpand: !this.state.playerExpand,
    })
  }

  render() {
    const { episode } = this.props
    const prevEp = episode.acf.episode_number - 2
    const nextEp = episode.acf.episode_number
    return (
      <EpisodeConsumer>
        {context => (
          <div
            className={
              "audio-player" + (this.state.playerExpand ? " expanded" : "")
            }
          >
            <button className="audio-expand" onClick={this.togglePlayerExpand}>
              <span>{this.state.playerExpand ? "-" : "+"}</span>
            </button>
            <div className="audio-player__timer-block">
              <div className="time-start">{this.state.currentTime}</div>
              <div className="time-bar">
                <div
                  className="time-bar-progress"
                  style={{ width: `${this.state.progressTime}%` }}
                ></div>
              </div>
              <div className="time-end">{this.state.duration}</div>
            </div>
            <div className="audio-player-block">
              <audio
                src={episode.acf.audio}
                ref={this.player}
                preload="metadata"
              />
              <div className="audio-player-block__controls">
                <button
                  title="Previous Podcast"
                  className="audio-player-block__controls-rewind"
                  onClick={() =>
                    context.setCurrentPlaying(
                      this.props.allEpisodes[prevEp].node
                    )
                  }
                  disabled={parseInt(episode.acf.episode_number) === 1}
                />
                <button
                  title="Back 30 Seconds"
                  className="audio-player-block__controls-back-30"
                  id="back-30"
                  onClick={this.handlePlayerClick}
                />
                {this.state.player === "paused" ? (
                  <button
                    title="Play"
                    className="audio-player-block__controls-play"
                    onClick={this.togglePlay}
                  />
                ) : (
                  <button
                    title="Pause"
                    className="audio-player-block__controls-pause"
                    onClick={this.togglePlay}
                  />
                )}
                <button
                  title="Forward 30 Seconds"
                  className="audio-player-block__controls-forward-30"
                  id="forward-30"
                  onClick={this.handlePlayerClick}
                />
                <button
                  title="Next Podcast"
                  className="audio-player-block__controls-fastforward"
                  onClick={() =>
                    context.setCurrentPlaying(
                      this.props.allEpisodes[nextEp].node
                    )
                  }
                  disabled={
                    parseInt(episode.acf.episode_number) ===
                    this.state.totalEpisodes
                  }
                />
              </div>
              <div className="audio-player-block__block">
                <div className="audio-player-block__content">
                  <div className="audio-player-block__number">
                    <strong>Episode: {episode.acf.episode_number}</strong>
                  </div>
                  <div className="audio-player-block__image">
                    <Img
                      alt={episode.title}
                      fluid={
                        episode.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  </div>
                  <div className="audio-player-block__title">
                    {episode.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </EpisodeConsumer>
    )
  }
}

export const PodcastBar = () => {
  const allEpisodes = AudioData()
  return (
    <EpisodeConsumer>
      {context => (
        <AudioPlayer episode={context.state} allEpisodes={allEpisodes.edges} />
      )}
    </EpisodeConsumer>
  )
}

export default PodcastBar
