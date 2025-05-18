import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// テーマコンテキストを作成
const ThemeContext = React.createContext({
  currentTheme: 'default',
  setTheme: () => {}
});

// テーマプロバイダーコンポーネント
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState('default');
  const location = useLocation();

  // URLパスに基づいてテーマを設定
  useEffect(() => {
    const path = location.pathname;
    
    // プレゼンテーションのパスに基づいてテーマを設定
    if (path.includes('/presentations/ai-work-2030')) {
      setCurrentTheme('future-tech');
    } else if (path === '/') {
      setCurrentTheme('default');
    }
    // 今後、新しいプレゼンテーションのテーマをここに追加
  }, [location]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// テーマフックを作成
export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;
