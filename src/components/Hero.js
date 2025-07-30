import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function Hero() {
  return (
    <motion.section 
      className={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Hello, I’m Sachin jadhav</h2>
      <p>I’m a passionate Java Full Stack Developer with a strong interest in building scalable backend systems.killed in developing backend solutions with Java, Spring Boot, Spring MVC, Spring JPA, and RESTful APIs.</p>
      <a className={styles.button} href="#projects">View My Work</a>
    </motion.section>
  );
}

export default Hero;
