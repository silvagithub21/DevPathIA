import React, { useState } from 'react';
import { IconMail, IconLock, IconUser, IconEye, IconEyeOff, IconArrowRight } from '../componentes/Icones';
import './TelaLogin.css';

const AuthScreen = ({ onLogin }) => {
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError('Preencha todos os campos.');
      return;
    }

    if (form.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('devpath_users') || '[]');
    if (users.find(u => u.email === form.email)) {
      setError('Esse e-mail já está cadastrado.');
      return;
    }

    // Save user
    const newUser = {
      id: Date.now().toString(),
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
      createdAt: new Date().toISOString(),
      xp: 0,
      rank: 'Recruit',
      streak: 0,
      completedChallenges: [],
    };

    users.push(newUser);
    localStorage.setItem('devpath_users', JSON.stringify(users));

    setSuccess('Conta criada com sucesso! Faça login.');
    setMode('login');
    setForm({ ...form, name: '', confirmPassword: '' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!form.email.trim() || !form.password.trim()) {
      setError('Preencha e-mail e senha.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('devpath_users') || '[]');
    const user = users.find(u => u.email === form.email && u.password === form.password);

    if (!user) {
      setError('E-mail ou senha incorretos.');
      return;
    }

    // Save session
    localStorage.setItem('devpath_session', JSON.stringify(user));
    onLogin(user);
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
    setSuccess('');
  };

  return (
    <div className="auth-page">
      {/* Background orbs */}
      <div className="auth-orb auth-orb-1"></div>
      <div className="auth-orb auth-orb-2"></div>
      <div className="auth-orb auth-orb-3"></div>

      <div className="auth-container">
        {/* Left side - branding */}
        <div className="auth-brand">
          <div className="brand-logo">
            <div className="brand-icon">
              <span>&lt;</span><span>/</span><span>&gt;</span>
            </div>
            <h1>DEVPATH <span className="text-gradient-cyan">AI</span></h1>
          </div>
          <p className="brand-tagline">Domine lógica e programação através de desafios gamificados.</p>
          
          <div className="brand-features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Trilhas interativas de aprendizado</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Sistema de XP e progresso</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Múltiplas linguagens de programação</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Desafios com dificuldade progressiva</span>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="auth-form-panel glass-panel">
          <div className="form-header">
            <h2>{mode === 'login' ? 'Entrar' : 'Criar Conta'}</h2>
            <p>{mode === 'login' ? 'Bem-vindo de volta, dev.' : 'Comece sua jornada agora.'}</p>
          </div>

          <form onSubmit={mode === 'login' ? handleLogin : handleRegister} className="auth-form">
            {mode === 'register' && (
              <div className="input-group">
                <label htmlFor="auth-name">Nome</label>
                <div className="input-wrapper">
                  <IconUser size={18} color="var(--text-40)" />
                  <input
                    id="auth-name"
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
              </div>
            )}

            <div className="input-group">
              <label htmlFor="auth-email">E-mail</label>
              <div className="input-wrapper">
                <IconMail size={18} color="var(--text-40)" />
                <input
                  id="auth-email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="auth-password">Senha</label>
              <div className="input-wrapper">
                <IconLock size={18} color="var(--text-40)" />
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder={mode === 'register' ? 'Mínimo 6 caracteres' : 'Sua senha'}
                  value={form.password}
                  onChange={handleChange}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                />
                <button type="button" className="toggle-pass" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                </button>
              </div>
            </div>

            {mode === 'register' && (
              <div className="input-group">
                <label htmlFor="auth-confirm">Confirmar Senha</label>
                <div className="input-wrapper">
                  <IconLock size={18} color="var(--text-40)" />
                  <input
                    id="auth-confirm"
                    type="password"
                    name="confirmPassword"
                    placeholder="Repita a senha"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </div>
              </div>
            )}

            {error && <div className="auth-error">{error}</div>}
            {success && <div className="auth-success">{success}</div>}

            <button type="submit" className="auth-submit-btn">
              <span>{mode === 'login' ? 'Entrar' : 'Cadastrar'}</span>
              <IconArrowRight size={18} />
            </button>
          </form>

          <div className="auth-switch">
            <span>{mode === 'login' ? 'Não tem conta?' : 'Já tem conta?'}</span>
            <button type="button" onClick={switchMode}>
              {mode === 'login' ? 'Cadastre-se' : 'Faça login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
