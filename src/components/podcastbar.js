import React, { Component } from "react"
import PropTypes from "prop-types"
import { EpisodeConsumer } from "./context"
import { AudioData } from "../hooks/use-audio-data"
import NProgress from "nprogress"

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
    }
  }

  componentDidMount() {
    this.player.current.addEventListener("loadedmetadata", e=> {
      this.setState({
        duration: this.getTime(e.target.duration)
      });
    })
    this.player.current.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: this.getTime(e.target.currentTime),
        duration: this.getTime(e.target.duration),
        progressTime: (e.target.currentTime / e.target.duration) * 100
      });
    });
    this.player.current.addEventListener("loadstart", e => {
      NProgress.start()
    })
    this.player.current.addEventListener("canplay", e => {
      NProgress.done()
    })
  }

  componentWillUnmount() {
    this.player.current.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    const { episode } = this.props
    if (episode.acf.episode_number !== prevProps.episode.acf.episode_number) {
      this.player.current.play();
      this.setState({
        player: "playing"
      })
    }
  }

  getTime(time) {
    if(!isNaN(time)) {
      return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
  }

  handlePlayerClick(e) {
    const currentTime = this.player.current.currentTime
    switch(e.currentTarget.id) {
      case "back-30":
        this.player.current.currentTime = currentTime - 30
        break;
      case "forward-30":
        this.player.current.currentTime = currentTime + 30
        break;
      default:
        break;
    }
  }

  togglePlay = () => {
    if(this.state.player === "paused") {
      this.player.current.play();
      this.setState({
        player: "playing"
      })
    } else if(this.state.player === "playing") {
      this.player.current.pause();
      this.setState({
        player: "paused"
      })
    }
  }

  togglePlayerExpand = () => {
    this.setState({
      playerExpand: !this.state.playerExpand
    })
  }

  render() {
    const { episode } = this.props
    const prevEp = episode.acf.episode_number - 2
    const nextEp = episode.acf.episode_number
    return (
    <EpisodeConsumer>
    {context=> (
      <div className={"audio-player" + (this.state.playerExpand ? " expanded" : "")}>
      <button className="audio-expand" onClick={this.togglePlayerExpand}><span>{this.state.playerExpand ? "-" : "+"}</span></button>
      <div className="audio-player__timer-block">
        <div className="time-start">{this.state.currentTime}</div>
        <div className="time-bar">
          <div className='time-bar-progress' style={{width: `${this.state.progressTime}%`}}></div>
        </div>
        <div className="time-end">{this.state.duration}</div>
      </div>
      <div className="audio-player-block">
        <audio
        src={episode.acf.audio}
        ref={this.player}
        />
        <div className="audio-player-block__controls">
          <button className="audio-player-block__controls-rewind" onClick={() => context.setCurrentPlaying(this.props.allEpisodes[prevEp].node)} disabled={parseInt(episode.acf.episode_number) === 1} />
          <button className="audio-player-block__controls-back-30" id="back-30" onClick={this.handlePlayerClick} />
          { this.state.player === "paused" ? (
            <button className="audio-player-block__controls-play" onClick={this.togglePlay} />
          ) : (
            <button className="audio-player-block__controls-pause" onClick={this.togglePlay} />
          )}
          <button className="audio-player-block__controls-forward-30" id="forward-30" onClick={this.handlePlayerClick} />
          <button className="audio-player-block__controls-fastforward" onClick={() => context.setCurrentPlaying(this.props.allEpisodes[nextEp].node)} disabled={parseInt(episode.acf.episode_number) === this.state.totalEpisodes} />
        </div>
        <div className="audio-player-block__block">
          <div className="audio-player-block__content">
            <div className="audio-player-block__number">
              <strong>Episode: {episode.acf.episode_number}</strong>
            </div>
            <div className="audio-player-block__image">
            <img
              alt={episode.title}
              src={episode.featured_media.localFile.url}
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
      {context => <AudioPlayer episode={context.state} allEpisodes={allEpisodes.edges} /> }
    </EpisodeConsumer>
  )
}

export default PodcastBar
