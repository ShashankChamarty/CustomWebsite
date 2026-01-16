import React, { useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.container}>
      {/* Top banner image */}
      <div className={styles.photoLayer} aria-hidden="true">
        <div
          className={styles.photo}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/adi.jpeg)` }}
        />
        <div className={styles.photoFade} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>About me</h1>

        <h2 className={styles.mainHeading}>Hi, I am Shashank Chamarty!</h2>
        <p className={styles.paragraph}>
          I’m a high school junior interested in robotics and computer science, especially in
          understanding how complex systems become real through sustained effort over time. I don’t
          approach learning as quick exploration across many topics; instead, I stay with one problem
          long enough to understand its structure, limits, and failure modes. I believe that
          understanding, skill, and even passion are not innate traits but things that emerge through
          repeated, intentional attempts—an idea that has shaped how I learn and what I choose to work
          on.
        </p>

        <p className={styles.paragraph}>
          That belief has guided my work in both physical and simulated systems. I led my team to
          build a drone from scratch—something that had never been done at my school—by applying
          principles, testing assumptions, and iterating under constraints. More recently, I’ve been
          working with NVIDIA Isaac Sim to create a digital version of a robotics prototype, using
          simulation as a way to explore ideas without the cost and risk of immediate real-world
          prototyping. Robotics holds my attention because it forces ideas to confront reality:
          systems either work or they don’t, and understanding only comes from staying with
          uncertainty long enough for patterns to reveal themselves.
        </p>

      </div>
    </section>
  );
}
