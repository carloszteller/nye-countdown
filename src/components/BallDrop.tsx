import { useRef } from "react";

type Timer = {
    timer: {
      seconds: number;
      minutes: number;
      hours: number;
      days: number;
    };
  };
  
  export default function BallDrop({ timer }: Timer) {
    const video = useRef<HTMLVideoElement>(null);
    
    const setPlaybackRate = () => {
      video.current!.playbackRate = .75;
    }

    return (
      <div className="balldrop-container">
        <div className="video-bg">
          {/* https://youtu.be/BWNY_0p8pRw */}
          <video src="./videos/ball-drop-bg.mp4" autoPlay loop muted ref={video} onCanPlay={() => setPlaybackRate()}></video>
        </div>
  
        <div className="balldrop-timer">
          {timer.minutes === 1 && timer.seconds === 0 ? (
            <h1>60</h1>
          ) : (
            <h1>{timer.seconds}</h1>
          )}
        </div>
      </div>
    );
}
  