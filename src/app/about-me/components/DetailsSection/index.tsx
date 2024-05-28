"use client";
import Image, { ImageLoaderProps } from "next/image";
import useCloudinary from "@/services/CloudinaryService";

const DetailsSection = () => {
  const { getImgOptimized } = useCloudinary();

  const loader = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <div className="grid laptop:grid-cols-3 grid-col-1 p-8">
      <div className="flex items-center">
        <Image
          src={getImgOptimized({
            name: "portfolio/assets/flg811xzifnw3ocgxwxm",
          })}
          alt="Hamza"
          loader={loader}
          width={200}
          height={100}
          className="rounded-full object-cover object-bottom w-[15rem] h-[15rem] mx-auto"
        />
      </div>
      <div className="laptop:col-span-2 laptop:pe-48 laptop:mt-0 mt-4">
        <p className="text-justify text-xs">{`I'm a passionate full-stack software engineer with over 4 years of experience in the dynamic realm of software development. Specializing in Flutter, I craft captivating and efficient mobile applications, while mastering JavaScript and TypeScript-based web technologies with tools like React, Node.js, Express, and Next.js. My expertise also extends to Kubernetes, Docker, Go Lang, and Elasticsearch. I've led development for two large-scale projects, managing teams of 3 to 6 people, and successfully bringing a myriad of ideas to reality.`}</p>
        <p className="text-justify mt-4">{`My journey is marked by a relentless pursuit of excellence and creativity. From fitness apps promoting healthier lifestyles to stock market analysis tools empowering informed decisions, my diverse portfolio showcases my technical acumen and commitment to crafting seamless digital experiences. Join me in transforming ideas into reality, creating digital solutions that leave a lasting impression.`}</p>
      </div>
    </div>
  );
};

export default DetailsSection;
