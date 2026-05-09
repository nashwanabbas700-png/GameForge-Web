import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Upload from './pages/Upload';
import AITools from './pages/AITools';
import Profile from './pages/Profile';
import Competitions from './pages/Competitions';
import Login from './pages/Login';
import GameDetails from './pages/GameDetails';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#14151f] text-white font-body">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
