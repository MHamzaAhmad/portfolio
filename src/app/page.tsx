import { cacheLife } from "next/cache";
import MinimalUI from "@/components/MinimalUI";

export default async function Home() {
  "use cache";
  cacheLife("days");

  return (
    <main className="min-h-screen bg-white">
      <MinimalUI />
    </main>
  );
}
