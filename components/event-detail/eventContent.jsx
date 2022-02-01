import styles from './eventContent.module.css';

function EventContent({ children }) {
  return <section className={styles.content}>{children}</section>;
}

export default EventContent;
