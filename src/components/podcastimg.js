import React from "react"

import ApplePodCastImg from '../images/ApplePodcast.svg';
import GooglePodCastImg from '../images/GooglePodcast.svg';
import SpotifyImg from '../images/SpotifyPodcast.svg';

const Podcast = ({ }) => (
  <>
<a href="#" target="_blank" rel="noopener noreferrer"><img alt="Apple Podcast" src={ApplePodCastImg} width="110"/></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img alt="Google Podcast" src={GooglePodCastImg} width="110"/></a>
<a href="#" target="_blank" rel="noopener noreferrer"><img alt="Spotify" src={SpotifyImg} width="110"/></a>
</>
)
export default Podcast