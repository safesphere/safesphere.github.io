import React, { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import styles from "./video.module.scss";

function Video() {
  const [showVideo, toggleVideo] = useState(false);
  const videoUrl = "/assets/video/safesphere-video.mp4";
  const captionUrl = "/assets/video/safesphere-video-en.vtt";

  useEffect(() => {
    if (window.location.hash === "#video") {
      toggleVideo(true);
    }
  }, []);

  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (showVideo && e.keyCode === 27) {
        toggleVideo(false);
      }
    }

    document.addEventListener("keyup", handleEscapeKey);
    return () => document.removeEventListener("keyup", handleEscapeKey);
  });

  return (
    <>
      <a
        href={videoUrl}
        className={styles.video}
        target="_blank"
        onClick={(e) => playVideo(e)}
      >
        <span>Play video</span>
      </a>

      {showVideo && (
        <div className={styles.videoPlayer}>
          <video
            src={videoUrl}
            preload="auto"
            autoPlay={true}
            controls={true}
            width="90%"
            height="90%"
          >
            {captionUrl && (
              <track
                label="English"
                kind="subtitles"
                srcLang="en"
                src={captionUrl}
                default={true}
              />
            )}
            <p>
              Your browser doesn't support HTML5 video. <br />
              Here is a{" "}
              <a href={videoUrl} target="_blank">
                link to the video
              </a>{" "}
              instead.
            </p>
          </video>{" "}
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
