
import styles from './EmptyState.module.css';

export default function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttonContainer}>
            <button className={styles.actionButton}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </button>
            <span className={styles.label}>Envoyer le document</span>
          </div>
          
          <div className={styles.buttonContainer}>
            <button className={styles.actionButton}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                 <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>
            <span className={styles.label}>Ajouter le contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}
