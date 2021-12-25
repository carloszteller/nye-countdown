type Timer = {
  timer: {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  };
};

export default function Countdown({ timer }: Timer) {
  return (
    <div className="countdown-container">
      <div className="video-bg">
          {/* https://youtu.be/2Gg6Seob5Mg */}
          <video src="./videos/countdown-bg.mp4" autoPlay loop muted></video>
      </div>

      <div className="countdown-timer">
        <img src="./images/urban-yard-logo.png" alt="Urban Yard logo" />

        <h1>Countdown to 2022</h1>

        <div className="timer">
          <div className="days">
            <p className="time">{timer.days}</p>
            <p className="label">Days</p>
          </div>

          <div className="hours">
            {timer.hours >= 10 ? (
              <p className="time">{timer.hours}</p>
            ) : (
              <p className="time">0{timer.hours}</p>
            )}
            <p className="label">Hours</p>
          </div>

          <div className="minutes">
            {timer.minutes >= 10 ? (
              <p className="time">{timer.minutes}</p>
            ) : (
              <p className="time">0{timer.minutes}</p>
            )}
            <p className="label">Minutes</p>
          </div>

          <div className="seconds">
            {timer.seconds >= 10 ? (
              <p className="time">{timer.seconds}</p>
            ) : (
              <p className="time">0{timer.seconds}</p>
            )}
            <p className="label">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  