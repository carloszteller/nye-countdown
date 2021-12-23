import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import BallDrop from "./components/BallDrop";
import Fireworks from "./components/Fireworks";
import "./App.scss";

export default function App() {
  const [timer, setTimer] = useState({
    seconds: 60,
    minutes: 60,
    hours: 24,
    days: 365
  });

  const currentDate: any = new Date();
  const newYear: any = new Date(2022, 0, 1, 0, 0, 0, 0);

  const t = newYear - currentDate;

  const countdown = () => {
    const s: number = 1000;
    const m: number = 60 * s;
    const h: number = 60 * m;
    const d: number = 24 * h;

    setTimer({
      seconds: Math.floor((t % m) / s),
      minutes: Math.floor((t % h) / m),
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
    <div className="App">
      {t >= 61000 ? (
        <Countdown timer={timer} />
      ) : (
        <>{t >= 1000 ? <BallDrop timer={timer} /> : <Fireworks />}</>
      )}
    </div>
  );
}
