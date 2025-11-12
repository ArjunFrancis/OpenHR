import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🚀 OpenHR</h1>
        <p className="tagline">Find Your Perfect Co-Founder</p>
        <p className="description">
          Open source talent matching platform connecting founders and developers. 
          Match based on skills, interests, and vision.
        </p>
        
        <div className="cta-buttons">
          <Link to="/founder-mode" className="btn btn-primary">
            Enter Founder Mode
          </Link>
          <Link to="/find-the-one" className="btn btn-secondary">
            Find The One
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>🎯 Smart Matching</h3>
          <p>AI-powered algorithm finds your perfect co-founder match</p>
        </div>
        <div className="feature">
          <h3>💼 Skills-Based</h3>
          <p>Connect based on technical expertise and shared interests</p>
        </div>
        <div className="feature">
          <h3>🌍 Open Source</h3>
          <p>Fully transparent, community-driven platform</p>
        </div>
      </div>

      <div className="video-demo">
        <h2>See How It Works</h2>
        <div className="video-placeholder">
          <div className="play-button">▶</div>
          <p>Demo video coming soon</p>
        </div>
      </div>

      <div className="community-section">
        <h2>Join Our Community</h2>
        <div className="community-links">
          <a href="mailto:hello@openhr.dev" className="community-btn">
            📧 Email
          </a>
          <a href="#" className="community-btn">
            📝 Substack
          </a>
          <a href="#" className="community-btn">
            💼 LinkedIn
          </a>
          <a href="#" className="community-btn">
            �� Slack
          </a>
          <a href="#" className="community-btn">
            👨‍💻 Dev Communities
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
