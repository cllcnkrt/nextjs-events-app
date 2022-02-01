import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
