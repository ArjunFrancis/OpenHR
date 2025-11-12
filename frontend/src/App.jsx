import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import Matches from './pages/Matches';
import ProfileForm from './components/ProfileForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">
              <span className="logo-icon">🚀</span>
              <span className="logo-text">OpenHR</span>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/find-the-one" className="nav-link">
              🔍 Find The One
            </Link>
            <Link to="/founder-mode" className="nav-link">
              👤 Founder Mode
            </Link>
            <Link to="/matches" className="nav-link">
              🎯 Matches
            </Link>
            <a 
              href="https://github.com/ArjunFrancis/OpenHR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link github-link"
            >
              💻 GitHub
            </a>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-the-one" element={<Profiles />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/founder-mode" element={<ProfileForm />} />
            <Route path="/create-profile" element={<ProfileForm />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 OpenHR - Find Your Perfect Co-Founder</p>
            <div className="footer-links">
              <a href="https://github.com/ArjunFrancis/OpenHR" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span>•</span>
              <a href="#">Community</a>
              <span>•</span>
              <a href="#">About</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
