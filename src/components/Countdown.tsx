import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BallDrop from './BallDrop';

export default function Countdown() {
  const params = useParams();

  const [timer, setTimer] = useState({
    seconds: 60,
    minutes: 60,
    hours: 24,
    days: 365
  });

  const currentDate: any = new Date();
  const newYear: any = new Date(2022, 11, 31, 23, 59, 0, 0);

  const t = newYear - currentDate;

  const countdown = () => {
    const s: number = 1000;
    const m: number = 60 * s;
    const h: number = 60 * m;
    const d: number = 24 * h;

    setTimer({
      seconds: Math.floor((t % m) / s),
      minutes: Math.floor((t % h) / m) + 1,
      hours: Math.floor((t % d) / h),
      days: Math.floor(t / d)
    });
  };

  useEffect(() => {
    const i = setInterval(() => {
      if (t > 0) {
        countdown();
      }
    });

    return () => clearInterval(i);
  });

  return (
    <>
    {t > 1000 ? (
      <div className="countdown-container">
        <div className="video-bg">
            {/* https://youtu.be/2Gg6Seob5Mg */}
            <video src="./videos/countdown-bg.mp4" autoPlay loop muted></video>
        </div>

        <div className="countdown-timer">
          <img src={`./images/${params.location}-logo.png`} alt="logo" />

          <h1>Countdown to {new Date().getFullYear() + 1}</h1>

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
    ) : (
      <BallDrop location={params.location} />
    )}
    </>
  );
}
  