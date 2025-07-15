import useCloudinary from "@/services/CloudinaryService";

export const useProjects = (): Models.Project[] => {
  const { getImgOptimized } = useCloudinary();
  return [
    {
      name: "open gate cloud",
      description: "A cloud-based platform for launching your own LLMs",
      technologies: [
        "nextjs",
        "nestjs",
        "typescript",
        "mysql",
        "microservices",
        "kubernetes",
      ],
      frontend: ["nextjs", "mui", "tailwind"],
      backend: ["nestjs", "mysql", "minio"],
      infra: ["bare metal", "kubernetes", "docker compose"],
      languages: ["typescript", "python"],
      url: "http://opengatecloud.com/",
      image: getImgOptimized({
        name: "portfolio/projects/osjfetdgjitpbetow0aw",
      }),
      detailedDescription:
        "OGC provides a platform from where a simple user and experienced developer can fine tune there own LLMs using the HPC provided by OGC, and also host or benchmark them on the pioCloud.",
    },
    {
      name: "ultahost",
      description: "End-to-end web hosting platform",
      technologies: ["nextjs", "nestjs", "typescript", "mysql"],
      frontend: ["nextjs", "bootstrap", "formik"],
      backend: ["nestjs", "mysql", "typeorm"],
      infra: ["digital ocean", "bare metal"],
      languages: ["typescript"],
      url: "http://ultahost.com/",
      image: getImgOptimized({
        name: "portfolio/projects/whg80bqobfwvcun9b4ll",
      }),
      detailedDescription:
        "Ultahost is a web hosting platform that provides end-to-end solutions for hosting websites, applications, and databases. It offers a user-friendly interface, automated deployment, and scalable infrastructure to meet the needs of developers and businesses.",
    },
    {
      name: "nfirs",
      description: "Incident reporting system for fire departments",
      technologies: ["nextjs", "nestjs", "typescript", "mongodb"],
      frontend: ["nextjs", "mui", "tailwind"],
      backend: ["nestjs", "mongodb", "mongoose"],
      infra: ["digital ocean"],
      languages: ["typescript"],
      url: "http://nfirs.septemsystems.com/",
      image: getImgOptimized({
        name: "portfolio/projects/whg80bqobfwvcun9b4ll",
      }),
      detailedDescription:
        "NFIRS is an incident reporting system designed for fire departments to record and analyze data related to fire incidents. It provides a user-friendly interface for entering incident details, generating reports, and tracking trends over time.",
    },
    {
      name: "smart interview coach",
      description: "A platform for job seekers to practice interview questions",
      technologies: ["reactjs", "nestjs", "typescript", "mysql", "ant design"],
      frontend: ["react", "ant design", "bootstrap"],
      backend: ["nest", "mysql"],
      infra: ["digital ocean"],
      languages: ["typescript"],
      url: "https://smartinterviewcoach.com/",
      image: getImgOptimized({
        name: "portfolio/projects/ep77tagyxekhsvrzj3t4",
      }),
      detailedDescription:
        "This platform helps job seekers prepare for interviews by providing a database of common interview questions, tips, and resources. It allows users to practice answering questions and receive feedback to improve their interview skills.",
    },
    {
      name: "golf forever",
      description: "A fitness app containing workout videos for golfers",
      technologies: ["flutter", "reactjs", "ROR", "postgresql"],
      frontend: ["flutter", "react", "MUI"],
      backend: ["ROR", "postgresql"],
      infra: ["AWS", "EC2", "S3"],
      languages: ["javascript", "ruby"],
      url: "https://apps.apple.com/us/app/golfforever/id1541864959",
      image: getImgOptimized({
        name: "portfolio/projects/aspp2piiy5kjvklnbqfr",
      }),
      detailedDescription:
        "This app offers a wide range of golf-specific exercises and stretches designed to improve strength, flexibility, and performance on the golf course. It includes video tutorials and personalized workout plans.",
    },
    {
      name: "fit forever",
      description: "A fitness app containing workout videos for daily workout",
      technologies: ["flutter", "reactjs", "ROR", "postgresql"],
      frontend: ["flutter", "react", "MUI"],
      backend: ["ROR", "postgresql"],
      infra: ["AWS", "EC2", "S3"],
      languages: ["javascript", "ruby"],
      url: "https://fitforever.com/",
      image: getImgOptimized({
        name: "portfolio/projects/oypgt2qbg66g2fr1fv5g",
      }),
      detailedDescription:
        "This app provides a comprehensive collection of workout videos for various fitness levels and goals. It includes strength training, cardio, yoga, and HIIT workouts, making it easy for users to maintain a consistent exercise routine.",
    },
    {
      name: "Bull BD",
      description: "A stock market analysis tool for bangladesh stock market",
      technologies: ["flutter", "express", "mongodb", "nodejs"],
      frontend: ["vue", "flutter", "syncfusion"],
      backend: ["express", "nodejs", "mongodb", "socket.io"],
      infra: ["cloudflare", "digital ocean"],
      languages: ["javascript", "dart"],
      url: "https://play.google.com/store/apps/details?id=com.bullbd.stocksapp",
      image: getImgOptimized({
        name: "portfolio/projects/fwx4wxhtkzmt0qf9tjxt",
      }),
      detailedDescription:
        "This app provides real-time stock data, analysis tools, and news updates for the Bangladesh stock market. It helps investors make informed decisions by providing comprehensive market insights.",
    },
  ];
};

export const usePersonalProjects = (): Models.Project[] => {
  return [
    {
      name: "msgmorph (work in progress)",
      description: "An AI-powered platform to create, review and distribute your messages",
      technologies: ["Go", "gin", "postgres", "redis", "aws", "docker"],
      frontend: ["nextjs", "mui", "tailwind"],
      backend: ["gin", "postgres", "redis"],
      infra: ["aws", "docker"],
      languages: ["go", "typescript"],
      url: "https://msgmorph.com",
      detailedDescription:
        "A platform to create, review and distribute your messages. It uses AI to generate messages and also to review them before distribution.",
      image: "", 
    },
    {
      name: "halftwin (work in progress)",
      description: "An AI-powered match making platform",
      technologies: ["python", "flask", "jinja2", "qdrant", "openai", "docker", "heroku"],
      frontend: ["jinja2", "tailwind"],
      backend: ["flask", "qdrant", "openai"],
      infra: ["heroku", "docker"],
      languages: ["python", "typescript"],
      url: "https://halftwin.com",
      detailedDescription:
        "A match making platform that uses AI and single natual language query to find the best matches for you. It uses Qdrant for vector search and OpenAI for AI processing.",
      image: "", // dummy image property
    }
  ];
}