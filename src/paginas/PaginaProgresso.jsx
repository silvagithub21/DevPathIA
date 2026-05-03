import React from 'react';
import { IconChart, IconZap, IconFire, IconTarget, IconArrowLeft } from '../componentes/Icones';
import './PaginaProgresso.css';

const ProgressPage = ({ user, onBack }) => {
  const stats = [
    { label: 'Total XP', value: user?.xp || 0, icon: IconZap, color: 'var(--amber)' },
    { label: 'Streak Atual', value: `${user?.streak || 0} dias`, icon: IconFire, color: 'var(--red)' },
    { label: 'Desafios', value: user?.completedChallenges?.length || 0, icon: IconTarget, color: 'var(--cyan)' },
  ];

  // Dummy chart data - in a real app this would come from user history
  const chartData = [
    { day: 'Seg', xp: 120 },
    { day: 'Ter', xp: 450 },
    { day: 'Qua', xp: 300 },
    { day: 'Qui', xp: 800 },
    { day: 'Sex', xp: 200 },
    { day: 'Sáb', xp: 600 },
    { day: 'Dom', xp: 150 },
  ];

  const maxXP = Math.max(...chartData.map(d => d.xp));

  return (
    <div className="progress-page">
      <div className="progress-header">
        <button className="back-btn" onClick={onBack}>
          <IconArrowLeft size={18} />
          <span>Voltar</span>
        </button>
        <h1>Seu Progresso</h1>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card glass-panel" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="stat-icon-circle" style={{ background: `rgba(${stat.color}, 0.1)`, color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="chart-section glass-panel">
        <div className="chart-header">
          <h3>Atividade Semanal (XP)</h3>
          <IconChart size={18} color="var(--text-40)" />
        </div>
        <div className="chart-body">
          {chartData.map((data, i) => (
            <div key={i} className="chart-column">
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{ 
                    height: `${(data.xp / maxXP) * 100}%`,
                    animationDelay: `${i * 100 + 400}ms`
                  }}
                >
                  <span className="bar-tooltip">{data.xp} XP</span>
                </div>
              </div>
              <span className="day-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="history-section glass-panel">
        <h3>Histórico Recente</h3>
        <div className="history-list">
          {user?.completedChallenges?.length > 0 ? (
            user.completedChallenges.slice(-5).reverse().map((c, i) => (
              <div key={i} className="history-item">
                <div className="history-dot"></div>
                <span className="history-text">Concluiu desafio <strong>#{c}</strong></span>
                <span className="history-time">Há 2 horas</span>
              </div>
            ))
          ) : (
            <p className="empty-msg">Nenhum desafio concluído ainda. Comece a aprender!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
