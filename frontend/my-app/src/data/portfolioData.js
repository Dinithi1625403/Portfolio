export const portfolioData = {
  personal: {
    name: "Dinithi Dewmini",
    title: "Information Technology Student",
    subtitle: "Passionate about harnessing technology to solve real-world problems",
    bio: "Hello! I'm Dinithi Dewmini, currently pursuing my undergraduate degree in Information Technology at the University of Moratuwa. Passionate about harnessing technology to solve real-world problems, I am constantly exploring new developments in the IT landscape and how they can be applied innovatively. I'm always eager to connect with like-minded professionals, mentors, and industry experts to exchange ideas, collaborate on projects, and explore potential career opportunities.",
    location: "Gampaha District, Western Province, Sri Lanka",
    email: "dinithi1625403@gmail.com",
    phone: "", // Not provided
    profileImage: "/api/placeholder/300/300", // You can replace this with your actual photo
  },
  
  socialLinks: [
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/dinithidewmini", // Update with actual GitHub URL
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/dinithi-dewmini-30280327b",
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: "Mail",
      url: "mailto:dinithi1625403@gmail.com",
      color: "hover:text-green-500"
    }
  ],
  technicalSkills: [
    { name: "Figma", level: 90, category: "Design" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "React", level: 75, category: "Frontend" },
    { name: "HTML/CSS", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 70, category: "Frontend" },
    { name: "C Programming", level: 70, category: "Backend" },
    { name: "Java", level: 65, category: "Backend" },
    { name: "Cloud Computing", level: 60, category: "Cloud" },
    { name: "Google Analytics", level: 70, category: "Analytics" },
    { name: "Project Management", level: 75, category: "Management" },
    { name: "Git", level: 70, category: "Tools" }
  ],

  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Leadership",
    "Adaptability",
    "Critical Thinking",
    "Innovation",
    "Time Management",
    "Mentoring"
  ],

  certifications: [
    "JavaScript Intermediate",
    "Project Management Foundation", 
    "Introduction to Cloud Computing",
    "Introduction to C",
    "Google Analytics for Beginners"
  ],

  achievements: [
    "Winner of Nadhaya Imagine AI Competition",
    "Diploma in English Language and Literature",
    "Semifinalist of hack X 9.0 2024", 
    "Finalist – InspiHER(tech) v3.0",
    "Top 12 Finalist – Devthon 2.0"
  ],
  projects: [
    {
      id: 1,
      title: "AI Innovation Project",
      description: "Winner project from Nadhaya Imagine AI Competition showcasing innovative AI solutions for real-world problems.",
      technologies: ["AI/ML", "Python", "Next.js", "Figma"],
      image: "/api/placeholder/600/400",
      liveUrl: "", // Update with actual URL when available
      githubUrl: "", // Update with actual GitHub URL
      featured: true
    },
    {
      id: 2,
      title: "HackX 9.0 Project",
      description: "Semifinalist project from HackX 9.0 2024 competition, demonstrating technical skills and innovation in problem-solving.",
      technologies: ["JavaScript", "React", "Next.js", "UI/UX"],
      image: "/api/placeholder/600/400",
      liveUrl: "", // Update with actual URL when available
      githubUrl: "", // Update with actual GitHub URL
      featured: true
    },
    {
      id: 3,
      title: "InspiHER(tech) v3.0 Project",
      description: "Finalist project showcasing women in technology and innovative solutions for tech challenges.",
      technologies: ["React", "JavaScript", "Figma", "UI/UX"],
      image: "/api/placeholder/600/400",
      liveUrl: "", // Update with actual URL when available
      githubUrl: "", // Update with actual GitHub URL
      featured: true
    },
    {
      id: 4,
      title: "Devthon 2.0 Project",
      description: "Top 12 finalist project from Devthon 2.0, demonstrating development skills and innovative thinking.",
      technologies: ["Next.js", "JavaScript", "UI/UX Design", "Project Management"],
      image: "/api/placeholder/600/400",
      liveUrl: "", // Update with actual URL when available
      githubUrl: "", // Update with actual GitHub URL
      featured: false
    }
  ],

  experience: [
    {
      company: "University Projects & Competitions",
      position: "Student Developer & Competitor",
      duration: "2024 - Present",
      description: "Actively participating in various tech competitions and hackathons, developing innovative solutions and collaborating with diverse teams.",
      achievements: [
        "Winner of Nadhaya Imagine AI Competition",
        "Semifinalist of hack X 9.0 2024",
        "Finalist – InspiHER(tech) v3.0",
        "Top 12 Finalist – Devthon 2.0"
      ]
    },
    {
      company: "Freelance & Personal Projects",
      position: "UI/UX Designer & Developer",
      duration: "2023 - Present", 
      description: "Working on various UI/UX design projects and web development, focusing on user-centered design and modern web technologies.",
      achievements: [
        "Developed proficiency in Figma and modern design principles",
        "Built projects using Next.js and React",
        "Gained expertise in JavaScript and frontend technologies"
      ]
    }
  ],

  education: [
    {
      institution: "University of Moratuwa",
      degree: "Bachelor of Science Honors in Information Technology",
      duration: "March 2024 - 2028",
      gpa: "" // Not provided
    },
    {
      institution: "Aquinas College of Higher Studies",
      degree: "Diploma in English Language and Literature",
      duration: "2023 - 2024",
      gpa: ""
    },
    {
      institution: "Rathnavali Balika Vidyalaya Gampaha",
      degree: "Advanced Level - Physical Sciences",
      duration: "2013 - 2023",
      gpa: ""
    }
  ],
  testimonials: [
    {
      name: "Competition Judge",
      position: "Nadhaya Imagine AI Competition",
      text: "Dinithi demonstrated exceptional creativity and technical skills in the AI competition. Her innovative approach to problem-solving and ability to implement complex solutions stood out among all participants.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Mentor",
      position: "University of Moratuwa - Faculty of IT",
      text: "As a student, Dinithi shows remarkable dedication to learning and exploring new technologies. Her passion for innovation and collaborative spirit makes her an excellent team player and future tech leader.",
      avatar: "/api/placeholder/80/80"
    }
  ]
};

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
