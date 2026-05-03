import React, { useState } from 'react';
import { IconUser, IconLock, IconEye, IconEyeOff, IconCheck, IconX, IconArrowLeft } from '../componentes/Icones';
import './PaginaConfiguracoes.css';

const SettingsPage = ({ user, onUpdateUser, onBack }) => {
  const [name, setName] = useState(user?.name || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus({ type: 'error', message: 'Nome não pode ser vazio.' });
      return;
    }
    
    onUpdateUser({ ...user, name: name.trim() });
    setStatus({ type: 'success', message: 'Perfil atualizado com sucesso!' });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (currentPassword !== user.password) {
      setStatus({ type: 'error', message: 'Senha atual incorreta.' });
      return;
    }
    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'A nova senha deve ter 6+ caracteres.' });
      return;
    }

    onUpdateUser({ ...user, password: newPassword });
    setStatus({ type: 'success', message: 'Senha alterada com sucesso!' });
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <button className="back-btn" onClick={onBack}>
          <IconArrowLeft size={18} />
          <span>Voltar</span>
        </button>
        <h1>Configurações</h1>
      </div>

      <div className="settings-content">
        <div className="settings-section glass-panel">
          <h3><IconUser size={18} /> Perfil do Desenvolvedor</h3>
          <form onSubmit={handleUpdateProfile} className="settings-form">
            <div className="input-group">
              <label htmlFor="settings-name">Nome Público</label>
              <input 
                id="settings-name"
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <div className="input-group">
              <label htmlFor="settings-email">E-mail (Não pode ser alterado)</label>
              <input id="settings-email" type="email" value={user?.email || ''} disabled />
            </div>
            <button type="submit" className="save-btn">Salvar Alterações</button>
          </form>
        </div>

        <div className="settings-section glass-panel">
          <h3><IconLock size={18} /> Segurança</h3>
          <form onSubmit={handleUpdatePassword} className="settings-form">
            <div className="input-group">
              <label htmlFor="settings-current-pass">Senha Atual</label>
              <div className="pass-wrap">
                <input 
                  id="settings-current-pass"
                  type={showPass ? "text" : "password"} 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="settings-new-pass">Nova Senha</label>
              <div className="pass-wrap">
                <input 
                  id="settings-new-pass"
                  type={showPass ? "text" : "password"} 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="new-password"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" className="save-btn">Alterar Senha</button>
          </form>
        </div>

        {status.message && (
          <div className={`status-toast ${status.type}`}>
            {status.type === 'success' ? <IconCheck size={16} /> : <IconX size={16} />}
            <span>{status.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
