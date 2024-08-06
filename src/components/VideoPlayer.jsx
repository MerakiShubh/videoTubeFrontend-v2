import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import Hls from "hls.js";
import { MediaPlayer, MediaProvider, isHLSProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

function VideoPlayer({ src, thumbnail, title, duration, autoPlay = true }) {
  const playerRef = useRef(null);

  function onProviderChange(provider) {
    if (isHLSProvider(provider)) {
      provider.library = Hls;
    }
  }

  useEffect(() => {
    const player = playerRef.current;
    if (player && autoPlay) {
      const handleAutoplay = () => {
        player.play();
      };
      player.addEventListener("click", handleAutoplay);
      return () => {
        player.removeEventListener("click", handleAutoplay);
      };
    }
  }, [autoPlay]);

  return (
    <MediaPlayer
      ref={playerRef}
      title={title}
      src={src}
      autoPlay={autoPlay}
      playsInline
      load="eager"
      posterLoad="eager"
      crossOrigin
      storage={`video-player-settings-${title}`}
      onProviderChange={onProviderChange}
      duration={duration}
      streamType="unknown"
      className="w-full h-full"
    >
      <MediaProvider></MediaProvider>
      <PlyrLayout posterFrame={thumbnail} icons={plyrLayoutIcons} />
    </MediaPlayer>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  autoPlay: PropTypes.bool,
};

export default VideoPlayer;
