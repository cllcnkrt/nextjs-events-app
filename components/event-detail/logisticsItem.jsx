/* eslint-disable react/destructuring-assignment */
import styles from './logisticsItem.module.css';

function LogisticsItem({ icon: Icon, children }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
