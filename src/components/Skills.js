import styles from './Skills.module.css';

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2>Skills</h2>
      <div>
        <h3>Programming Languages</h3>
        <ul>
          <li>Java</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
        </ul>
        <h3>Frameworks</h3>
        <ul>
          <li>Spring Boot</li>
          <li>React</li>
        </ul>
        <h3>Databases</h3>
        <ul>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
