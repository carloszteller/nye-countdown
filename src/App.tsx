import { HashRouter, Routes, Route } from "react-router-dom";
import Countdown from './components/Countdown';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/:location" element={<Countdown />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
