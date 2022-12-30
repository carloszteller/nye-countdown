import { useEffect, useRef, useState } from "react";
import Fireworks from "./Fireworks";

type Location = {
  location: string | undefined
}

export default function BallDrop({ location }: Location) {
  const video = useRef<HTMLVideoElement>(null);

  const [seconds, setSeconds] = useState(60);
  
  const setPlaybackRate = () => {
    video.current!.playbackRate = .75;
  }

  useEffect(() => {
    const h1 = document.querySelector('.balldrop-timer h1');
    h1?.classList.add('fade-in-scale');

    const i = setInterval(() => {
      h1?.classList.remove('fade-in-scale');

      setTimeout(() => {
        setSeconds((seconds) =>  seconds - 1);
        h1?.classList.add('fade-in-scale');
      }, 1);
    }, 1000);

    return () => clearInterval(i);
  });

  return (
    <>
    {seconds > 0 ? (
      <div className="balldrop-container">
        <div className="video-bg">
          {/* https://youtu.be/BWNY_0p8pRw */}
          <video src="./videos/ball-drop-bg.mp4" autoPlay loop muted ref={video} onCanPlay={() => setPlaybackRate()}></video>
        </div>

        <div className="balldrop-timer">
          <h1>{seconds}</h1>
        </div>
      </div>
    ) : (
      <Fireworks location={location} />
    )}
    </>
  );
}
  