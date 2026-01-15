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

        <h2 className={styles.mainHeading}>Hi, I am Sai Chamarty!</h2>
        <p className={styles.paragraph}>
          I am a computer science student with a focus on robotics and machine learning,
          working on systems that connect perception, control, and physical hardware. My
          current work centers on using simulation and structured testing to move ideas
          from prototypes into repeatable, deployable behavior on real robotic platforms.
        </p>

        <p className={styles.paragraph}>
          Through coursework and independent projects, I have designed and tested
          robotic and machine learning systems using tools such as NVIDIA Isaac Sim,
          Jetson-based hardware, and Python-based ML pipelines. I have worked on computer
          vision tasks including object detection and semantic segmentation, and built
          simple CI/CD workflows to support testing and iteration. Alongside this, I am
          exploring human–machine interaction through Saiborg, a conversational AI
          project, while continuing to develop this website as a technical portfolio.
        </p>

      </div>
    </section>
  );
}
