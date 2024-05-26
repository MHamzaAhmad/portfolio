import useCloudinary from "@/services/CloudinaryService";

export const useProjects = (): Models.Project[] => {
  const { getImgOptimized } = useCloudinary();
  return [
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
  ];
};
