"use client";
import Heading from "@/components/Base/Heading";
import MarkdownPreview from "@uiw/react-markdown-preview";

const source = `
\`\`\`ts
// A passionate and dedicated full-stack software engineer
// with over 2 years of hands-on experience in the dynamic world
// of software development. My journey has been marked
// by a relentless pursuit of excellence, creativity, and a deep commitment
// to crafting seamless digital experiences.

// At the heart of my expertise lies my proficiency in full-stack development,
// where I have honed my skills to create robust and innovative solutions.
// My specialization in Flutter has allowed me to weave together the perfect blend
// of beauty and performance, resulting in captivating and efficient mobile applications.

// I thrive in the realm of JavaScript and TypeScript-based web technologies,
// with mastery over tools like React, Node.js, Express, and Next.js.
// The web is my canvas, and I paint with a palette of cutting-edge technologies
// to bring ideas to life.

// I take pride in a diverse portfolio that spans various domains.
// From fitness apps that inspire healthier lifestyles to
// stock market analysis tools empowering informed decisions, from engaging
// chat applications to streamlined management apps, I've successfully
// brought a myriad of ideas into reality.

// What sets me apart is not just my technical acumen but my
// unwavering commitment to excellence. I approach each project
// with a blend of creativity and precision, ensuring that the
// end product not only meets but exceeds expectations.

// Embark on a journey with me as we explore the endless
// possibilities of software development. Let's transform ideas into reality,
// crafting digital solutions that not only function seamlessly
// but also leave a lasting impression.

Thank you for visiting my portfolio. Let's create something extraordinary together!

\`\`\`
`;
const DetailsSection = () => {
  return (
    <>
      <Heading className="mx-4 mt-4">
        {"> Hello there! I am Muhammad Hamza"}
      </Heading>
      <MarkdownPreview source={source} disableCopy />;
    </>
  );
};

export default DetailsSection;
