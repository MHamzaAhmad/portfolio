import useCloudinary from "@/services/CloudinaryService";

export const useProjects = (): Models.Project[] => {
  const { getImgOptimized } = useCloudinary();
  return [
    {
      name: "Bull BD",
      description: "A stock market analysis tool for bangladesh stock market",
      technologies: ["flutter", "express", "mongodb", "nodejs"],
      url: "https://play.google.com/store/apps/details?id=com.bullbd.stocksapp",
      image: getImgOptimized({
        name: "portfolio/projects/fwx4wxhtkzmt0qf9tjxt",
      }),
    },
    {
      name: "golf forever",
      description: "A fitness app containing workout videos for golfers",
      technologies: ["flutter", "reactjs", "ROR", "postgresql"],
      url: "https://apps.apple.com/us/app/golfforever/id1541864959",
      image: getImgOptimized({
        name: "portfolio/projects/aspp2piiy5kjvklnbqfr",
      }),
    },
    {
      name: "fit forever",
      description: "A fitness app containing workout videos for daily workout",
      technologies: ["flutter", "reactjs", "ROR", "postgresql"],
      url: "https://fitforever.com/",
      image: getImgOptimized({
        name: "portfolio/projects/oypgt2qbg66g2fr1fv5g",
      }),
    },
    {
      name: "smart interview coach",
      description: "A platform for job seekers to practice interview questions",
      technologies: ["reactjs", "nestjs", "typescript", "mysql", "ant design"],
      url: "https://sicmvp.septemsystems.com/login",
      image: getImgOptimized({
        name: "portfolio/projects/ep77tagyxekhsvrzj3t4",
      }),
    },
  ];
};
