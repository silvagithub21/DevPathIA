import React, { useState, useEffect } from 'react';
import { IconArrowLeft, IconBrain, IconCheck, IconX, IconStar, IconParty, IconLightbulb } from '../componentes/Icones';
import './TelaDesafio.css';

const ChallengeScreen = ({ challenge, challengeIndex, totalChallenges, onComplete, onExit }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const progress = totalChallenges > 0
    ? Math.round(((challengeIndex) / totalChallenges) * 100)
    : 0;

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setAnimateIn(false);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowHint(false);
    const timer = setTimeout(() => setAnimateIn(true), 50);
    return () => clearTimeout(timer);
  }, [challenge.id]);

  const handleCheck = () => {
    const correct = selectedOption === challenge.answer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (isCorrect) {
      onComplete();
    } else {
      setShowFeedback(false);
      setSelectedOption(null);
    }
  };

  const getDifficultyStars = (diff) => {
    return Array.from({ length: 3 }, (_, i) => (
      <span key={i} className="star-wrapper">
        <IconStar size={14} color={i < diff ? 'var(--amber)' : 'var(--text-20)'} filled={i < diff} />
      </span>
    ));
  };

  return (
    <div className="challenge-page theme-true-black">
      {/* Left panel */}
      <aside className="challenge-sidebar">
        <div className="sidebar-back" onClick={onExit}>
          <IconArrowLeft size={18} />
          <span>Voltar ao Hub</span>
        </div>

        <div className="sidebar-info">
          <div className="track-badge-lg">
            <IconBrain size={20} color="var(--cyan)" />
            <span>{challenge.track.toUpperCase()} Engine</span>
          </div>

          <div className="challenge-meta">
            <div className="meta-item">
              <span className="meta-label">Conceito</span>
              <span className="meta-value">{challenge.concept}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Dificuldade</span>
              <span className="meta-value stars">{getDifficultyStars(challenge.difficulty)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Desafio</span>
              <span className="meta-value">{challengeIndex + 1} de {totalChallenges}</span>
            </div>
          </div>
        </div>

        <div className="hint-container">
          {!showHint ? (
            <button className="hint-btn glass-panel" onClick={() => setShowHint(true)}>
              <IconLightbulb size={16} color="var(--amber)" />
              <span>Precisa de uma dica?</span>
            </button>
          ) : (
            <div className="hint-content glass-panel animate-in">
              <div className="hint-header">
                <IconLightbulb size={14} color="var(--amber)" />
                <span>Dica Educativa</span>
              </div>
              <p>{challenge.hint}</p>
            </div>
          )}
        </div>

        <div className="sidebar-progress">
          <div className="progress-label">
            <span>Progresso da Trilha</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-value" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </aside>

      {/* Right panel: main challenge */}
      <main className={`challenge-main ${animateIn ? 'visible' : ''}`}>
        {/* Progress dots */}
        <div className="progress-dots">
          {Array.from({ length: Math.min(totalChallenges, 20) }, (_, i) => (
            <div
              key={i}
              className={`dot ${i < challengeIndex ? 'completed' : ''} ${i === challengeIndex ? 'current' : ''}`}
            />
          ))}
          {totalChallenges > 20 && <span className="dots-more">+{totalChallenges - 20}</span>}
        </div>

        {/* Question */}
        <div className="question-area">
          <span className="question-number">Desafio {challengeIndex + 1}</span>
          <h2 className="question-text">{challenge.question}</h2>
        </div>

        {/* Options */}
        <div className="options-grid">
          {challenge.options.map((option, index) => {
            let optionState = '';
            if (showFeedback && option === challenge.answer) optionState = 'correct-reveal';
            else if (showFeedback && selectedOption === option && !isCorrect) optionState = 'incorrect-reveal';
            else if (selectedOption === option) optionState = 'selected';

            return (
              <button
                key={index}
                className={`option-btn glass-panel ${optionState}`}
                onClick={() => !showFeedback && setSelectedOption(option)}
                disabled={showFeedback}
                style={{ animationDelay: `${index * 60 + 100}ms` }}
              >
                <span className="option-key">{String.fromCharCode(65 + index)}</span>
                <span className="option-label">{option}</span>
                {showFeedback && option === challenge.answer && (
                  <span className="option-result"><IconCheck size={18} color="var(--green)" /></span>
                )}
                {showFeedback && selectedOption === option && !isCorrect && (
                  <span className="option-result"><IconX size={18} color="var(--red)" /></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`challenge-bottom ${showFeedback ? (isCorrect ? 'state-correct' : 'state-incorrect') : ''}`}>
          {!showFeedback ? (
            <button
              className="verify-btn"
              disabled={!selectedOption}
              onClick={handleCheck}
            >
              <span>Verificar Resposta</span>
            </button>
          ) : (
              <div className="feedback-panel animate-feedback">
                <div className="feedback-icon-wrap">
                  {isCorrect
                    ? <div className="xp-bubble">+50 XP</div>
                    : <IconLightbulb size={28} color="var(--red)" />
                  }
                </div>
                <div className="feedback-text">
                  <h4>{isCorrect ? '🎯 Precisão Máxima!' : 'Quase lá...'}</h4>
                  <p>{challenge.explanation}</p>
                </div>
                <button className="next-btn" onClick={handleContinue}>
                  {isCorrect ? 'Continuar Missão' : 'Revisar Conceito'}
                  <span className="next-arrow">→</span>
                </button>
              </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChallengeScreen;
