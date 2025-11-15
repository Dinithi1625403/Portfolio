export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Full Stack Developer",
    subtitle: "Passionate Developer & Problem Solver",
    bio: "I am a dedicated full stack developer with 5+ years of experience in creating robust, scalable web applications. I specialize in modern JavaScript frameworks and have a passion for clean code, user experience, and innovative solutions. My journey in tech started with a curiosity for how things work, which has evolved into a career focused on building digital solutions that make a real impact.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    profileImage: "/api/placeholder/300/300", // You can replace this with your actual photo
  },
  
  socialLinks: [
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/johndoe",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com/in/johndoe",
      color: "hover:text-blue-500"
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/johndoe",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: "Mail",
      url: "mailto:john.doe@example.com",
      color: "hover:text-green-500"
    }
  ],

  technicalSkills: [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 88, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 82, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 75, category: "Tools" },
    { name: "AWS", level: 70, category: "Tools" }
  ],

  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Mentoring",
    "Adaptability",
    "Critical Thinking",
    "Leadership"
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "Express.js", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://taskmanager-demo.netlify.app",
      githubUrl: "https://github.com/johndoe/task-manager",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using weather APIs with beautiful data visualizations.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://weather-dash.netlify.app",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js featuring smooth animations and optimized performance.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://johndoe-portfolio.vercel.app",
      githubUrl: "https://github.com/johndoe/portfolio",
      featured: false
    }
  ],

  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Led development of multiple client projects, mentored junior developers, and implemented best practices for code quality and team productivity.",
      achievements: [
        "Increased application performance by 40% through code optimization",
        "Led a team of 5 developers on a major client project",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      company: "Digital Agency Co.",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
      achievements: [
        "Built 15+ responsive websites for diverse client base",
        "Reduced page load times by 50% across all projects",
        "Collaborated with design team to implement pixel-perfect UIs"
      ]
    },
    {
      company: "Startup Ventures",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Started as a junior developer, quickly progressed to handling full-stack responsibilities and contributing to architectural decisions.",
      achievements: [
        "Developed key features for the company's main product",
        "Improved test coverage from 30% to 85%",
        "Participated in code reviews and knowledge sharing sessions"
      ]
    }
  ],

  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2015 - 2019",
      gpa: "3.8/4.0"
    }
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      position: "Project Manager at Tech Solutions Inc.",
      text: "John is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Mike Chen",
      position: "Lead Designer at Digital Agency Co.",
      text: "Working with John was a pleasure. He has great attention to detail and always ensures that the final product matches the design perfectly while maintaining excellent performance.",
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
