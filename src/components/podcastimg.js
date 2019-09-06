import React from "react"

import ApplePodCastImg from '../images/ApplePodcast.svg';
import GooglePodCastImg from '../images/GooglePodcast.svg';
import SpotifyImg from '../images/SpotifyPodcast.svg';

import "./podcastimg.scss"

const Podcast = ({ }) => (
  <>
<a href="https://podcasts.apple.com/gb/podcast/social-minds-social-media-marketing-answered/id1382785203" target="_blank" rel="noopener noreferrer"><img alt="Apple Podcast" src={ApplePodCastImg} height="20"/></a>
<a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9zb2NpYWxtaW5kcy5saWJzeW4uY29tL3Jzcw%3D%3D" target="_blank" rel="noopener noreferrer"><img alt="Google Podcast" src={GooglePodCastImg} height="20"/></a>
<a href="https://open.spotify.com/show/1fSUH9oxW5ISS9BVQES6tl" target="_blank" rel="noopener noreferrer"><img alt="Spotify" src={SpotifyImg} height="20"/></a>
</>
)
export default Podcast