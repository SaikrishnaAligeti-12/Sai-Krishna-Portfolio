import resumeAsset from "@/assets/resume.pdf.asset.json";

// EDIT ME: all personal details live here.
export const profile = {
  name: "Sai Krishna Aligeti",
  role: "Full Stack Developer",
  tagline: "Building Future with Code",
  rotating: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "AI & ML Enthusiast",
  ],
  about:
    "Full Stack Developer and Computer Science and Engineering (Cyber Security) student at Keshav Memorial College of Engineering, focused on building production-ready web and AI products. I shipped a Plant Disease Classification System with 99.5% accuracy (CNN + ViT, PyTorch, Flask) and a full-stack MERN Job Portal with authentication and REST APIs. Strong in JavaScript, React, Node.js and Java, with a bias toward clean architecture, fast interfaces and measurable results.",
  stats: [
    { label: "Status", value: "Fresher" },
    { label: "Degree", value: "B.E. CSE (Cyber Security)" },
    { label: "Graduation", value: "2027" },
    { label: "CGPA", value: "7.5" },
    { label: "Mindset", value: "Fast Learner" },
    { label: "Culture", value: "Team Player" },
  ],
  goal:
    "Seeking opportunities as a Full Stack Developer where I can contribute, learn, and grow by building impactful software solutions.",
  college: "Keshav Memorial College of Engineering",
  degree: "Bachelor of Engineering in Computer Science and Engineering (Cyber Security)",
  gradYear: "2027",
  email: "saikrishnaa112233@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-krishna-aligeti-4828822b9/",
  github: "https://github.com/SaikrishnaAligeti-12",
  resumeUrl: resumeAsset.url,
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 86 },
      { name: "React.js", level: 84 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 78 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Python", level: 82 },
      { name: "Flask", level: 75 },
    ],
  },
  {
    title: "Database & DevOps",
    items: [
      { name: "MySQL", level: 84 },
      { name: "MongoDB", level: 80 },
      { name: "Git / GitHub", level: 86 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Machine Learning", level: 82 },
      { name: "PyTorch", level: 78 },
      { name: "CNN / ViT", level: 80 },
      { name: "Image Processing", level: 76 },
    ],
  },
  {
    title: "Tools & Soft Skills",
    items: [
      { name: "VS Code", level: 90 },
      { name: "Problem Solving", level: 86 },
      { name: "Critical Thinking", level: 84 },
      { name: "Communication", level: 82 },
    ],
  },
];

export const projects = [
  {
    title: "Job Portal",
    description:
      "A full-stack Job Portal web application built with the MERN stack. Features include user authentication, job posting, job application and management, responsive UI, REST API integration, and secure deployment with MongoDB and GitHub version control.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    status: "Featured",
  },
  {
    title: "MobilePlantViT",
    description:
      "An AI-powered Plant Disease Classification System that scans plant leaf images to predict diseases for early crop protection. Achieved up to 99.5% accuracy using EfficientNetV2 and a lightweight CNN + Vision Transformer (ViT) model optimized for mobile deployment.",
    stack: ["Python", "PyTorch", "Flask", "Flutter", "MySQL", "TensorFlow Lite"],
    status: "Featured",
  },
  {
    title: "Portfolio Website",
    description:
      "This futuristic portfolio — animated, responsive and built with a custom design system using React, TypeScript and Tailwind CSS.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    status: "Live",
  },
];
