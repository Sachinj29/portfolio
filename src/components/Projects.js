import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.card}>
          <h3>Identification of Sickle Cell Disease Using CNN</h3>
          <p>Designed and trained a CNN model using MobileNet, TensorFlow, and Keras to classify Sickle Cell Disease with high accuracy. Included preprocessing steps and integrated SVM for improved classification.</p>
        </div>
        <div className={styles.card}>
          <h3>Smart Research Assistant</h3>
          <p>Developed an AI-powered browser extension using Java, Spring Boot, and Spring AI to summarize selected web content and support real-time note-taking.</p>
        </div>
        <div className={styles.card}>
          <h3>Job Portal Web Application</h3>
          <p>Built a full-stack job portal using React, Spring Boot, PostgreSQL with secure login, role-based access control, and CRUD operations for employers and job seekers.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
