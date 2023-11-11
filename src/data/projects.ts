import useCloudinary from "@/services/CloudinaryService";

export const useProjects = (): Models.Project[] => {
  const { getImgOptimized } = useCloudinary();
  return [
    {
      name: "Bull BD",
      description: "A stock market analysis tool for bangladesh stock market",
      technologies: ["flutter", "express", "mongodb", "nodejs"],
      url: "https://play.google.com/store/apps/details?id=com.bullbd.stocksapp",
      image: getImgOptimized({ name: "portfolio/assets/mdqhmcgotjhhdn8vu9w5" }),
    },
  ];
};
