import React from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// トップページコンポーネント
function HomePage({ presentations }) {
  const { currentTheme } = useTheme();

  return (
    <div className={`home-container ${currentTheme}`}>
      {/* SEO対策のためのReact Helmet */}
      <Helmet>
        <title>吉田丈治 | 株式会社リバネス取締役CIO・リバネスナレッジ代表取締役社長</title>
        <meta name="description" content="吉田丈治のプロフィールページ。株式会社リバネス取締役CIO、株式会社リバネスナレッジ代表取締役社長。Slack導入による組織カルチャー変革支援とChatGPT Enterpriseの導入による生成AI活用を専門とし、テクノロジーと社会の未来に関するプレゼンテーション資料を公開。" />
      </Helmet>

      <main>
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src="/images/yoshida_profile.jpg" 
              alt="吉田丈治のプロフィール写真" 
              className="profile-image"
              loading="eager"
            />
          </div>
          <div className="profile-content">
            <h1 className="profile-name">吉田丈治 / YOSHIDA George</h1>
            
            <div className="profile-affiliations">
              <div className="affiliation">
                <div className="affiliation-header">
                  <img src="/images/leaveanest_logo.png" alt="株式会社リバネスのロゴ" className="company-logo" loading="lazy" />
                  <h2>株式会社リバネス</h2>
                </div>
                <p>取締役CIO</p>
              </div>
              <div className="affiliation">
                <div className="affiliation-header">
                  <img src="/images/lnest_knowledge_logo.png" alt="株式会社リバネスナレッジのロゴ" className="company-logo" loading="lazy" />
                  <h2>株式会社リバネスナレッジ</h2>
                </div>
                <p>代表取締役社長</p>
              </div>
            </div>
            
            <div className="profile-highlights">
              <h2 className="highlights-title">専門分野・活動領域</h2>
              <ul className="highlights-list">
                <li><strong>Slack導入による組織カルチャー変革支援</strong></li>
                <li><strong>ChatGPT Enterpriseの導入による生成AI活用</strong></li>
                <li>テクノロジーと社会の未来研究</li>
                <li>デジタルトランスフォーメーション推進</li>
              </ul>
            </div>
            
            <div className="social-links">
              <a href="https://x.com/geeorgey" target="_blank" rel="noopener noreferrer" className="social-link x-link" aria-label="X（旧Twitter）プロフィール">
                <span className="social-icon">𝕏</span>
                <span className="social-name">X</span>
              </a>
              <a href="https://www.facebook.com/GeorgeYoshida/" target="_blank" rel="noopener noreferrer" className="social-link fb-link" aria-label="Facebookプロフィール">
                <span className="social-icon">f</span>
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/geeorgey/" target="_blank" rel="noopener noreferrer" className="social-link li-link" aria-label="LinkedInプロフィール">
                <span className="social-icon">in</span>
                <span className="social-name">LinkedIn</span>
              </a>
              <a href="https://note.com/geeorgey" target="_blank" rel="noopener noreferrer" className="social-link note-link" aria-label="noteブログ">
                <span className="social-icon">N</span>
                <span className="social-name">note</span>
              </a>
              <a href="https://lne.st/k" target="_blank" rel="noopener noreferrer" className="social-link archive-link" aria-label="プレゼン資料まとめ">
                <span className="social-icon">📚</span>
                <span className="social-name">プレゼン資料まとめ</span>
              </a>
            </div>
          </div>
        </div>

        <section className="news-section">
          <h2>最新プレスリリース</h2>
          <div className="news-grid">
            <article className="news-card">
              <h3>リバネス、OpenAIとパートナーシップを締結</h3>
              <p className="news-date">2025年5月16日</p>
              <p className="news-description">企業向けChatGPT Enterprise導入支援を強化し、日本企業の生成AI活用を促進</p>
              <a href="https://lne.st/2025/05/16/lnest-openai/" target="_blank" rel="noopener noreferrer" className="read-more-button">
                詳細を読む
              </a>
            </article>
            <article className="news-card">
              <h3>リバネスナレッジ、Salesforce Japan Partner Award 2025を受賞</h3>
              <p className="news-date">2025年4月10日</p>
              <p className="news-description">Slack導入による組織カルチャー変革支援が評価され、イノベーション部門で最優秀賞</p>
              <a href="https://k.lne.st/2025/04/10/salesforce-japan-partner-award-2025/" target="_blank" rel="noopener noreferrer" className="read-more-button">
                詳細を読む
              </a>
            </article>
          </div>
        </section>

        <div className="dreamforce-highlight">
          <div className="dreamforce-image">
            <img src="/images/dreamforce_2019.png" alt="2019年Dreamforceカンファレンスでの吉田丈治の登壇写真" loading="lazy" />
          </div>
          <div className="dreamforce-content">
            <h2>2019年 Dreamforce 登壇</h2>
            <p>テクノロジーの未来と社会変革についての講演。AIとヒューマンインテリジェンスの共創をテーマに、未来の働き方について議論しました。</p>
          </div>
        </div>

        <section className="presentations-section" id="presentations">
          <h2>プレゼンテーション一覧</h2>
          <div className="presentations-grid">
            {presentations.map(presentation => (
              <article key={presentation.id} className={`presentation-card ${presentation.theme}`}>
                <h3>{presentation.title}</h3>
                <p className="presentation-date">{presentation.date}</p>
                <p className="presentation-description">{presentation.description}</p>
                <Link to={`/presentations/${presentation.id}`} className="view-button" aria-label={`${presentation.title}のプレゼンテーションを見る`}>
                  プレゼンテーションを見る
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 吉田丈治 | <a href="https://lne.st/" target="_blank" rel="noopener noreferrer">株式会社リバネス</a> | <a href="https://k.lne.st/" target="_blank" rel="noopener noreferrer">株式会社リバネスナレッジ</a></p>
      </footer>
    </div>
  );
}

export default HomePage;
