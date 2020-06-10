import React, { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import styles from "./video.module.scss";

type Props = {
  youtubeId: string;
};

function Video(props: Props) {
  const { youtubeId } = props;
  const [showVideo, toggleVideo] = useState(false);

  /*
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (showVideo && e.keyCode === 27) {
        toggleVideo(false);
      }
    }

    document.addEventListener("keyup", handleEscapeKey);
    return () => document.removeEventListener("keyup", handleEscapeKey);
  });
  */

  return null;

  return (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        className={styles.video}
        target="_blank"
        onClick={(e) => playVideo(e)}
      >
        <span>Play video</span>
      </a>

      {showVideo && (
        <div className={styles.videoPlayer}>
          <iframe
            className={styles.embededVideo}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles.closeVideo}>
            <Hamburger
              label="Close video"
              active={true}
              onClick={() => toggleVideo(false)}
              color="#ffffff"
            />
          </div>
        </div>
      )}
    </>
  );

  function playVideo(e: React.MouseEvent) {
    e.preventDefault();
    toggleVideo(true);
  }
}

export default Video;
