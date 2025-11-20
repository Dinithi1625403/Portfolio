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
  ],  certifications: [
    {
      title: "CodeQuest: Vault Edition 2025 – Initial Round",
      image: "/CTF.jpeg",
      issuer: "IEEE Student Branch of UCSC",
      date: "Jul 2025",
      credentialID: "CodeQuest CFT Competition",
      skills: "Competitive Programming"
    },
    {
      title: "Introduction to Digital Transformation with Google Cloud",
      image: "/googleCloud.jpeg",
      issuer: "Google",
      date: "Jun 2024",
      credentialID: "6801752",
      skills: "Google Cloud"
    },
    {
      title: "Project Management Foundation",
      image: "/projectMan.jpeg",
      issuer: "National Association of State Boards of Accountancy (NASBA)",
      date: "Jun 2024",
      credentialID: "8ac122d87a2c30ce231c95197b5b6b6d",
      skills: "Project Management"
    },
    {
      title: "Introduction to C++",
      image: "/introC++.jpeg",
      issuer: "Sololearn",
      date: "Jun 2024",
      credentialID: "AZZJDUTG",
      skills: "C++"
    },
    {
      title: "Introduction to SQL",
      image: "/intro to sql.jpeg",
      issuer: "Sololearn",
      date: "Jun 2024",
      credentialID: "LJYJU6ZD",
      skills: "SQL"
    }
  ],

  achievements: [
    {
      title: "Team NovaX Finalist – HackElite 2.0",
      image: "/hacklite.jpeg",
      date: "2025",
      description: "Developed LevelUp LMS - an innovative Learning Management System. Built with React.js, Node.js, Express, MongoDB, Socket.io, Tailwind CSS & Framer Motion"
    },
    {
      title: "Top 12 Finalist – Devthon 2.0",
      image: "/devthon.jpeg",
      date: "Apr 2025",
      description: "Team Magmatroxes developed SkillForge - a platform enabling skill exchange through barter system. Recognized for collaboration & peer learning innovation"
    },
    {
      title: "Finalist – InspiHER(tech) v3.0",
      image: "/inspiher.jpeg",
      date: "Jan 2025",
      description: "Team Tech Maverick completed 3-phase competition: AutoCAD Design, Digital Trends Analysis, and Hackathon. Showcased technical expertise & problem-solving"
    },
    {
      title: "Semifinalist – HackX 9.0 2024",
      image: "/hackX.jpeg",
      date: "2024",
      description: "Team EvoGen represented University of Moratuwa. Honored for innovation, teamwork & problem-solving in this inter-university hackathon"
    },
    {
      title: "SpiritX: Stage 1 – Xcelerate 2025",
      image: "/spritX.jpeg",
      date: "May 2025",
      description: "Team ByteShift participated in inter-university development competition organized by MoraSpirit 360. Focus on Web Development innovation"
    }
  ],projects: [    {
      id: 1,
      title: "PetConnect",
      description: "A web platform designed to connect pet lovers, facilitate adoptions, and create a supportive community. Users can browse pets available for adoption, view latest posts about lost or injured animals, and interact through a community wall.",
      duration: "Jul 2025 - Present",
      technologies: ["React"],
      features: [
        "Adoption Page: Browse pets available for adoption",
        "Latest Posts: Updates about lost, wounded, or rescued pets",
        "Community Wall: Share and interact with other pet lovers"
      ],
      image: "/petconnect.png",
      liveUrl: "",
      githubUrl: "https://github.com/Pet-connect-website/pet-connect-frontend",
      featured: true
    },
    {
      id: 2,
      title: "Skill-Forge",
      description: "A web platform designed to connect students and peers for skill learning and mentorship. Users can showcase their skills, request mentorship, engage in live chat, and track their learning journey through a personalized dashboard.",
      duration: "Apr 2025 - Apr 2025",
      technologies: ["Next.js", "Node.js"],
      features: [
        "Landing Page: Eye-catching introduction and easy navigation",
        "Register/Login Page: Google OAuth integration for quick, secure access",
        "Profile Setup: Students can add skills offered/requested, experience level, and bio",
        "Student Dashboard: Track mentorships, skill exchanges, and progress",
        "Live Chat: Real-time messaging to communicate before mentorship sessions",
        "Mentorship Request: Search peers and request skill exchange sessions"
      ],
      image: "/skillForge.png",
      liveUrl: "",
      githubUrl: "https://github.com/Nipun-Yasas/Skill-Forge",
      featured: true
    },
    {
      id: 3,
      title: "Image Gallery",
      description: "An interactive web application that allows users to seamlessly view, organize, and manage their image collections with dynamic animations and visual effects for an enhanced user experience.",
      duration: "Dec 2024 - Dec 2024",
      technologies: ["HTML", "CSS", "JavaScript", "Canva"],
      features: [
        "Lightbox View: Enables users to view images in a pop-up overlay without leaving the page",
        "Hover Effects: Adds dynamic animations and visual effects for an enhanced user experience",
        "Captions/Descriptions: Displays contextual captions below each image for additional information",
        "Grid Layout: A clean and organized grid format for effortless browsing"
      ],
      image: "/imgGallery.png",
      liveUrl: "",
      githubUrl: "https://github.com/Dinithi1625403/imageGallery",
      featured: true
    },
    {
      id: 4,
      title: "To-do-list Application",
      description: "A feature-rich To-Do List application that allows users to categorize tasks into four distinct categories based on importance and urgency. Designed with a user-friendly interface and visually appealing design.",
      duration: "Jun 2024 - Jul 2024",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      features: [
        "Categorization of tasks: important and urgent, not important but urgent, important but not urgent, and not important and not urgent",
        "User-friendly interface with a visually appealing design",
        "Efficient use of HTML, CSS, Bootstrap, and JavaScript to create a responsive application"
      ],
      image: "/todolist.png",
      liveUrl: "",
      githubUrl: "https://github.com/Dinithi1625403/To-do-list",
      featured: false
    },
    {
      id: 5,
      title: "Weather Forecast",
      description: "A Weather Forecast App designed to provide accurate and real-time weather information. Built with a user-friendly interface and reliable data to help users plan their day effectively.",
      duration: "Jun 2024 - Jun 2024",
      technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
      features: [
        "Current Weather: Get real-time weather updates for your location",
        "Hourly Forecast: Detailed hourly weather forecasts to help you plan your activities",
        "Responsive Design: Seamless experience on any device, thanks to Bootstrap's responsive framework",
        "Interactive Elements: Dynamic weather icons and interactive elements for a more immersive user experience"
      ],
      image: "/weather.png",
      liveUrl: "",
      githubUrl: "https://github.com/Dinithi1625403/weather",
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
