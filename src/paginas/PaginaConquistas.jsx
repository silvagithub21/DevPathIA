import React from 'react';
import { IconTrophy, IconZap, IconFire, IconTarget, IconStar, IconCheck, IconArrowLeft, IconBrain, IconLock } from '../componentes/Icones';
import './PaginaConquistas.css';

const AchievementsPage = ({ user, onBack }) => {
  const achievements = [
    {
      id: 'first_step',
      title: 'Primeiro Passo',
      description: 'Concluiu seu primeiro desafio no DevPath AI.',
      icon: IconTarget,
      color: 'var(--cyan)',
      unlocked: user?.completedChallenges?.length > 0
    },
    {
      id: 'fast_learner',
      title: 'Aprendiz Ágil',
      description: 'Chegou ao nível 5 em qualquer trilha.',
      icon: IconZap,
      color: 'var(--amber)',
      unlocked: user?.xp >= 2500
    },
    {
      id: 'on_fire',
      title: 'Em Chamas',
      description: 'Manteve um streak de 3 dias seguidos.',
      icon: IconFire,
      color: 'var(--red)',
      unlocked: user?.streak >= 3
    },
    {
      id: 'logic_master',
      title: 'Mestre da Lógica',
      description: 'Concluiu todos os desafios da trilha Logic Engine.',
      icon: IconBrain,
      color: 'var(--purple)',
      unlocked: user?.completedChallenges?.filter(c => c.startsWith('L')).length >= 90
    },
    {
      id: 'perfect_score',
      title: 'Pontuação Perfeita',
      description: 'Acertou 10 questões seguidas sem errar.',
      icon: IconStar,
      color: 'var(--green)',
      unlocked: false
    }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="achievements-page">
      <div className="achievements-header">
        <button className="back-btn" onClick={onBack}>
          <IconArrowLeft size={18} />
          <span>Voltar</span>
        </button>
        <h1>Conquistas</h1>
      </div>

      <div className="achievements-summary glass-panel">
        <div className="summary-top">
          <div className="summary-info">
            <span className="summary-label">Conquistas Desbloqueadas</span>
            <span className="summary-value">{unlockedCount} de {achievements.length}</span>
          </div>
          <IconTrophy size={48} color="var(--amber)" />
        </div>
        <div className="summary-progress">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}></div>
          </div>
        </div>
      </div>

      <div className="achievements-grid">
        {achievements.map((ach, i) => (
          <div 
            key={ach.id} 
            className={`achievement-card glass-panel ${ach.unlocked ? 'unlocked' : 'locked'}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="achievement-icon-wrap" style={{ '--ach-color': ach.color }}>
              <ach.icon size={32} />
              {ach.unlocked && <div className="check-badge"><IconCheck size={10} /></div>}
            </div>
            <div className="achievement-content">
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
            </div>
            {!ach.unlocked && <div className="lock-overlay"><IconLock size={24} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

// Brain icon not imported in this specific file but used in logic_master


export default AchievementsPage;
