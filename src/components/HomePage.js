import React from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';

// トップページコンポーネント
function HomePage({ presentations }) {
  const { currentTheme } = useTheme();

  return (
    <div className={`home-container ${currentTheme}`}>
      <header className="profile-section">
        <div className="profile-content">
          <h1>プレゼンテーションギャラリー</h1>
          <div className="profile-info">
            <h2>吉田丈治</h2>
            <p className="profile-title">
              株式会社リバネス 取締役CIO<br />
              株式会社リバネスナレッジ 代表取締役社長
            </p>
            <div className="social-links">
              <a href="https://x.com/geeorgey" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              <a href="https://Facebook.com/GeorgeYoshida" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://linkedin.com/in/geeorgey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://note.com/geeorgey" target="_blank" rel="noopener noreferrer">note</a>
              <a href="https://lne.st/k" target="_blank" rel="noopener noreferrer">プレゼン資料まとめ</a>
            </div>
          </div>
        </div>
      </header>

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
        <p>&copy; 2025 吉田丈治 プレゼンテーションギャラリー</p>
      </footer>
    </div>
  );
}

export default HomePage;
