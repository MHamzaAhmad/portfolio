import dynamic from "next/dynamic";
import MinimalUI from "@/components/MinimalUI";
import NoiseOverlay from "@/components/NoiseOverlay";

const ReactiveBackground = dynamic(() => import("@/components/ReactiveBackground"), { ssr: false });

export default function Home() {
    return (
        <main className="min-h-screen text-[#f0f0f0] relative overflow-hidden">
            <NoiseOverlay />
            <ReactiveBackground />
            <MinimalUI />
        </main>
    );
}
