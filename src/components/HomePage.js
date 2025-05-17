import React from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';

// トップページコンポーネント
function HomePage({ presentations }) {
  const { currentTheme } = useTheme();

  return (
    <div className={`home-container ${currentTheme}`}>
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src="https://lne.st/wp-content/uploads/2025/05/78626087_10221322607716697_5436811581734256640_n-9.jpg" 
            alt="吉田丈治" 
            className="profile-image"
          />
        </div>
        <div className="profile-content">
          <h1 className="profile-name">吉田丈治 / YOSHIDA George</h1>
          
          <div className="profile-affiliations">
            <div className="affiliation">
              <h3>株式会社リバネス</h3>
              <p>取締役CIO</p>
            </div>
            <div className="affiliation">
              <h3>株式会社リバネスナレッジ</h3>
              <p>代表取締役社長</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://x.com/geeorgey" target="_blank" rel="noopener noreferrer" className="social-link x-link">
              <span className="social-icon">𝕏</span>
              <span className="social-name">X</span>
            </a>
            <a href="https://www.facebook.com/GeorgeYoshida/" target="_blank" rel="noopener noreferrer" className="social-link fb-link">
              <span className="social-icon">f</span>
              <span className="social-name">Facebook</span>
            </a>
            <a href="https://www.linkedin.com/in/geeorgey/" target="_blank" rel="noopener noreferrer" className="social-link li-link">
              <span className="social-icon">in</span>
              <span className="social-name">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <section className="presentations-section">
        <h2>プレゼンテーション一覧</h2>
        <div className="presentations-grid">
          {presentations.map(presentation => (
            <div key={presentation.id} className={`presentation-card ${presentation.theme}`}>
              <h3>{presentation.title}</h3>
              <p className="presentation-date">{presentation.date}</p>
              <p className="presentation-description">{presentation.description}</p>
              <Link to={`/presentations/${presentation.id}`} className="view-button">
                プレゼンテーションを見る
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 吉田丈治</p>
      </footer>
    </div>
  );
}

export default HomePage;
