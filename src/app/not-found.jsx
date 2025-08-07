import React from 'react';
import './NotFound.css';
import styles from './notFound.module.css';

const NotFound = () => (
  <div className={styles.notfound-container}>
    <h1 className={styles.notfound-title}>404</h1>
    <p className={styles.notfound-message}>
      Página não encontrada.
      <a href="/" className={styles.notfound-link}>Voltar para o início</a>
    </p>
  </div>
);

export default NotFound;
