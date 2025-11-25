import { cacheLife } from "next/cache";
import MinimalUI from "@/components/MinimalUI";
import NoiseOverlay from "@/components/NoiseOverlay";
import ReactiveBackground from "@/components/ReactiveBackground";

export default async function Home() {
  "use cache";
  cacheLife("days");

  return (
    <main className="min-h-screen text-[#f0f0f0] relative overflow-hidden">
      <NoiseOverlay />
      <ReactiveBackground />
      <MinimalUI />
    </main>
  );
}
