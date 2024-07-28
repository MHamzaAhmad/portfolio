import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "go",
  "python",
  "react",
  "flutter",
  "html5",
  "css3",
  "tailwindcss",
  "mui",
  "nodedotjs",
  "nestjs",
  "express",
  "fastify",
  "nextdotjs",
  "prisma",
  "typeorm",
  "amazonaws",
  "postgresql",
  "elasticsearch",
  "firebase",
  "nginx",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "socketdotio",
  "kubernetes",
  "terraform",
  "ansible",
  "traefikproxy",
  "gin",
  "googlecloud",
  "minio",
  "flask",
  "fastapi",
  "redis",
];

export function IconCloudComponent() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
