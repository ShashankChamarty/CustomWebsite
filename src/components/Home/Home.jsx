// src/pages/Home.jsx
import { useState } from "react";
import styles from "./Home.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";

// Replace these with your actual images (put them in /public or import from assets)
// If using /public, keep as "/junebase.jpg"
const JUNEB_BASE_IMG = "/junebase.jpg";
const UNET_IMG = "/bluetooth_car.jpg";

function Home() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.App}>
      {/* HERO */}
      <div className={styles.Text}>
        <img
          className={styles.topMe}
          src="/server.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className={styles.topRight}
          src="/Home_page_pic.jpeg"
          alt=""
          aria-hidden="true"
        />
        <div className={styles.intro}>
          <AnimatedText text="Hello! I'm" />
        </div>

        <div className={styles.name}>
          <div className={styles.animclip}>
            <AnimatedText text="Shashank Chamarty" baseDelay={0.5} />
          </div>
        </div>

        <div className={styles.description}>
          {/* keep this as a single AnimatedText call */}
          <AnimatedText
            text="High school junior exploring robotics and computer science through independent research, simulation, and real-world engineering projects."
            baseDelay={1}
            letterDelay={0}
            duration={0.5}
          />
        </div>
      </div>

      {/* WHAT I WORK ON */}
      <section
        className={`${styles.section} ${styles.enterUp}`}
        style={{ animationDelay: "1.35s" }}
        aria-label="What I work on"
      >
        <h2 className={styles.sectionTitle}>What I work on</h2>

        <div className={styles.workGrid}>

          <div className={`${styles.workCard} ${styles.enterUp}`} style={{ animationDelay: "1.50s" }}>
            <div className={styles.workTitle}>Robotics Simulation & Research with NVIDIA Isaac Sim</div>
            <div className={styles.workDesc}>
              Learning and documenting robotics simulation using NVIDIA Isaac Sim, focusing on system architecture, physics pipelines, and professional-scale APIs.
            </div>
          </div>

          <div className={`${styles.workCard} ${styles.enterUp}`} style={{ animationDelay: "1.50s" }}>
            <div className={styles.workTitle}>Junebase Robotics — Early-Stage Robotics Exploration</div>
            <div className={styles.workDesc}>
              Co-founding an early-stage robotics project exploring simulation-driven approaches to real-world automation problems.
            </div>
          </div>

          <div className={`${styles.workCard} ${styles.enterUp}`} style={{ animationDelay: "1.50s" }}>
            <div className={styles.workTitle}>Mobile controlled car & drone creation</div>
            <div className={styles.workDesc}>
              PLed a team to design and build a drone from scratch, earning first place in the TSA Drone Challenge and qualifying for nationals. Personally created a bluetooth controlled car from scratch using Arduino Uno.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        className={`${styles.section} ${styles.enterUp}`}
        style={{ animationDelay: "1.95s" }}
        aria-label="Featured projects"
      >
        <h2 className={styles.sectionTitle}>Featured Projects</h2>

        <div className={styles.cards}>
          {/* CARD 1 - JUNEBBASE */}
          <button
            type="button"
            className={`${styles.card} ${styles.enterLeft} ${openId === "junebase" ? styles.flipped : ""}`}
            style={{ animationDelay: "2.10s" }}
            onClick={() => toggle("junebase")}
          >
            <div className={styles.cardInner}>
              {/* FRONT */}
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <img className={styles.cardPhoto} src={JUNEB_BASE_IMG} alt="Junebase Robotics" />

                <div className={styles.cardOverlay}>
                  <div className={styles.cardName}>Countertop robot prototype</div>
                  <div className={styles.cardRole}>ROBOT SIMULATION RESEARCH • SYSTEM ARCHITECTURE</div>
                </div>

                {/* bottom-left link */}
                <a
                  href="https://junebase.com"
                  className={styles.cardLink}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Junebase website"
                >
                  ↗
                </a>

                {/* bottom-right flip glyph */}
                <div className={styles.cardAction} aria-hidden="true">+</div>
              </div>

              {/* BACK */}
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                <p className={styles.cardParagraph}>
                  Using the measurements and design of the physical robot prototype, we are simulating a
                  dual-arm robot to do various tasks like pick-and-place, stirring, and flipping in Isaac
                  Sim using existing data.
                </p>

                <div className={styles.cardBackLinks}>
                  <a
                    href="https://junebase.com"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Website ↗
                  </a>
                  <a
                    href="https://github.com/Junebase-Robotics"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                </div>

                <div className={styles.cardAction} aria-hidden="true">×</div>
              </div>
            </div>
          </button>

          {/* CARD 2 - U-NET */}
          <button
            type="button"
            className={`${styles.card} ${styles.enterRight} ${openId === "unet" ? styles.flipped : ""}`}
            style={{ animationDelay: "2.18s" }}
            onClick={() => toggle("unet")}
          >
            <div className={styles.cardInner}>
              {/* FRONT */}
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <img className={styles.cardPhoto} src={UNET_IMG} alt="U-Net Segmentation" />

                <div className={styles.cardOverlay}>
                  <div className={styles.cardName}>BLUETOOTH CONTROLLED CAR</div>
                  <div className={styles.cardRole}>EMBEDDED CONTROL SYSTEM</div>
                </div>

                <a
                  href="/research"
                  className={styles.cardLink}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="U-Net writeup"
                >
                  ↗
                </a>

                <div className={styles.cardAction} aria-hidden="true">+</div>
              </div>

              {/* BACK */}
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                <p className={styles.cardParagraph}>
                  Designed a bluetooth-based car which uses arduino and ESP32C3 to seamlessly recieve
                  commands from any electronic device with bluetooth to control it.
                </p>

                <div className={styles.cardBackLinks}>
                  <a
                    href="/research"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Write-up ↗
                  </a>
                  <a
                    href="https://github.com/JonathanPLev/Unet-ReImplementation"
                    className={styles.pill}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code ↗
                  </a>
                </div>

                <div className={styles.cardAction} aria-hidden="true">×</div>
              </div>
            </div>
          </button>
        </div>

        <a className={`${styles.moreLink} ${styles.enterUp}`} style={{ animationDelay: "2.30s" }} href="/projects">
          To see more of my projects, click here →
        </a>
      </section>
    </div>
  );
}

export default Home;
