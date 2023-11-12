"use client";
import Image, { ImageLoaderProps } from "next/image";
import useCloudinary from "@/services/CloudinaryService";

const DetailsSection = () => {
  const { getImgOptimized } = useCloudinary();

  const loader = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <div className=" pt-5">
      <Image
        src={getImgOptimized({ name: "portfolio/assets/flg811xzifnw3ocgxwxm" })}
        alt="Hamza"
        loader={loader}
        width={200}
        height={100}
        className="rounded-full object-cover object-bottom w-[15rem] h-[15rem] mx-auto"
      />
      <div className="mt-7 px-8">
        <p className="text-justify mt-4">{`I'm a passionate full-stack software engineer with over 2 years of hands-on experience in the dynamic realm of software development. My journey is marked by a relentless pursuit of excellence, creativity, and a deep commitment to crafting seamless digital experiences.`}</p>
        <p className="text-justify mt-4">{`At the core of my expertise is full-stack development, where I create robust and innovative solutions. Specializing in Flutter, I seamlessly blend beauty and performance, crafting captivating and efficient mobile applications. In the realm of JavaScript and TypeScript-based web technologies, I thrive with mastery over tools like React, Node.js, Express, and Next.js.`}</p>
        <p className="text-justify mt-4">{`The computer is my canvas, and I paint with cutting-edge technologies to bring ideas to life. My diverse portfolio spans various domains, from fitness apps promoting healthier lifestyles to stock market analysis tools empowering informed decisions. I take pride in successfully bringing a myriad of ideas into reality.`}</p>
        <p className="text-justify mt-4">{`What sets me apart is not just technical acumen but an unwavering commitment to excellence. I approach each project with a blend of creativity and precision, ensuring the end product exceeds expectations.`}</p>
        <p className="text-justify mt-4">{`Embark on a journey with me to explore the endless possibilities of software development. Let's transform ideas into reality, crafting digital solutions that function seamlessly and leave a lasting impression.`}</p>
      </div>
    </div>
  );
};

export default DetailsSection;
