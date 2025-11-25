export const resumeData = {
  profile: {
    name: "Muhammad Hamza",
    title: "Software Engineer",
    location: "Lahore, Pakistan",
    email: "hmzaawan88@gmail.com",
    phone: "+92 306 1158808",
    socials: {
      twitter: "https://x.com/hamzadotsh",
      website: "https://hamza-ahmad.vercel.app/",
      linkedin: "https://linkedin.com/in/mhamza88",
      github: "https://github.com/MHamzaAhmad",
    },
    summary:
      "A Software Engineer with a proven track record of designing, developing, and deploying robust applications across the entire software development lifecycle. Passionate about building and launching products, continually expanding expertise and fostering innovation. Highly proficient in Go, JavaScript, and TypeScript, with extensive experience in cloud-native architectures on AWS and GCP, leveraging Docker for containerization. Skilled in database management, including PostgreSQL and MongoDB.",
  },
  technologies: {
    languages: ["Go", "JavaScript", "TypeScript", "Python", "Docker"],
    frontend: [
      "React",
      "Redux",
      "Next.js",
      "Material-UI",
      "Tailwind CSS",
      "shadcn",
      "zustand",
      "svelte",
    ],
    backend: [
      "Node.js (Express, Fastify)",
      "Nest.js",
      "Python (Flask, FastAPI)",
      "Go (Gin, Fiber)",
      "gRPC",
      "REST APIs",
      "Kafka",
      "MongoDB",
    ],
    devops: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "Traefik",
      "On-prem",
      "Bare-metal",
    ],
  },
  experience: [
    {
      role: "Founder",
      company: "Indie Hacking",
      period: "Oct 2025 – Present",
      highlights: [
        "Founded and launched multiple startups including researgent.com, pagereport.app, and msgmorph.com.",
        "Developed full-stack applications leveraging Next.js and Svelte for frontends, and Go, Nest.js, and Python for backends.",
        "Engineered AI and RAG agents using Langchain, OpenAI, and Vercel AI SDK to deliver innovative solutions.",
        "Managed end-to-end deployment on Vercel and GCP, utilizing PostgreSQL (Supabase, NeonDB) for robust data management.",
        "Achieved initial market traction with one product, securing 100 signups and 2 sales, demonstrating product-market fit.",
        "Continuously expanded expertise in emerging technologies, focusing on building and serving solutions to real-world problems.",
      ],
    },
    {
      role: "Founding Software Engineer & Team Lead",
      company: "Stealth Startup",
      period: "Oct 2024 – Oct 2025",
      highlights: [
        "Spearheaded the architecture and development of multiple microservices from inception, utilizing Go and Python.",
        "Led a team of 10 developers, overseeing the design, implementation, and deployment of critical systems.",
        "Implemented robust CI/CD pipelines and deployed services on bare-metal infrastructure using Docker Compose and Kubernetes.",
        "Integrated API Gateways (Traefik, Nginx, Kong) to manage and secure microservice communication.",
        "Developed internal Go modules to streamline development and ensure code reusability across projects.",
        "Mentored and guided team members in best practices for cloud-native development and microservices architecture.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Septem Systems",
      period: "Sept 2023 – Oct 2024",
      highlights: [
        "Developed enterprise applications using React and TypeScript, following modern ES6+ practices",
        "Built robust backend systems with Node.js and Nest.js, implementing clean architecture patterns",
        "Created automated deployment pipelines using Docker and CI/CD tools",
        "Mentored junior developers in JavaScript ecosystem and React best practices",
      ],
    },
    {
      role: "Software Engineer",
      company: "Devsinc",
      period: "June 2022 – Sept 2023",
      highlights: [
        "Developed and maintained cross-platform mobile applications for Android and iOS using Flutter.",
        "Contributed to web projects, implementing features and fixes in React and Ruby on Rails applications.",
        "Managed the full lifecycle of mobile applications, including CI/CD pipelines and deployment processes.",
        "Implemented and optimized build and release processes for mobile applications.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Bull BD",
      period: "Sept 2021 – April 2022",
      highlights: [
        "Developed a real-time Flutter application for Bangladesh stock market updates, handling high-frequency data.",
        "Engineered the backend using Node.js and Express, integrating with stock market APIs and storing data in MongoDB.",
        "Implemented real-time data serving mechanisms to the frontend application, ensuring high performance under load.",
        "Spearheaded full-stack development, from data ingestion and processing to user interface and deployment.",
        "Optimized the system to efficiently manage and deliver real-time data streams to a large user base.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Team Createex",
      period: "Feb 2020 – March 2021",
      highlights: [
        "Developed multiple mobile applications for hotel management and teeth aligners using Flutter.",
        "Gained significant experience in the software development lifecycle and mobile application development.",
        "Collaborated with senior engineers to understand project requirements and deliver functional features.",
      ],
    },
  ],
  education: {
    degree: "BS in Computer Science",
    institution: "University of Engineering and Technology",
    gpa: "3.5",
  },
  projects: [
    {
      name: "Page Report",
      link: "https://pagereport.app",
      description:
        "Landing page analysis using AI agents built with Next.js, Python, LangChain, and GCP.",
    },
    {
      name: "Researgent",
      link: "https://researgent.com",
      description:
        "AI-powered editor for LaTeX built with Rust, Tauri, and Svelte for desktop and web. Deployed on DigitalOcean and Vercel, building sandbox environments for each project using Docker.",
    },
    {
      name: "MsgMorph",
      link: "https://msgmorph.com",
      description:
        "Feedback engine for B2B to collect user feedback after sign-up. Built with Next.js and NestJS, deployed on Vercel, with SDK and plugins created for auth engines and multiple languages for easier integration.",
    },
    {
      name: "Piosphere",
      link: "https://piosphere.ai",
      description:
        "OS for infrastructure management for AI workloads (finetuning, agents, benchmarking) with self-hosted models. Built with microservices (Go), Kubernetes, and PostgreSQL, deployed on on-prem bare metal servers.",
    },
    {
      name: "NFIRS Platform",
      link: null,
      description:
        "Platform for firefighters to parse and store reports and display data in dashboards. Built with NestJS, Next.js, and MongoDB.",
    },
    {
      name: "Smart Interview Coach",
      link: "https://smartinterviewcoach.com",
      description:
        "Platform for users to practice AI-generated interviews. Built with React and video analysis pipelines with computer vision to detect user behavior using custom-built models.",
    },
    {
      name: "Ultahost",
      link: "https://ultahost.com",
      description: "Web hosting platform built with Next.js and React.",
    },
  ],
};
