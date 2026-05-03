import React from 'react';
import TrackCard from '../componentes/CardTrilha';
import { IconHome, IconChart, IconTrophy, IconSettings, IconZap, IconFire, IconTarget, IconLogout } from '../componentes/Icones';
import './Painel.css';

const tracks = [
  {
    id: 'logic',
    title: 'Logic Engine',
    subtitle: 'Base Universal',
    description: 'O núcleo de tudo. Variáveis, loops e a arte de resolver problemas.',
    icon: 'brain',
    level: 1,
    levelName: 'Iniciante',
    nextUnlock: 'Funções',
    xpNeeded: 200,
    progress: 0,
    totalChallenges: 90,
    status: 'active',
    color: 'cyan'
  },
  {
    id: 'javascript',
    title: 'JavaScript Nexus',
    subtitle: 'Web Interface',
    description: 'Domine a linguagem que move a web moderna e interfaces dinâmicas.',
    icon: 'code',
    level: 1,
    levelName: 'Padawan',
    nextUnlock: 'DOM Mastery',
    xpNeeded: 500,
    progress: 0,
    totalChallenges: 90,
    status: 'active',
    color: 'purple'
  },
  {
    id: 'python',
    title: 'Python Core',
    subtitle: 'Automation',
    description: 'Simplicidade e poder para scripts, dados e automação inteligente.',
    icon: 'zap',
    level: 1,
    levelName: 'Coder',
    nextUnlock: 'Data Science',
    xpNeeded: 450,
    progress: 0,
    totalChallenges: 90,
    status: 'active',
    color: 'amber'
  },
  {
    id: 'sql',
    title: 'SQL Forge',
    subtitle: 'Data Alchemy',
    description: 'Domine SQL e aprenda a conversar com os dados do mundo digital.',
    icon: 'database',
    level: 1,
    levelName: 'Scryer',
    nextUnlock: 'Joins Complexos',
    xpNeeded: 300,
    progress: 0,
    totalChallenges: 90,
    status: 'active',
    color: 'green'
  }
];

const Dashboard = ({ onStartTrack, user, onLogout, onNavigate, currentPage }) => {
  const xp = user?.xp || 0;
  const playerLevel = Math.floor(xp / 1000) + 1;
  const levelProgress = (xp % 1000) / 10;
  const rank = user?.rank || 'Recruit';
  const streak = user?.streak || 0;
  const displayName = user?.name || 'Dev';
  const initials = displayName.charAt(0).toUpperCase();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <div className="sidebar-logo">
          <div className="logo-icon active-glow">
            <span className="logo-chevron">&lt;</span>
            <span className="logo-slash">/</span>
            <span className="logo-chevron">&gt;</span>
          </div>
          <h1 className="logo-text">
            DEVPATH <span className="text-gradient-cyan">AI</span>
          </h1>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`} 
            onClick={() => onNavigate('dashboard')}
          >
            <span className="nav-icon"><IconHome size={20} /></span>
            <span>Início</span>
          </button>
          <button 
            className={`nav-item ${currentPage === 'progress' ? 'active' : ''}`} 
            onClick={() => onNavigate('progress')}
          >
            <span className="nav-icon"><IconChart size={20} /></span>
            <span>Progresso</span>
          </button>
          <button 
            className={`nav-item ${currentPage === 'achievements' ? 'active' : ''}`} 
            onClick={() => onNavigate('achievements')}
          >
            <span className="nav-icon"><IconTrophy size={20} /></span>
            <span>Conquistas</span>
          </button>
          <button 
            className={`nav-item ${currentPage === 'settings' ? 'active' : ''}`} 
            onClick={() => onNavigate('settings')}
          >
            <span className="nav-icon"><IconSettings size={20} /></span>
            <span>Configurações</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-card glass-panel">
            <div className="user-avatar">{initials}</div>
            <div className="user-info">
              <span className="user-name">{displayName}</span>
              <span className="user-rank">{rank}</span>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <IconLogout size={16} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Top bar with stats */}
        <header className="top-bar">
          <div className="greeting-section">
            <p className="greeting-label">{getGreeting()}, {displayName}</p>
            <h2 className="greeting-title">Sua Missão Atual</h2>
          </div>

          <div className="stats-bar">
            <div className="stat-chip glass-panel xp-stat">
              <span className="stat-icon-svg"><IconZap size={20} color="var(--amber)" /></span>
              <div className="stat-data">
                <div className="stat-value-group">
                  <span className="stat-number">{xp.toLocaleString()}</span>
                  <span className="player-lv">LV. {playerLevel}</span>
                </div>
                <div className="level-mini-bar">
                  <div className="level-mini-fill" style={{ width: `${levelProgress}%` }}></div>
                </div>
                <span className="stat-label">Progresso do Nível</span>
              </div>
            </div>
            <div className="stat-chip glass-panel">
              <span className="stat-icon-svg"><IconFire size={20} color="var(--red)" /></span>
              <div className="stat-data">
                <span className="stat-number">{streak} dias</span>
                <span className="stat-label">Streak</span>
              </div>
            </div>
            <div className="stat-chip glass-panel">
              <span className="stat-icon-svg"><IconTarget size={20} color="var(--cyan)" /></span>
              <div className="stat-data">
                <span className="stat-number">1 / 4</span>
                <span className="stat-label">Trilhas</span>
              </div>
            </div>
          </div>
        </header>

        {/* Quick resume card */}
        <section className="resume-banner">
          <div className="resume-content">
            <div className="resume-badge">CONTINUAR APRENDENDO</div>
            <h3 className="resume-title">Logic Engine — Variáveis</h3>
            <p className="resume-desc">Continue de onde parou e ganhe XP!</p>
            <div className="resume-progress-track">
              <div className="resume-progress-fill" style={{ width: '8%' }}></div>
            </div>
          </div>
          <button className="resume-btn" onClick={() => onStartTrack('logic')}>
            <span>Continuar</span>
            <span className="btn-arrow">→</span>
          </button>
        </section>

        {/* Tracks grid */}
        <section className="tracks-section">
          <div className="section-header">
            <h3 className="section-title">Trilhas Disponíveis</h3>
            <span className="section-count">{tracks.length} trilhas</span>
          </div>

          <div className="tracks-grid">
            {tracks.map((track, index) => (
              <TrackCard
                key={track.id}
                {...track}
                index={index}
                onClick={() => onStartTrack(track.id)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
