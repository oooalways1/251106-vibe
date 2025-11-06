import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useGameStore } from './store/useGameStore';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import PracticeMode from './pages/PracticeMode';
import GamePlay from './pages/GamePlay';
import Results from './pages/Results';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import Achievements from './pages/Achievements';
import WrongAnswers from './pages/WrongAnswers';

function App() {
  const profile = useGameStore((state) => state.profile);

  return (
    <Router basename="/251106-vibe">
      <Routes>
        <Route path="/" element={profile ? <Navigate to="/home" /> : <Welcome />} />
        <Route path="/home" element={profile ? <Home /> : <Navigate to="/" />} />
        <Route path="/practice" element={profile ? <PracticeMode /> : <Navigate to="/" />} />
        <Route path="/game" element={profile ? <GamePlay /> : <Navigate to="/" />} />
        <Route path="/results" element={profile ? <Results /> : <Navigate to="/" />} />
        <Route path="/dashboard" element={profile ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/shop" element={profile ? <Shop /> : <Navigate to="/" />} />
        <Route path="/achievements" element={profile ? <Achievements /> : <Navigate to="/" />} />
        <Route path="/wrong-answers" element={profile ? <WrongAnswers /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
