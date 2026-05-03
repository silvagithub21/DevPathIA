import React from 'react';
import { IconBrain, IconCode, IconServer, IconDatabase, IconZap, IconFire, IconTarget, IconArrowRight } from '../componentes/Icones';
import './SeletorTrilha.css';

const languages = [
  {
    id: 'logic',
    title: 'Motor de Lógica',
    subtitle: 'Fundamentos de Programação',
    description: 'A base universal para qualquer programador. Variáveis, Loops, Condicionais e Funções.',
    icon: IconBrain,
    color: 'var(--cyan)',
    qCount: 90,
    type: 'core'
  },
  {
    id: 'javascript',
    title: 'Nexus JavaScript',
    subtitle: 'Web & Fullstack',
    description: 'Domine a linguagem da web. Do DOM básico ao Async/Await avançado.',
    icon: IconCode,
    color: 'var(--purple)',
    qCount: 90,
    type: 'core'
  },
  {
    id: 'python',
    title: 'Núcleo Python',
    subtitle: 'Dados & Automação',
    description: 'Aprenda a linguagem mais versátil do mundo. Scripts, Dados e Backend.',
    icon: IconZap,
    color: 'var(--amber)',
    qCount: 90,
    type: 'core'
  },
  {
    id: 'sql',
    title: 'Forja SQL',
    subtitle: 'Alquimia de Dados',
    description: 'Aprenda a consultar e gerenciar grandes volumes de dados profissionalmente.',
    icon: IconDatabase,
    color: 'var(--green)',
    qCount: 90,
    type: 'core'
  },
  {
    id: 'java',
    title: 'Reino Java',
    subtitle: 'Backend & Android',
    description: 'Orientação a objetos pura e sistemas robustos de larga escala.',
    icon: IconServer,
    color: 'var(--red)',
    qCount: 90,
    type: 'extra'
  },
  {
    id: 'csharp',
    title: 'Arena C#',
    subtitle: 'Games & Windows',
    description: 'Evolua com .NET e Unity para criar apps e jogos de alta performance.',
    icon: IconTarget,
    color: 'var(--cyan-muted)',
    qCount: 90,
    type: 'extra'
  }
];

const LanguageSelector = ({ onSelect }) => {
  return (
    <div className="selector-page">
      <div className="selector-header">
        <span className="selector-badge">LIVRE ARBÍTRIO</span>
        <h1>Escolha sua <span className="text-gradient-cyan">Trilha</span></h1>
        <p>Selecione uma linguagem para começar sua jornada educativa de 90 desafios.</p>
      </div>

      <div className="selector-grid">
        {languages.map((lang, index) => (
          <div 
            key={lang.id} 
            className={`lang-card glass-panel ${lang.type}`}
            style={{ '--lang-color': lang.color, animationDelay: `${index * 100}ms` }}
            onClick={() => onSelect(lang.id)}
          >
            <div className="lang-icon-wrap">
              <lang.icon size={32} color={lang.color} />
            </div>
            <div className="lang-body">
              <span className="lang-subtitle">{lang.subtitle}</span>
              <h3 className="lang-title">{lang.title}</h3>
              <p className="lang-desc">{lang.description}</p>
            </div>
            <div className="lang-footer">
              <div className="lang-stats">
                <IconFire size={14} color="var(--text-40)" />
                <span>{lang.qCount} Questões</span>
              </div>
              <div className="lang-action">
                <span>Começar</span>
                <IconArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
