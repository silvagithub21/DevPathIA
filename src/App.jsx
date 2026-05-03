import React, { useState, useEffect } from 'react';
import AuthScreen from './paginas/TelaLogin';
import Dashboard from './paginas/Painel';
import ChallengeScreen from './paginas/TelaDesafio';
import LanguageSelector from './paginas/SeletorTrilha';
import ProgressPage from './paginas/PaginaProgresso';
import AchievementsPage from './paginas/PaginaConquistas';
import SettingsPage from './paginas/PaginaConfiguracoes';
import { allChallenges } from './dados/todosDesafios';

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('auth');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  // Load session on mount
  useEffect(() => {
    const session = localStorage.getItem('devpath_session');
    if (session) {
      try {
        const parsed = JSON.parse(session);
        setUser(parsed);
        setCurrentPage('dashboard');
      } catch {
        localStorage.removeItem('devpath_session');
      }
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('devpath_session');
    setUser(null);
    setCurrentPage('auth');
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('devpath_session', JSON.stringify(updatedUser));
    
    // Update users list
    const users = JSON.parse(localStorage.getItem('devpath_users') || '[]');
    const idx = users.findIndex(u => u.id === updatedUser.id);
    if (idx !== -1) {
      users[idx] = updatedUser;
      localStorage.setItem('devpath_users', JSON.stringify(users));
    }
  };

  const handleStartTrack = (langId) => {
    setSelectedLanguage(langId);
    setCurrentChallengeIndex(0);
    setCurrentPage('challenge');
  };

  const handleChallengeComplete = () => {
    const challenges = allChallenges[selectedLanguage] || [];
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(prev => prev + 1);
    } else {
      // Track finished
      if (user) {
        const updatedUser = { 
          ...user, 
          xp: (user.xp || 0) + 1000,
          completedChallenges: [...(user.completedChallenges || []), `${selectedLanguage}_FINISH`]
        };
        handleUpdateUser(updatedUser);
      }
      setCurrentPage('dashboard');
    }
  };

  // Sidebar navigation handlers
  const navigateTo = (page) => setCurrentPage(page);

  const getActiveChallenges = () => allChallenges[selectedLanguage] || [];

  return (
    <div className="app-wrapper">
      {currentPage === 'auth' && (
        <AuthScreen onLogin={handleLogin} />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard
          user={user}
          currentPage={currentPage}
          onLogout={handleLogout}
          onStartTrack={() => navigateTo('language-selector')}
          onNavigate={navigateTo}
        />
      )}

      {currentPage === 'language-selector' && (
        <LanguageSelector 
          onSelect={handleStartTrack} 
          onBack={() => navigateTo('dashboard')}
        />
      )}

      {currentPage === 'challenge' && (
        <ChallengeScreen
          challenge={getActiveChallenges()[currentChallengeIndex]}
          challengeIndex={currentChallengeIndex}
          totalChallenges={getActiveChallenges().length}
          onComplete={handleChallengeComplete}
          onExit={() => setCurrentPage('dashboard')}
        />
      )}

      {currentPage === 'progress' && (
        <ProgressPage user={user} onBack={() => navigateTo('dashboard')} />
      )}

      {currentPage === 'achievements' && (
        <AchievementsPage user={user} onBack={() => navigateTo('dashboard')} />
      )}

      {currentPage === 'settings' && (
        <SettingsPage 
          user={user} 
          onUpdateUser={handleUpdateUser} 
          onBack={() => navigateTo('dashboard')} 
        />
      )}
    </div>
  );
}

export default App;
