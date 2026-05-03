import React from 'react';
import { IconBrain, IconCode, IconServer, IconDatabase, IconLock, IconKey, IconStar } from './Icones';
import './CardTrilha.css';

const iconMap = {
  brain: IconBrain,
  code: IconCode,
  server: IconServer,
  database: IconDatabase,
};

const colorMap = {
  cyan: { accent: 'var(--cyan)', glow: 'var(--glow-cyan)', bg: 'rgba(0, 229, 255, 0.06)' },
  purple: { accent: 'var(--purple)', glow: 'var(--glow-purple)', bg: 'rgba(124, 77, 255, 0.06)' },
  green: { accent: 'var(--green)', glow: 'var(--glow-green)', bg: 'rgba(0, 230, 118, 0.06)' },
  amber: { accent: 'var(--amber)', glow: '0 0 20px rgba(255, 171, 0, 0.2)', bg: 'rgba(255, 171, 0, 0.06)' },
};

const TrackCard = ({ 
  title, subtitle, description, icon, level, levelName, nextUnlock, xpNeeded,
  progress, totalChallenges, status, color, unlockRequirement, index, onClick 
}) => {
  const isLocked = status === 'locked';
  const palette = colorMap[color] || colorMap.cyan;
  const delay = index * 80;
  const IconComponent = iconMap[icon] || IconBrain;

  return (
    <div
      className={`track-card glass-panel ${status}`}
      style={{
        '--card-accent': palette.accent,
        '--card-glow': palette.glow,
        '--card-bg-tint': palette.bg,
        animationDelay: `${delay + 300}ms`,
      }}
      onClick={!isLocked ? onClick : undefined}
    >
      {/* Top row: icon + badge */}
      <div className="card-top">
        <div className="card-icon">
          <IconComponent size={24} color={isLocked ? 'var(--text-40)' : palette.accent} />
        </div>
        <div className="card-badge">
          {isLocked ? (
            <span className="badge-locked">
              <IconLock size={12} color="var(--text-40)" />
              <span>Bloqueada</span>
            </span>
          ) : (
            <span className="badge-level">LEVEL {level} — {levelName}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="card-body">
        <span className="card-subtitle">{subtitle}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        
        {!isLocked && (
          <div className="card-quest-info">
            <div className="quest-item">
              <span className="quest-label">🔓 PRÓXIMO DESBLOQUEIO</span>
              <span className="quest-value">{nextUnlock}</span>
            </div>
            <div className="quest-item">
              <span className="quest-label">⚡ XP NECESSÁRIO</span>
              <span className="quest-value">{xpNeeded} XP</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="card-footer">
        {!isLocked ? (
          <>
            <div className="card-progress">
              <div className="progress-info">
                <span>{progress}% Concluído</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <button className="card-action-btn">
              <span>Entrar na trilha</span>
              <span className="action-arrow">→</span>
            </button>
          </>
        ) : (
          <div className="unlock-hint">
            <IconKey size={14} color="var(--text-40)" />
            <span>Requer: {unlockRequirement}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackCard;
