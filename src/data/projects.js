
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
    image: "/bluetooth_car.jpg",
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
    title: "Custom drone with gripper",
    dateLabel: "Dec 2024",
    role: "WIRING • POWER SYSTEMS",
    image: "/drone picture.jpeg",
    description:
      "Created a FPV drone from scratch, using information from various youtube videos, and documentation. Designed the bill of materials involving flight controller, Electronic speed controller + power distribution board, motors, and battery. Integrated the gripper using Arduino uno and esc32c3 to seamlessly communicate with the gripper controller.",
    primaryLink: {
      href: "https://ml.junebase.com",
      ariaLabel: "Handwritten digit recognition demo"
    },
    links: [
      { href: "https://ml.junebase.com", label: "Demo ↗" }
    ]
  }
];
