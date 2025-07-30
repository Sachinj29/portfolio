import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
