import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
