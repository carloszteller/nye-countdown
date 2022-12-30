type Location = {
  location: string | undefined
}

export default function Fireworks({ location }: Location) {
  return (
    <div className="fireworks-container">
      <div className="video-bg">
        {/* https://youtu.be/XjijSgMbPPE */}
        <video src="./videos/fireworks-bg.mp4" autoPlay loop muted></video>
      </div>

      <div className="new-year-content">
        <h1 className="hne">Happy New Year!</h1>
        <h1>From everyone at</h1>

        <img src={`./images/${location}-logo.png`} alt="logo" style={location === 'fuel-bar' ? { width : '30%' } : {}} />
      </div>
    </div>
  );
}
  