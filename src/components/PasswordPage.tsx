import React, { useState } from 'react';
import { verifyPassword, setAuthenticated } from '../utils/auth';

interface PasswordPageProps {
  onSuccess: () => void;
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#faf9f7',
    padding: '20px',
  } as React.CSSProperties,
  card: {
    backgroundColor: '#fff',
    padding: '48px 40px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(26, 26, 26, 0.08)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  header: {
    marginBottom: '40px',
  } as React.CSSProperties,
  logo: {
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '3px',
    color: '#c8a96e',
    margin: '0 0 8px 0',
    fontFamily: "'DM Sans', sans-serif",
  } as React.CSSProperties,
  subtitle: {
    fontSize: '14px',
    letterSpacing: '1px',
    color: '#1a1a1a',
    opacity: 0.6,
    margin: 0,
    fontFamily: "'Noto Sans TC', sans-serif",
  } as React.CSSProperties,
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  } as React.CSSProperties,
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    textAlign: 'left' as const,
  } as React.CSSProperties,
  label: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1a1a1a',
    letterSpacing: '0.3px',
    fontFamily: "'Noto Sans TC', sans-serif",
  } as React.CSSProperties,
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    border: '1px solid #e8e6e1',
    borderRadius: '4px',
    fontFamily: "'DM Mono', monospace",
    letterSpacing: '0.5px',
    transition: 'all 0.2s',
    boxSizing: 'border-box' as const,
    backgroundColor: '#faf9f7',
  } as React.CSSProperties,
  button: {
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: 600,
    backgroundColor: '#c8a96e',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: "'DM Sans', sans-serif",
    marginTop: '8px',
  } as React.CSSProperties,
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  } as React.CSSProperties,
  error: {
    color: '#d32f2f',
    fontSize: '13px',
    padding: '8px 12px',
    backgroundColor: 'rgba(211, 47, 47, 0.1)',
    borderRadius: '4px',
    fontFamily: "'Noto Sans TC', sans-serif",
  } as React.CSSProperties,
  footer: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid #e8e6e1',
  } as React.CSSProperties,
  footerText: {
    fontSize: '12px',
    color: '#1a1a1a',
    opacity: 0.5,
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: '0.2px',
  } as React.CSSProperties,
};

export const PasswordPage: React.FC<PasswordPageProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (verifyPassword(password)) {
        setAuthenticated();
        onSuccess();
      } else {
        setError('密碼不正確，請重試');
        setPassword('');
      }
      setIsLoading(false);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && password) {
      handleSubmit(e as any);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.logo}>GREDMANN</h1>
          <p style={styles.subtitle}>市場情報平台</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              請輸入訪問密碼
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="••••••••"
              style={styles.input}
              disabled={isLoading}
              autoFocus
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <button
            type="submit"
            disabled={!password || isLoading}
            style={{
              ...styles.button,
              ...((!password || isLoading) && styles.buttonDisabled)
            }}
          >
            {isLoading ? '驗證中...' : '進入'}
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            © 2026 Gredmann Market Intelligence Platform
          </p>
        </div>
      </div>
    </div>
  );
};
