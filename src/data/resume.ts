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
      "Go (Gin, Fiber)",
      "gRPC",
      "Node.js (Express, Hono, Fastify, Nest.js)",
      "Python (Flask, FastAPI)",
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
      role: "Software Engineer",
      company: "Rayn Group",
      period: "Jan 2025 – Present",
      highlights: [
        "Working on a healthcare project built on Google Cloud Platform with microservices architecture.",
        "Implementing features using TypeScript, Koa, Prisma, and clean architecture patterns.",
        "Utilizing Google Pub/Sub for service-to-service communication between microservices.",
        "Working on tasks assigned related to backend feature development and system architecture.",
      ],
    },
    {
      role: "Founder",
      company: "Indie Hacking",
      period: "Oct 2025 – Jan 2026",
      highlights: [
        "Built simpleemailapi.dev, a high-performance email API with p50 latency around 39ms, using Go, Connect RPC, TanStack Start, PostgreSQL, Tinybird, and Redis on AWS EC2 with AWS SES.",
        "Developed pagereport.app, a multi-layered AI agent system with Python and LangChain on GCP Cloud Run, achieving parallel processing across 100+ daily users.",
        "Launched researgent.com, an AI-powered LaTeX editor with Rust/Tauri for desktop and web with sandbox environments using Docker, and msgmorph.com, a B2B feedback engine with SDK and plugins for auth engines.",
        "Achieved product-market fit with initial traction of 100+ signups and multiple sales across product portfolio.",
      ],
    },
    {
      role: "Founding Software Engineer & Team Lead",
      company: "Stealth Startup",
      period: "Oct 2024 – Oct 2025",
      highlights: [
        "Joined as founding engineer from day one; developed MVP and scaled to 5 B2B clients and 5,000+ users over one year.",
        "Architected and developed backend microservices using Go with clean onion architecture, gRPC interfaces, and event-driven communication via Kafka and RabbitMQ.",
        "Designed and deployed complete system infrastructure on-premises with Kubernetes, API Gateway, and Keycloak for authentication and authorization.",
        "Led a team of 10 developers, establishing CI/CD pipelines, internal Go modules, and best practices for cloud-native development.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Septem Systems",
      period: "Sept 2023 – Oct 2024",
      highlights: [
        "Led the development and successful delivery of multiple projects using TypeScript, NestJS, and Go.",
        "Built robust backend systems with microservices architecture using Node.js, Nest.js, and Go, implementing clean architecture patterns.",
        "Developed enterprise frontend applications using React and TypeScript, following modern ES6+ practices.",
        "Created automated deployment pipelines using Docker and CI/CD tools.",
        "Mentored junior developers in JavaScript ecosystem, React best practices, and Go development.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Devsinc",
      period: "June 2022 – Sept 2023",
      highlights: [
        "Worked on a video streaming project managing mobile applications (Android/iOS) and backend services in Go, serving 22,000+ users.",
        "Developed cross-platform mobile applications using Flutter and contributed to web projects with React and Go.",
        "Worked as a junior engineer, assisting team members while successfully completing assigned tasks.",
        "Managed full lifecycle of mobile applications including CI/CD pipelines, deployment processes, and build optimizations.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Bull BD",
      period: "Sept 2021 – April 2022",
      highlights: [
        "Developed a real-time Flutter application for Bangladesh stock market updates with Node.js backend and MongoDB.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Team Createex",
      period: "Feb 2020 – March 2021",
      highlights: [
        "Developed multiple mobile applications using Flutter including hotel management and teeth aligner apps.",
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
      name: "Simple Email API",
      link: "https://simpleemailapi.dev",
      description:
        "High-performance email API with p50 latency around 39ms. Frontend built with TanStack Start; backend built with Go and Connect RPC for type-safe, high-speed communication. Scalable architecture using PostgreSQL, Tinybird for analytics, and Redis, deployed on AWS EC2 with AWS SES for email infrastructure.",
    },
    {
      name: "Page Report",
      link: "https://pagereport.app",
      description:
        "Landing page analysis platform using a swarm of AI agents built with Python and LangChain. Sophisticated GCP Cloud Run infrastructure with multiple layers of agents working in parallel; each agent deployed as separate Cloud Run service. Parallel agent architecture designed to reduce report generation time, serving 100+ users daily with efficient multi-layer processing.",
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
    {
      name: "GolfForever/FitForever",
      link: null,
      description: "Video streaming platform developed with Go, Flutter, and React, deployed on AWS.",
    },
  ],
  openSource: [
    {
      name: "better-auth-emails",
      link: "https://www.npmjs.com/package/better-auth-emails",
      description:
        "Package to send auth emails from better auth easily.",
    },
    {
      name: "vectordb",
      link: "https://github.com/MHamzaAhmad/vectordb",
      description:
        "A performant vector database written with Go and Rust (via C FFI), featuring SIMD and HNSW index.",
    },
  ],
};
