
// data/projects.js
export const projectList = [
  {
    id: "junebase",
    title: "Countertop robot prototype",
    dateLabel: "Sep 2025",
    role: "ROBOT SIMULATION RESEARCH • SYSTEM ARCHITECTURE",
    image: "/junebase.jpg",
    description:
      "Using the measurements and design of the physical robot prototype, we are simulating a dual-arm robot to do various tasks like pick-and-place, stirring, and flipping in Isaac Sim using existing data.",
    primaryLink: {
      href: "https://junebase.com",
      ariaLabel: "Junebase website"
    },
    links: [
      { href: "https://junebase.com", label: "Website ↗" },
      { href: "https://github.com/Junebase-Robotics", label: "GitHub ↗" }
    ]
  },
  {
    id: "unet",
    title: "BLUETOOTH CONTROLLED CAR",
    dateLabel: "Jun 2025",
    role: "EMBEDDED CONTROL SYSTEM",
    image: "/unet.jpg",
    description:
      "Designed a bluetooth-based car which uses arduino and ESP32C3 to seamlessly recieve commands from any electronic device with bluetooth to control it.",
    primaryLink: {
      href: "/research",
      ariaLabel: "U-Net research write-up"
    },
    links: [
      { href: "/research", label: "Write-up ↗" },
      { href: "https://github.com/JonathanPLev/Unet-ReImplementation", label: "Code ↗" }
    ]
  },
  {
    id: "handwritten",
    title: "Handwritten Digit Recognition",
    dateLabel: "Mar 2025",
    role: "MACHINE LEARNING • CNN",
    image: "/mnist.png",
    description:
      "First ML project: trained a CNN on the MNIST dataset to classify digits 0–9 and studied fundamentals of data pipelines, training loops, and evaluation.",
    primaryLink: {
      href: "https://ml.junebase.com",
      ariaLabel: "Handwritten digit recognition demo"
    },
    links: [
      { href: "https://ml.junebase.com", label: "Demo ↗" }
    ]
  },
  {
    id: "model28",
    title: "Model 28: Scenery Classification",
    dateLabel: "Mar 2025",
    role: "ML RESEARCH • MODEL COMPARISON",
    image: "/intel.png",
    description:
      "Led a team of five to train Logistic Regression, MLP, and CNN models on the Intel Scenery Classification dataset, focusing on cross-model validation and comparative analysis.",
    primaryLink: {
      href: "https://model28.junebase.com",
      ariaLabel: "Model 28 website"
    },
    links: [
      { href: "https://model28.junebase.com", label: "Project ↗" }
    ]
  }
];
