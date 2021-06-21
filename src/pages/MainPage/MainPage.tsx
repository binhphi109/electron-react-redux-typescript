import React from 'react';
import { useTranslation } from 'react-i18next';
import Counter from '../../components/Counter/Counter';
import { useTheme } from '../../hooks/useTheme';
import './MainPage.scss';

function MainPage() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div className="App">
      <header className="App-header">
        {t('home.title')}
        
        <Counter />
        <div>
          {'Theme: ' + theme}
          <div onClick={() => setTheme('light')}>Set Light Theme</div>
          <div onClick={() => setTheme('dark')}>Set Dark Theme</div>
        </div>
        <div>
          {'Language: ' + i18n.language}
          <div onClick={() => changeLocale('vi')}>Set Vi</div>
          <div onClick={() => changeLocale('en')}>Set En</div>
        </div>
      </header>
    </div>
  );
}

export default MainPage;
