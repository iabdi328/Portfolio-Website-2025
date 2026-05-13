import city from "../assets/images/city.png";
import when2meet from "../assets/images/when2meet.png";
import w2meet1 from "../assets/images/w2meet.png";
import w2meet2 from "../assets/images/w2meet2.png";
import w2meet3 from "../assets/images/w2meet3.png";
import w2meet4 from "../assets/images/w2meet4.png";
import mindsweep from "../assets/images/spartanmind.png";
import spartanmindScreenshot from "../assets/images/smgp1.png.png";
import spartanmind2 from "../assets/images/smgp2.png";
import spartanmind3 from "../assets/images/smgp3.png";
import spartanmind4 from "../assets/images/smgp4.png";
import harold from "../assets/images/harold.png";
import stryker from "../assets/images/artwork-3.png";
import stryker2 from "../assets/images/artwork-2.png";
import stryker1 from "../assets/images/artwork-1.png";
import strykerVideo from "../assets/videos/project-video.mp4";
import spartanmindVideo from "../assets/videos/spgpvideo.mp4";

export const projects = [
  {
    slug: "stryker",
    name: "Clean & Sterilized Instrumentation",
    image: stryker,
    screenshots: [stryker, stryker2, stryker1],
    video: strykerVideo,
    nda: true,
    client: "Stryker",
    year: "2025",
    description: [
      "Stryker is a global leader in medical technologies, offering innovative products and services to improve healthcare for patients globally — influencing over 75 countries and serving over 150 million patients.",
      "Hospitals around the world have Sterile Processing Departments (SPD) for sanitizing and packaging tools used in Operating Rooms (OR). When packaging tools, sometimes instruments are broken, soiled, or missing and go unnoticed. By the time those tools are found in the operating room, it costs valuable time and money to replace them.",
      "Our Clean & Sterilized Instrumentation application mitigates this issue by monitoring tool packaging within the SPD and notifying technicians of any unclean tools. Technicians select a package to fulfill, then use the device camera to scan instruments in real time. The app knows exactly what tools are required and flags anything broken, soiled, or missing — requiring all issues to be resolved before the package can proceed.",
      "OR Managers have access to all previous packages filed under their department, with the application tracking errors found and calculating the time and money saved by catching problems at the SPD stage rather than in the operating room.",
    ],
    features: [
      "Real-time AI detection of surgical instruments — clean, unclean, missing, or extra",
      "QR code–based package tracking with check-in and check-out at each location",
      "Role-based access for SPD Technicians and OR Leads",
      "Analytics dashboard for visualizing process effectiveness and catching trends",
      "Historical package lookup with detailed error logs and image evidence",
    ],
    tech: {
      Frontend: ["React Native", "JavaScript", "TypeScript"],
      Backend: ["Python", "FastAPI"],
      "AI / ML": ["YOLO", "PyTorch"],
      Database: ["PostgreSQL"],
    },
  },
  {
    slug: "when2meet",
    name: "When2Meet Clone",
    image: w2meet1,
    screenshots: [w2meet1, w2meet2, w2meet3, w2meet4],
    year: "2025",
    description: [
      "A real-time group scheduling web application inspired by When2Meet, built as a Final Exam project for a Web Application Development course. Users collaboratively mark their availability across a date/time grid to find the optimal meeting time for a group.",
      "Unlike the original When2Meet, this version supports three availability states — Available, Maybe, and Unavailable — with a custom scoring algorithm that identifies the best 30-minute slot by maximizing available users, minimizing unavailable ones, and breaking ties by earliest time.",
      "All availability changes, heatmap updates, and best-time calculations are pushed live to every connected user via Socket.IO WebSockets — no page refresh needed. Events are private and access-controlled, with only invited users able to view or edit availability.",
    ],
    features: [
      "3-state availability grid — Available, Maybe, Unavailable (real When2Meet only has two)",
      "Best Time to Meet algorithm — scores slots by availability, penalizes conflicts, breaks ties by earliest slot",
      "Real-time heatmap and best-time updates via Socket.IO WebSockets across all connected users",
      "Email-based invite access control — non-invitees receive a 403",
      "Session-based authentication with bcrypt password hashing",
      "Dockerized and deployed on Google Cloud Run",
    ],
    tech: {
      Frontend: ["HTML", "CSS", "JavaScript"],
      Backend: ["Python", "Flask"],
      Database: ["MySQL"],
      "Real-time": ["Socket.IO"],
      Auth: ["bcrypt", "Sessions"],
      Deployment: ["Docker", "Google Cloud Run"],
    },
    links: [
      { label: "View Live Site", url: "https://flask-app-429701463375.us-central1.run.app/login" },
      { label: "View Source Code", url: "https://github.com/iabdi328/when2meet-clone" },
    ],
  },
  {
    slug: "spartanmind",
    name: "SpartanMind",
    image: spartanmindScreenshot,
    screenshots: [spartanmindScreenshot, spartanmind2, spartanmind3, spartanmind4],
    video: spartanmindVideo,
    year: "CSE 335 · 2025",
    theme: { accent: "#18453B", accentText: "#ffffff" },
    description: [
      "A word puzzle game built in C++ using the wxWidgets framework, developed as a collaborative team project at Michigan State University.",
      "Players guide Sparty across a tile-based grid to place letters into the correct slots and guess the hidden word. Each level introduces new challenges including locked letters hidden inside containers that must be headbutted open.",
      "My contributions: Core project setup, XML-driven level loading, virtual pixel scaling system, timer and scoreboard, audio feedback, Windows stability fixes, game feature menu integration, and post-development improvements including letter removal logic, invalid placement feedback, smooth level transitions, and a packaged Windows release.",
    ],
    tech: {
      Language: ["C++"],
      Framework: ["wxWidgets"],
      "Build & Test": ["CMake", "Google Test"],
      "Level Data": ["XML"],
    },
    links: [
      { label: "View Source Code", url: "https://github.com/iabdi328/spartanmind" },
      { label: "Download for Windows", url: "https://github.com/iabdi328/spartanmind/releases/tag/game" },
    ],
  },
  {
    slug: null,
    name: "City Simulation",
    link: "https://drive.google.com/drive/folders/1knJvFJdF9AMsqrHfBl2PKKuwRNdGg2Kf?usp=sharing",
    image: city,
  },
  {
    slug: null,
    name: "Harold's Bubble Blaster",
    link: "https://drive.google.com/drive/folders/14T9IXHK3sHm6haYwxVeVTPDxLzYADW1o?usp=sharing",
    image: harold,
  },
];
