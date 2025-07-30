import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact</h2>
      <div className={styles.staticContact}>
        <p>Email: sachinj291103@gmail.com</p>
        <p>Phone: +91 7020681362</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sachin-jadhav-1b41a4265/" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      </div>
    </section>
  );
}

export default Contact;
