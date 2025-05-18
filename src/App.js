import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import './App.css';

// プレゼンテーションのインポート
import AIWork2030 from './presentations/ai-work-2030';
import HomePage from './components/HomePage';

function App() {
  // プレゼンテーションのリスト
  const presentations = [
    {
      id: 'ai-work-2030',
      title: '生成AIと人類の働き方2030年',
      description: 'テクノロジーが変える未来の労働環境について考察するプレゼンテーション',
      date: '2025年5月',
      theme: 'future-tech'
    },
    // 今後、新しいプレゼンテーションがここに追加される
  ];

  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage presentations={presentations} />} />
          <Route path="/presentations/ai-work-2030" element={<AIWork2030 />} />
          {/* 今後、新しいプレゼンテーションのルートがここに追加される */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
